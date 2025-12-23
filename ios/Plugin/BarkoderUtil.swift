//
//  BarkoderUtil.swift
//  Plugin
//
//  Created by Goran on 16.11.23.
//  Copyright © 2023 Max Lynch. All rights reserved.
//

import UIKit
import BarkoderSDK
import Capacitor

class BarkoderUtil {
    
    static func barkoderResultsToJson(_ decoderResults: [DecoderResult], thumbnails: [UIImage]?, image: UIImage?) -> [String: Any]? {
        var resultsJsonArray = [[String: Any]]()
        
        // Process each decoder result separately
        for decoderResult in decoderResults {
            var resultJson = [String: Any]()
            
            resultJson["barcodeType"] = decoderResult.barcodeType.rawValue
            resultJson["barcodeTypeName"] = decoderResult.barcodeTypeName
            resultJson["binaryDataAsBase64"] = Data(decoderResult.binaryData).base64EncodedString()
            resultJson["textualData"] = decoderResult.textualData
            resultJson["characterSet"] = decoderResult.characterSet
            
            if let extraAsDictionary = decoderResult.extra as? [String: Any],
               !extraAsDictionary.isEmpty,
               let jsonData = try? JSONSerialization.data(withJSONObject: extraAsDictionary, options: []),
               let jsonString = String(data: jsonData, encoding: .utf8) {
                resultJson["extra"] = jsonString
            }
            
            if let pointsPtr = decoderResult.getLocationPoints() {
                let points = Array(UnsafeBufferPointer(start: pointsPtr, count: 4))
                let pointsJson: [[String: CGFloat]] = points.map { point in
                    ["x": point.x, "y": point.y]
                }
                resultJson["locationPoints"] = pointsJson
            }
            
            if let extra = decoderResult.extra,
               let sadlImage = BarkoderHelper.sadlImage(fromExtra: extra),
               let sadlImageData = sadlImage.pngData() {
                resultJson["sadlImageAsBase64"] = sadlImageData.base64EncodedString()
            }
            
            if decoderResult.barcodeTypeName == "MRZ" {
                if let images = decoderResult.images {
                    var mrzImagesArray = [[String: Any]]()
                    
                    for image in images {
                        if let imageName = image.name, let imageData = image.image.pngData() {
                            switch imageName {
                            case "main", "document", "signature", "picture":
                                let imageInfo: [String: Any] = [
                                    "name": imageName,
                                    "base64": imageData.base64EncodedString()
                                ]
                                mrzImagesArray.append(imageInfo)
                            default:
                                break
                            }
                        }
                    }
                    resultJson["mrzImagesAsBase64"] = mrzImagesArray
                }
            }
            
            resultsJsonArray.append(resultJson)
        }
        
        // Create the main result dictionary, starting with the results array
        var barkoderResult: [String: Any] = ["decoderResults": resultsJsonArray]
        
        // Process main image as base64 if available, outside the loop
        if let image = image, let imageData = image.pngData() {
            barkoderResult["resultImageAsBase64"] = imageData.base64EncodedString()
        }
        
        // Process thumbnails as an array of base64 strings if available, outside the loop
        if let thumbnails = thumbnails {
            let thumbnailsBase64Array = thumbnails.compactMap { thumbnail in
                thumbnail.pngData()?.base64EncodedString()
            }
            barkoderResult["resultThumbnailsAsBase64"] = thumbnailsBase64Array
        }
        return barkoderResult
    }
    
    func printPrettyJSON(jsonString: String) {
        // Convert JSON String to Data
        guard let jsonData = jsonString.data(using: .utf8) else {
            print("Invalid JSON string")
            return
        }
        
        do {
            // Deserialize JSON Data to a Dictionary or an Array
            let jsonObject = try JSONSerialization.jsonObject(with: jsonData, options: [])
            
            // Convert to Pretty Printed Data
            let prettyJSONData = try JSONSerialization.data(withJSONObject: jsonObject, options: .prettyPrinted)
            
            // Convert back to String
            if let prettyJSONString = String(data: prettyJSONData, encoding: .utf8) {
                print(prettyJSONString)
            }
        } catch {
            print("Error beautifying JSON: \(error)")
        }
    }
    
    static func parseColor(hexColor: String) -> Int? {
        let hex = hexColor.replacingOccurrences(of: "#", with: "")
        return Int("FF" + hex, radix: 16)
    }
    
    // Decode base64 image
    static func image(fromBase64 input: String?) -> UIImage? {
        guard var s = input?.trimmingCharacters(in: .whitespacesAndNewlines),
              !s.isEmpty
        else { return nil }
        
        // Strip data URL prefix if present
        if s.hasPrefix("data:") {
            guard let i = s.firstIndex(of: ",") else { return nil }
            s = String(s[s.index(after: i)...])
        }
        
        // Normalize URL-safe Base64 and fix padding
        s = s.replacingOccurrences(of: "-", with: "+")
            .replacingOccurrences(of: "_", with: "/")
        let pad = 4 - (s.count % 4)
        if pad < 4 { s.append(String(repeating: "=", count: pad)) }
        
        guard let data = Data(base64Encoded: s, options: .ignoreUnknownCharacters) else { return nil }
        return UIImage(data: data)
    }
    
}

// MARK: - Helping extensions

extension UIColor {
    
    convenience init(hexString: String, call: CAPPluginCall) {
        let hex = hexString.replacingOccurrences(of: "#", with: "").trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int = UInt64()
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3: // RGB (12-bit)
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6: // RGB (24-bit)
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8: // ARGB (32-bit)
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            call.reject(
                BarkoderPluginErrors.COLOR_NOT_SET.errorMessage,
                BarkoderPluginErrors.COLOR_NOT_SET.errorCode
            )
            
            // Adding default colors
            (a, r, g, b) = (255, 0, 0, 0)
        }
        self.init(red: CGFloat(r) / 255, green: CGFloat(g) / 255, blue: CGFloat(b) / 255, alpha: CGFloat(a) / 255)
    }
    
    func toHex() -> String? {
        guard let components = cgColor.components, components.count >= 3 else {
            return nil
        }
        
        let red = Float(components[0])
        let green = Float(components[1])
        let blue = Float(components[2])
        
        let hexString = String(
            format: "%02lX%02lX%02lX",
            lroundf(red * 255),
            lroundf(green * 255),
            lroundf(blue * 255)
        )
        
        return hexString
    }
    
    /// Parses "#RGB", "#ARGB", "#RRGGBB", or "#AARRGGBB" (alpha first when present).
    /// Returns nil for empty or invalid input.
    static func fromHexOrNil(_ raw: String?) -> UIColor? {
        guard var s = raw?.trimmingCharacters(in: .whitespacesAndNewlines),
              !s.isEmpty else { return nil }

        if s.hasPrefix("#") { s.removeFirst() }
        if s.lowercased().hasPrefix("0x") { s.removeFirst(2) }

        let len = s.count
        guard len == 3 || len == 4 || len == 6 || len == 8 else { return nil }

        var value: UInt64 = 0
        let scanner = Scanner(string: s)
        guard scanner.scanHexInt64(&value),
              scanner.isAtEnd || scanner.currentIndex == s.endIndex else { return nil }

        let a, r, g, b: UInt64
        switch len {
        case 3: // #RGB
            (a, r, g, b) = (255, (value >> 8) * 17,
                                  (value >> 4 & 0xF) * 17,
                                  (value & 0xF) * 17)
        case 4: // #ARGB
            (a, r, g, b) = ((value >> 12) * 17,
                            (value >> 8  & 0xF) * 17,
                            (value >> 4  & 0xF) * 17,
                            (value        & 0xF) * 17)
        case 6: // #RRGGBB
            (a, r, g, b) = (255,
                            value >> 16,
                            value >> 8 & 0xFF,
                            value & 0xFF)
        case 8: // #AARRGGBB
            (a, r, g, b) = (value >> 24,
                            value >> 16 & 0xFF,
                            value >> 8  & 0xFF,
                            value & 0xFF)
        default:
            return nil
        }

        return UIColor(red: CGFloat(r) / 255,
                       green: CGFloat(g) / 255,
                       blue: CGFloat(b) / 255,
                       alpha: CGFloat(a) / 255)
    }
    
}
