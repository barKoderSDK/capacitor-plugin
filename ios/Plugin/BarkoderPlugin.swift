import Foundation
import Capacitor
import UIKit
import BarkoderSDK
import Barkoder

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(BarkoderPlugin)
public class BarkoderPlugin: CAPPlugin {
    
    var barkoderView: BarkoderView!
    var barkoderViewBounds: [String : Double]!
    var licenseKey: String = ""
    
    @objc func initialize(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.barkoderViewBounds = [
                "width": call.getDouble("width") ?? 400,
                "height": call.getDouble("height") ?? 400,
                "x": call.getDouble("x") ?? 0,
                "y": call.getDouble("y") ?? 0,
            ]
            let frame = CGRect(x: self.barkoderViewBounds["x"] ?? 0, y: self.barkoderViewBounds["y"] ?? 0, width: self.barkoderViewBounds["width"] ?? 0, height: self.barkoderViewBounds["height"] ?? 0)
            self.barkoderView = BarkoderView(frame: frame)
            self.createBarkoderConfig()
            
            self.bridge?.viewController?.view.addSubview(self.barkoderView)
        }
        call.resolve([
            "barkoderView initialized": true
        ])
    }
    
    private func createBarkoderConfig() {
        // In order to perform scanning, config property need to be set before
        // If license key is not valid you will receive results with asterisks inside
        barkoderView.config = BarkoderConfig(licenseKey: licenseKey) { licenseResult in
            print("Licensing SDK: \(licenseResult)")
        }
    }
    
    @objc func registerWithLicenseKey(_ call: CAPPluginCall) {
        guard let licenseKey = call.getString("licenseKey") else {
            return
        }
        
        DispatchQueue.main.async {
            self.licenseKey = licenseKey
        }
        
        call.resolve([
            "licenseKey": licenseKey
        ])
    }
    
}

extension BarkoderPlugin: BarkoderResultDelegate {
    
    public func scanningFinished(_ decoderResults: [DecoderResult], thumbnails: [UIImage]?, image: UIImage?) {
        guard let barkoderResultsToJson = BarkoderUtil.barkoderResultsToJson(decoderResults, thumbnails: thumbnails, image: image) else { return }
        self.notifyListeners("barkoderResultEvent", data: barkoderResultsToJson)
    }
    
}

// MARK: - Setters

extension BarkoderPlugin {
    
    @objc func setZoomFactor(_ call: CAPPluginCall) {
        guard let zoomFactor = call.getFloat("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.setZoomFactor(zoomFactor)
        }
        
        call.resolve()
    }
    
    @objc func setFlashEnabled(_ call: CAPPluginCall) {
        guard let enabled = call.getBool("enabled") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.setFlash(enabled)
        }
        
        call.resolve()
    }
    
    @objc func startCamera(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.barkoderView.startCamera()
        }
        
        call.resolve()
    }
    
    @objc func startScanning(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            try? self.barkoderView.startScanning(self)
        }
        
        call.resolve()
    }
    
    @objc func stopScanning(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.barkoderView.stopScanning()
        }
        
        call.resolve()
    }
    
    @objc func pauseScanning(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.barkoderView.pauseScanning()
        }
        
        call.resolve()
    }
    
    @objc func setLocationLineColor(_ call: CAPPluginCall) {
        guard let hexColor = call.getString("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.locationLineColor = UIColor(hexString: hexColor, call: call)
        }
        
        call.resolve()
    }
    
    @objc func setLocationLineWidth(_ call: CAPPluginCall) {
        guard let lineWidth = call.getFloat("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.locationLineWidth = lineWidth
        }
        
        call.resolve()
    }
    
    @objc func setRoiLineColor(_ call: CAPPluginCall) {
        guard let hexColor = call.getString("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.roiLineColor = UIColor(hexString: hexColor, call: call)
        }
        
        call.resolve()
    }
    
    @objc func setRoiLineWidth(_ call: CAPPluginCall) {
        guard let lineWidth = call.getFloat("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.roiLineWidth = lineWidth
        }
        
        call.resolve()
    }
    
    @objc func setRoiOverlayBackgroundColor(_ call: CAPPluginCall) {
        guard let hexColor = call.getString("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.roiOverlayBackgroundColor = UIColor(hexString: hexColor, call: call)
        }
        
        call.resolve()
    }
    
    @objc func setCloseSessionOnResultEnabled(_ call: CAPPluginCall) {
        guard let enabled = call.getBool("enabled") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.closeSessionOnResultEnabled = enabled
        }
        
        call.resolve()
    }
    
    @objc func setImageResultEnabled(_ call: CAPPluginCall) {
        guard let enabled = call.getBool("enabled") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.imageResultEnabled = enabled
        }
        
        call.resolve()
    }
    
    @objc func setLocationInImageResultEnabled(_ call: CAPPluginCall) {
        guard let enabled = call.getBool("enabled") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.locationInImageResultEnabled = enabled
        }
        
        call.resolve()
    }
    
    @objc func setRegionOfInterest(_ call: CAPPluginCall) {
        guard let arguments = call.options as? [String: Any],
              let left = arguments["left"] as? CGFloat,
              let width = arguments["width"] as? CGFloat,
              let top = arguments["top"] as? CGFloat,
              let height = arguments["height"] as? CGFloat
        else {
            return
        }
        
        DispatchQueue.main.async {
            
            let roi = CGRect(
                x: left,
                y: top,
                width: width,
                height: height
            )
            
            do {
                try self.barkoderView.config?.setRegionOfInterest(roi)
                
                call.resolve()
            } catch {
                call.reject(
                    BarkoderPluginErrors.ROI_NOT_SET.errorMessage,
                    BarkoderPluginErrors.ROI_NOT_SET.errorCode
                )
            }
            
        }
        
    }
    
    @objc func setThreadsLimit(_ call: CAPPluginCall) {
        guard let threadsLimit = call.getInt("value") else {
            return
        }
        
        DispatchQueue.main.async {
            
            do {
                try self.barkoderView.config?.setThreadsLimit(threadsLimit)
                
                call.resolve()
            } catch {
                call.reject(
                    BarkoderPluginErrors.THREADS_LIMIT_NOT_SET.errorMessage,
                    BarkoderPluginErrors.THREADS_LIMIT_NOT_SET.errorCode
                )
            }
            
        }
    }
    
    @objc func setLocationInPreviewEnabled(_ call: CAPPluginCall) {
        guard let enabled = call.getBool("enabled") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.locationInPreviewEnabled = enabled
        }
        
        call.resolve()
    }
    
    @objc func setPinchToZoomEnabled(_ call: CAPPluginCall) {
        guard let enabled = call.getBool("enabled") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.pinchToZoomEnabled = enabled
        }
        
        call.resolve()
    }
    
    @objc func setRegionOfInterestVisible(_ call: CAPPluginCall) {
        guard let regionOfInterestVisible = call.getBool("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.regionOfInterestVisible = regionOfInterestVisible
        }
        
        call.resolve()
    }
    
    @objc func setBarkoderResolution(_ call: CAPPluginCall) {
        guard let index = call.getInt("value") else {
            return
        }
        
        if let barkoderResolution = BarkoderView.BarkoderResolution.init(rawValue: index) {
            DispatchQueue.main.async {
                self.barkoderView.config?.barkoderResolution = barkoderResolution
            }
            
            call.resolve()
        } else {
            call.reject(
                BarkoderPluginErrors.INVALID_RESOLUTION.errorMessage,
                BarkoderPluginErrors.INVALID_RESOLUTION.errorCode
            )
        }
    }
    
    @objc func setBeepOnSuccessEnabled(_ call: CAPPluginCall) {
        guard let enabled = call.getBool("enabled") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.beepOnSuccessEnabled = enabled
        }
        
        call.resolve()
    }
    
    @objc func setVibrateOnSuccessEnabled(_ call: CAPPluginCall) {
        guard let enabled = call.getBool("enabled") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.vibrateOnSuccessEnabled = enabled
        }
        
        call.resolve()
    }
    
    @objc func showLogMessages(_ call: CAPPluginCall) {
        guard let show = call.getBool("value") else {
            return
        }
        
        DispatchQueue.main.async {
            // TODO: - Logic about log messages
        }
        
        call.resolve()
    }
    
    @objc func setBarcodeTypeLengthRange(_ call: CAPPluginCall) {
        guard let arguments = call.options as? [String: Any],
              let typeRawValue = arguments["type"] as? UInt32,
              let min = arguments["min"] as? UInt32,
              let max = arguments["max"] as? UInt32
        else {
            return
        }
        
        guard let specificConfig = SpecificConfig(decoderType: .init(rawValue: typeRawValue)) else {
            call.reject(
                BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED.errorMessage,
                BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED.errorCode
            )
            return
        }
        
        switch specificConfig.decoderType() {
        case Code128, Code93, Code39, Code11, Msi, Codabar:
            specificConfig.setLengthRangeWithMinimum(Int32(min), maximum: Int32(max))
            
            call.resolve()
        default:
            call.reject(
                BarkoderPluginErrors.BARCODE_TYPE_NOT_SUPPORTED.errorMessage,
                BarkoderPluginErrors.BARCODE_TYPE_NOT_SUPPORTED.errorCode
            )
        }
    }
    
    @objc func setEncodingCharacterSet(_ call: CAPPluginCall) {
        guard let characterSet = call.getString("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.decoderConfig?.encodingCharacterSet = characterSet
        }
        
        call.resolve()
    }
    
    @objc func setDecodingSpeed(_ call: CAPPluginCall) {
        guard let index = call.getInt("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.decoderConfig?.decodingSpeed = DecodingSpeed.init(UInt32(index))
        }
        
        call.resolve()
    }
    
    @objc func setFormattingType(_ call: CAPPluginCall) {
        guard let index = call.getInt("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.decoderConfig?.formatting = Formatting.init(UInt32(index))
        }
        
        call.resolve()
    }
        
    @objc func setCode11ChecksumType(_ call: CAPPluginCall) {
        guard let index = call.getInt("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.decoderConfig?.code11.checksum = .init(UInt32(index))
        }
        
        call.resolve()
    }
    
    @objc func setMsiChecksumType(_ call: CAPPluginCall) {
        guard let index = call.getInt("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.decoderConfig?.msi.checksum = .init(UInt32(index))
        }
        
        call.resolve()
    }
    
    @objc func setCode39ChecksumType(_ call: CAPPluginCall) {
        guard let index = call.getInt("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.decoderConfig?.code39.checksum = .init(UInt32(index))
        }
        
        call.resolve()
    }
    
    @objc func setBarcodeTypeEnabled(_ call: CAPPluginCall) {
        if let arguments = call.options as? [String: Any] {
            if let enabled = arguments["enabled"] as? Bool,
               let typeRawValue = arguments["type"] as? UInt32 {
                DispatchQueue.main.async {
                    guard let decoderConfig = self.barkoderView.config?.decoderConfig else { return }
                    
                    guard let specificConfig = SpecificConfig(decoderType: .init(rawValue: typeRawValue)) else {
                        call.reject(
                            BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED.errorMessage,
                            BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED.errorCode
                        )
                        return
                    }
                    
                    switch specificConfig.decoderType() {
                    case Aztec:
                        decoderConfig.aztec.enabled = enabled
                    case AztecCompact:
                        decoderConfig.aztecCompact.enabled = enabled
                    case QR:
                        decoderConfig.qr.enabled = enabled
                    case QRMicro:
                        decoderConfig.qrMicro.enabled = enabled
                    case Code128:
                        decoderConfig.code128.enabled = enabled
                    case Code93:
                        decoderConfig.code93.enabled = enabled
                    case Code39:
                        decoderConfig.code39.enabled = enabled
                    case Codabar:
                        decoderConfig.codabar.enabled = enabled
                    case Code11:
                        decoderConfig.code11.enabled = enabled
                    case Msi:
                        decoderConfig.msi.enabled = enabled
                    case UpcA:
                        decoderConfig.upcA.enabled = enabled
                    case UpcE:
                        decoderConfig.upcE.enabled = enabled
                    case UpcE1:
                        decoderConfig.upcE1.enabled = enabled
                    case Ean13:
                        decoderConfig.ean13.enabled = enabled
                    case Ean8:
                        decoderConfig.ean8.enabled = enabled
                    case PDF417:
                        decoderConfig.pdf417.enabled = enabled
                    case PDF417Micro:
                        decoderConfig.pdf417Micro.enabled = enabled
                    case Datamatrix:
                        decoderConfig.datamatrix.enabled = enabled
                    case Code25:
                        decoderConfig.code25.enabled = enabled
                    case Interleaved25:
                        decoderConfig.interleaved25.enabled = enabled
                    case ITF14:
                        decoderConfig.itf14.enabled = enabled
                    case IATA25:
                        decoderConfig.iata25.enabled = enabled
                    case Matrix25:
                        decoderConfig.matrix25.enabled = enabled
                    case Datalogic25:
                        decoderConfig.datalogic25.enabled = enabled
                    case COOP25:
                        decoderConfig.coop25.enabled = enabled
                    case Code32:
                        decoderConfig.code32.enabled = enabled
                    case Telepen:
                        decoderConfig.telepen.enabled = enabled
                    case Dotcode:
                        decoderConfig.dotcode.enabled = enabled
                    case IDDocument:
                        decoderConfig.idDocument.enabled = enabled
                    default:
                        call.reject(
                            BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED.errorMessage,
                            BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED.errorCode
                        )
                    }
                }
                call.resolve()
            }
        }
    }
    
    @objc func setMulticodeCachingEnabled(_ call: CAPPluginCall) {
        guard let multicodeCachingEnabled = call.getBool("enabled") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.setMulticodeCachingEnabled(multicodeCachingEnabled)
        }
        
        call.resolve()
    }
    
    @objc func setMulticodeCachingDuration(_ call: CAPPluginCall) {
        guard let multicodeCachingDuration = call.getInt("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.setMulticodeCachingDuration(multicodeCachingDuration)
        }
        
        call.resolve()
    }
    
    @objc func setMaximumResultsCount(_ call: CAPPluginCall) {
        guard let index = call.getInt("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.decoderConfig?.maximumResultsCount = Int32(index)
        }
        
        call.resolve()
    }
    
    @objc func setBarcodeThumbnailOnResultEnabled(_ call: CAPPluginCall) {
        guard let enabled = call.getBool("enabled") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.barcodeThumbnailOnResult = enabled
        }
        
        call.resolve()
    }
    
    @objc func setDuplicatesDelayMs(_ call: CAPPluginCall) {
        guard let index = call.getInt("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.decoderConfig?.duplicatesDelayMs = Int32(index)
        }
        
        call.resolve()
    }
    
    @objc func setThresholdBetweenDuplicatesScans(_ call: CAPPluginCall) {
        guard let thresholdBetweenDuplicatesScans = call.getInt("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.thresholdBetweenDuplicatesScans = thresholdBetweenDuplicatesScans
        }
        
        call.resolve()
    }
    
    @objc func setUpcEanDeblurEnabled(_ call: CAPPluginCall) {
        guard let enabled = call.getBool("enabled") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.decoderConfig?.upcEanDeblur = enabled
        }
        
        call.resolve()
    }
    
    @objc func setMisshaped1DEnabled(_ call: CAPPluginCall) {
        guard let enabled = call.getBool("enabled") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.decoderConfig?.enableMisshaped1D = enabled
        }
        
        call.resolve()
    }
    
    @objc func setEnableVINRestrictions(_ call: CAPPluginCall) {
        guard let enableVINRestrictions = call.getBool("value") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.decoderConfig?.enableVINRestrictions = enableVINRestrictions
        }
        
        call.resolve()
    }
    
    @objc func setDatamatrixDpmModeEnabled(_ call: CAPPluginCall) {
        guard let enabled = call.getBool("enabled") else {
            return
        }
        
        DispatchQueue.main.async {
            self.barkoderView.config?.decoderConfig?.datamatrix.dpmMode = enabled ? 1 : 0
        }
        
        call.resolve()
    }
    
    @objc func configureBarkoder(_ call: CAPPluginCall) {
        guard var barkoderConfigAsDictionary = call.getObject("barkoderConfig"), let barkoderConfig = barkoderView.config else { return }
                
        let barkoderJsonData: Data
        
        // Changing values for colors from hexes to decimal values
        // Converting from Dictionary -> Data with utf8 encoding
        do {
            if let colorHexCode = barkoderConfigAsDictionary["roiLineColor"] as? String {
                barkoderConfigAsDictionary["roiLineColor"] = BarkoderUtil.parseColor(hexColor: colorHexCode)
            }
            
            if let colorHexCode = barkoderConfigAsDictionary["locationLineColor"] as? String {
                barkoderConfigAsDictionary["locationLineColor"] = BarkoderUtil.parseColor(hexColor: colorHexCode)
            }
            
            if let colorHexCode = barkoderConfigAsDictionary["roiOverlayBackgroundColor"] as? String {
                barkoderConfigAsDictionary["roiOverlayBackgroundColor"] = BarkoderUtil.parseColor(hexColor: colorHexCode)
            }
            
            let jsonData = try JSONSerialization.data(withJSONObject: barkoderConfigAsDictionary as Any, options: .prettyPrinted)
            
            var convertedBarkoderConfigAsString = String(data: jsonData, encoding: .utf8) ?? ""
            
            zip(["aztec", "aztecCompact", "qr", "qrMicro", "code128", "code93", "code39", "codabar", "code11", "msi",  "upcA", "upcE", "upcE1", "ean13", "ean8", "pdf417", "pdf417Micro", "datamatrix", "code25", "interleaved25", "itf14", "iata25", "matrix25", "datalogic25", "coop25", "code32", "telepen", "dotcode", "idDocument", "minLength", "maxLength", "threadsLimit", "roiX", "roiY", "roiWidth", "roiHeight"],
                
                ["Aztec", "Aztec Compact", "QR", "QR Micro", "Code 128", "Code 93", "Code 39", "Codabar", "Code 11", "MSI", "Upc-A", "Upc-E", "Upc-E1", "Ean-13", "Ean-8", "PDF 417", "PDF 417 Micro", "Datamatrix", "Code 25", "Interleaved 2 of 5", "ITF 14", "IATA 25", "Matrix 25", "Datalogic 25", "COOP 25", "Code 32", "Telepen", "Dotcode", "ID Document", "minimumLength", "maximumLength", "maxThreads", "roi_x", "roi_y", "roi_w", "roi_h"]).forEach {
                convertedBarkoderConfigAsString = convertedBarkoderConfigAsString.replacingOccurrences(of: $0, with: $1, options: .literal)
            }
            
            barkoderJsonData = Data(convertedBarkoderConfigAsString.utf8)
        } catch {
            call.reject(
                BarkoderPluginErrors.BARKODER_CONFIG_IS_NOT_VALID.errorMessage,
                BarkoderPluginErrors.BARKODER_CONFIG_IS_NOT_VALID.errorCode
            )
            return
        }
        
        BarkoderHelper.applyConfigSettingsFromJson(
            barkoderConfig,
            jsonData: barkoderJsonData
        ) { [weak self] config, error in
            if let error = error {
                call.reject(
                    BarkoderPluginErrors.BARKODER_CONFIG_IS_NOT_VALID.errorMessage,
                    BarkoderPluginErrors.BARKODER_CONFIG_IS_NOT_VALID.errorCode
                )
            } else {
                DispatchQueue.main.async {
                    self?.barkoderView.config = config
                }
                call.resolve()
            }
        }
    }
    
}

// MARK: - Getters

extension BarkoderPlugin {
    
    @objc func isFlashAvailable(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.barkoderView.isFlashAvailable { flashAvailable in
                call.resolve(["isFlashAvailable": flashAvailable])
            }
        }
    }
    
    @objc func isCloseSessionOnResultEnabled(_ call: CAPPluginCall) {
        call.resolve(["isCloseSessionOnResultEnabled": barkoderView.config?.closeSessionOnResultEnabled as Any])
    }
    
    @objc func isImageResultEnabled(_ call: CAPPluginCall) {
        call.resolve(["isImageResultEnabled": barkoderView.config?.imageResultEnabled as Any])
    }
    
    @objc func isLocationInImageResultEnabled(_ call: CAPPluginCall) {
        call.resolve(["isLocationInImageResultEnabled": barkoderView.config?.locationInImageResultEnabled as Any])
    }
    
    @objc func isLocationInPreviewEnabled(_ call: CAPPluginCall) {
        call.resolve(["isLocationInPreviewEnabled": barkoderView.config?.locationInPreviewEnabled as Any])
    }
    
    @objc func isPinchToZoomEnabled(_ call: CAPPluginCall) {
        call.resolve(["isPinchToZoomEnabled": barkoderView.config?.pinchToZoomEnabled as Any])
    }
    
    @objc func isRegionOfInterestVisible(_ call: CAPPluginCall) {
        call.resolve(["isRegionOfInterestVisible": barkoderView.config?.regionOfInterestVisible as Any])
    }
    
    @objc func isBeepOnSuccessEnabled(_ call: CAPPluginCall) {
        call.resolve(["isBeepOnSuccessEnabled": barkoderView.config?.beepOnSuccessEnabled as Any])
    }
    
    @objc func isVibrateOnSuccessEnabled(_ call: CAPPluginCall) {
        call.resolve(["isVibrateOnSuccessEnabled": barkoderView.config?.vibrateOnSuccessEnabled as Any])
    }
    
    @objc func getVersion(_ call: CAPPluginCall) {
        call.resolve(["getVersion": iBarkoder.GetVersion() as Any])
    }
    
    @objc func getLocationLineColorHex(_ call: CAPPluginCall) {
        call.resolve(["getLocationLineColorHex": barkoderView.config?.locationLineColor.toHex() as Any])
    }
    
    @objc func getRoiLineColorHex(_ call: CAPPluginCall) {
        call.resolve(["getRoiLineColorHex": barkoderView.config?.roiLineColor.toHex() as Any])
    }
    
    @objc func getRoiOverlayBackgroundColorHex(_ call: CAPPluginCall) {
        call.resolve(["getRoiOverlayBackgroundColorHex": barkoderView.config?.roiOverlayBackgroundColor.toHex() as Any])
    }
    
    @objc func getMaxZoomFactor(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.barkoderView.getMaxZoomFactor { maxZoomFactor in
                call.resolve(["getMaxZoomFactor": maxZoomFactor])
            }
        }
    }
    
    @objc func getLocationLineWidth(_ call: CAPPluginCall) {
        call.resolve(["getLocationLineWidth": barkoderView.config?.locationLineWidth as Any])
    }
    
    @objc func getRoiLineWidth(_ call: CAPPluginCall) {
        call.resolve(["getRoiLineWidth": barkoderView.config?.roiLineWidth as Any])
    }
    
    @objc func getRegionOfInterest(_ call: CAPPluginCall) {
        guard let roi = barkoderView.config?.getRegionOfInterest() else {
            call.reject(
                BarkoderPluginErrors.BARKODER_CONFIG_IS_NOT_VALID.errorMessage,
                BarkoderPluginErrors.BARKODER_CONFIG_IS_NOT_VALID.errorCode
            )
            return
        }
        
        call.resolve(["roiX": roi.minX, "roiY": roi.minY, "roiWidth": roi.width, "roiHeight": roi.height])
    }
    
    @objc func getBarcodeTypeLengthRange(_ call: CAPPluginCall) {
        guard let typeRawValue = call.getInt("type") else {
            return
        }
        
        DispatchQueue.main.async {
            
            guard let decoderConfig = self.barkoderView.config?.decoderConfig else {
                return
            }
            
            guard let specificConfig = SpecificConfig(decoderType: .init(rawValue: UInt32(typeRawValue))) else {
                call.reject(
                    BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED.errorMessage,
                    BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED.errorCode
                )
                return
            }
            
            switch specificConfig.decoderType() {
            case Code128:
                call.resolve([decoderConfig.code128.typeName(): [decoderConfig.code128.minimumLength, decoderConfig.code128.maximumLength] as Any])
            case Code93:
                call.resolve([decoderConfig.code93.typeName(): [decoderConfig.code93.minimumLength, decoderConfig.code93.maximumLength] as Any])
            case Code11:
                call.resolve([decoderConfig.code11.typeName(): [decoderConfig.code11.minimumLength, decoderConfig.code11.maximumLength] as Any])
            case Msi:
                call.resolve([decoderConfig.msi.typeName(): [decoderConfig.msi.minimumLength, decoderConfig.msi.maximumLength] as Any])
            case Codabar:
                call.resolve([decoderConfig.codabar.typeName(): [decoderConfig.codabar.minimumLength, decoderConfig.codabar.maximumLength] as Any])
            case Code39:
                call.resolve([decoderConfig.code39.typeName(): [decoderConfig.code39.minimumLength, decoderConfig.code39.maximumLength] as Any])
            default:
                call.reject(
                    BarkoderPluginErrors.BARCODE_TYPE_NOT_SUPPORTED.errorMessage,
                    BarkoderPluginErrors.BARCODE_TYPE_NOT_SUPPORTED.errorCode
                )
            }
        }
    }
    
    @objc func getMsiChecksumType(_ call: CAPPluginCall) {
        call.resolve(["getMsiChecksumType": barkoderView.config?.decoderConfig?.msi.checksum.rawValue as Any])
    }
    
    @objc func getCode39ChecksumType(_ call: CAPPluginCall) {
        call.resolve(["getCode39ChecksumType": barkoderView.config?.decoderConfig?.code39.checksum.rawValue as Any])
    }
    
    @objc func getCode11ChecksumType(_ call: CAPPluginCall) {
        call.resolve(["getCode11ChecksumType": barkoderView.config?.decoderConfig?.code11.checksum.rawValue as Any])
    }
    
    @objc func getEncodingCharacterSet(_ call: CAPPluginCall) {
        call.resolve(["getEncodingCharacterSet": barkoderView.config?.decoderConfig?.encodingCharacterSet as Any])
    }
    
    @objc func getDecodingSpeed(_ call: CAPPluginCall) {
        call.resolve(["getDecodingSpeed": barkoderView.config?.decoderConfig?.decodingSpeed.rawValue as Any])
    }
    
    @objc func getFormattingType(_ call: CAPPluginCall) {
        call.resolve(["getFormattingType": barkoderView.config?.decoderConfig?.formatting.rawValue as Any])
    }
    
    @objc func getThreadsLimit(_ call: CAPPluginCall) {
        call.resolve(["getThreadsLimit": barkoderView.config?.getThreadsLimit() as Any])
    }
    
    @objc func getMaximumResultsCount(_ call: CAPPluginCall) {
        call.resolve(["getMaximumResultsCount": barkoderView.config?.decoderConfig?.maximumResultsCount as Any])
    }
    
    @objc func getDuplicatesDelayMs(_ call: CAPPluginCall) {
        call.resolve(["getDuplicatesDelayMs": barkoderView.config?.decoderConfig?.duplicatesDelayMs as Any])
    }
    
    @objc func isBarcodeTypeEnabled(_ call: CAPPluginCall) {
        guard let typeRawValue = call.getInt("type") else {
            return
        }
        
        DispatchQueue.main.async {
            
            guard let decoderConfig = self.barkoderView.config?.decoderConfig else {
                return
            }
            
            guard let specificConfig = SpecificConfig(decoderType: .init(rawValue: UInt32(typeRawValue))) else {
                call.reject(
                    BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED.errorMessage,
                    BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED.errorCode
                )
                return
            }
            
            switch specificConfig.decoderType() {
            case Aztec:
                call.resolve([decoderConfig.aztec.typeName(): decoderConfig.aztec.enabled])
            case AztecCompact:
                call.resolve([decoderConfig.aztecCompact.typeName(): decoderConfig.aztecCompact.enabled])
            case QR:
                call.resolve([decoderConfig.qr.typeName(): decoderConfig.qr.enabled])
            case QRMicro:
                call.resolve([decoderConfig.qrMicro.typeName(): decoderConfig.qrMicro.enabled])
            case Code128:
                call.resolve([decoderConfig.code128.typeName(): decoderConfig.code128.enabled])
            case Code93:
                call.resolve([decoderConfig.code93.typeName(): decoderConfig.code93.enabled])
            case Code39:
                call.resolve([decoderConfig.code39.typeName(): decoderConfig.code39.enabled])
            case Codabar:
                call.resolve([decoderConfig.codabar.typeName(): decoderConfig.codabar.enabled])
            case Code11:
                call.resolve([decoderConfig.code11.typeName(): decoderConfig.code11.enabled])
            case Msi:
                call.resolve([decoderConfig.msi.typeName(): decoderConfig.msi.enabled])
            case UpcA:
                call.resolve([decoderConfig.upcA.typeName(): decoderConfig.upcA.enabled])
            case UpcE:
                call.resolve([decoderConfig.upcE.typeName(): decoderConfig.upcE.enabled])
            case UpcE1:
                call.resolve([decoderConfig.upcE1.typeName(): decoderConfig.upcE1.enabled])
            case Ean13:
                call.resolve([decoderConfig.ean13.typeName(): decoderConfig.ean13.enabled])
            case Ean8:
                call.resolve([decoderConfig.ean8.typeName(): decoderConfig.ean8.enabled])
            case PDF417:
                call.resolve([decoderConfig.pdf417.typeName(): decoderConfig.pdf417.enabled])
            case PDF417Micro:
                call.resolve([decoderConfig.pdf417Micro.typeName(): decoderConfig.pdf417Micro.enabled])
            case Datamatrix:
                call.resolve([decoderConfig.datamatrix.typeName(): decoderConfig.datamatrix.enabled])
            case Code25:
                call.resolve([decoderConfig.code25.typeName(): decoderConfig.code25.enabled])
            case Interleaved25:
                call.resolve([decoderConfig.interleaved25.typeName(): decoderConfig.interleaved25.enabled])
            case ITF14:
                call.resolve([decoderConfig.itf14.typeName(): decoderConfig.itf14.enabled])
            case IATA25:
                call.resolve([decoderConfig.iata25.typeName(): decoderConfig.iata25.enabled])
            case Matrix25:
                call.resolve([decoderConfig.matrix25.typeName(): decoderConfig.matrix25.enabled])
            case Datalogic25:
                call.resolve([decoderConfig.datalogic25.typeName(): decoderConfig.datalogic25.enabled])
            case COOP25:
                call.resolve([decoderConfig.coop25.typeName(): decoderConfig.coop25.enabled])
            case Code32:
                call.resolve([decoderConfig.code32.typeName(): decoderConfig.code32.enabled])
            case Telepen:
                call.resolve([decoderConfig.telepen.typeName(): decoderConfig.telepen.enabled])
            case Dotcode:
                call.resolve([decoderConfig.dotcode.typeName(): decoderConfig.dotcode.enabled])
            case IDDocument:
                call.resolve([decoderConfig.idDocument.typeName(): decoderConfig.idDocument.enabled])
            default:
                call.reject(
                    BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED.errorMessage,
                    BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED.errorCode
                )
            }
        }
    }
    
    @objc func getMulticodeCachingEnabled(_ call: CAPPluginCall) {
        call.resolve(["getMulticodeCachingEnabled": barkoderView.config?.getMulticodeCachingEnabled() as Any])
    }
    
    @objc func getMulticodeCachingDuration(_ call: CAPPluginCall) {
        call.resolve(["getMulticodeCachingDuration": barkoderView.config?.getMulticodeCachingDuration() as Any])
    }
    
    @objc func isUpcEanDeblurEnabled(_ call: CAPPluginCall) {
        call.resolve(["isUpcEanDeblurEnabled": barkoderView.config?.decoderConfig?.upcEanDeblur as Any])
    }
    
    @objc func isMisshaped1DEnabled(_ call: CAPPluginCall) {
        call.resolve(["isMisshaped1DEnabled": barkoderView.config?.decoderConfig?.enableMisshaped1D as Any])
    }
    
    @objc func isBarcodeThumbnailOnResultEnabled(_ call: CAPPluginCall) {
        call.resolve(["isBarcodeThumbnailOnResultEnabled": barkoderView.config?.barcodeThumbnailOnResult as Any])
    }
    
    @objc func getThresholdBetweenDuplicatesScans(_ call: CAPPluginCall) {
        call.resolve(["getThresholdBetweenDuplicatesScans": barkoderView.config?.thresholdBetweenDuplicatesScans as Any])
    }
    
    @objc func isVINRestrictionsEnabled(_ call: CAPPluginCall) {
        call.resolve(["isVINRestrictionsEnabled": barkoderView.config?.decoderConfig?.enableVINRestrictions as Any])
    }
    
    @objc func getBarkoderResolution(_ call: CAPPluginCall) {
        call.resolve(["getBarkoderResolution": barkoderView.config?.barkoderResolution.rawValue as Any])
    }
    
}
