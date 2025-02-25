//
//  BarkoderPluginErrors.swift
//  Plugin
//
//  Created by Goran on 21.11.23.
//  Copyright © 2023 Max Lynch. All rights reserved.
//

import Foundation

enum BarkoderPluginErrors {
    
    case BARKODER_VIEW_DESTROYED
    case INVALID_RESOLUTION
    case THREADS_LIMIT_NOT_SET
    case ROI_NOT_SET
    case COLOR_NOT_SET
    case BARCODE_TYPE_NOT_FOUNDED
    case BARCODE_TYPE_NOT_SUPPORTED
    case DECODING_SPEED_NOT_FOUNDED
    case FORMATTING_TYPE_NOT_FOUNDED
    case LENGTH_RANGE_NOT_VALID
    case CHECKSUM_TYPE_NOT_FOUNDED
    case BARKODER_CONFIG_IS_NOT_VALID
    case INVALID_CAMERA_POSITION

    var errorCode: String {
        switch self {
        case .BARKODER_VIEW_DESTROYED:
            return "1"
        case .INVALID_RESOLUTION:
            return "2"
        case .THREADS_LIMIT_NOT_SET:
            return "3"
        case .ROI_NOT_SET:
            return "4"
        case .COLOR_NOT_SET:
            return "5"
        case .BARCODE_TYPE_NOT_FOUNDED:
            return "6"
        case .BARCODE_TYPE_NOT_SUPPORTED:
            return "7"
        case .DECODING_SPEED_NOT_FOUNDED:
            return "8"
        case .FORMATTING_TYPE_NOT_FOUNDED:
            return "9"
        case .LENGTH_RANGE_NOT_VALID:
            return "10"
        case .CHECKSUM_TYPE_NOT_FOUNDED:
            return "11"
        case .BARKODER_CONFIG_IS_NOT_VALID:
            return "12"
        case .INVALID_CAMERA_POSITION:
            return "13"
        }
    }
    
    var errorMessage: String {
        switch self {
        case .BARKODER_VIEW_DESTROYED:
            return "BarkoderView is destroyed."
        case .INVALID_RESOLUTION:
            return "Invalid resolution."
        case .THREADS_LIMIT_NOT_SET:
            return "Threads limit is not set."
        case .ROI_NOT_SET:
            return "Region Of Interest is not set."
        case .COLOR_NOT_SET:
            return "Color is not set."
        case .BARCODE_TYPE_NOT_FOUNDED:
            return "Barcode type can't be founded."
        case .BARCODE_TYPE_NOT_SUPPORTED:
            return "Barcode type is not supported."
        case .DECODING_SPEED_NOT_FOUNDED:
            return "Decoding speed value can't be founded."
        case .FORMATTING_TYPE_NOT_FOUNDED:
            return "Formatting type can't be founded."
        case .LENGTH_RANGE_NOT_VALID:
            return "Length range is not valid. Min must be > 0 and max must be >= min."
        case .CHECKSUM_TYPE_NOT_FOUNDED:
            return "Checksum type can't be founded."
        case .BARKODER_CONFIG_IS_NOT_VALID:
            return ""
        case .INVALID_CAMERA_POSITION:
            return "Invalid camera position"
        }
    }
}
