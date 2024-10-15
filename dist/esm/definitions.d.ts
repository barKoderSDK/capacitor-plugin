import { Plugin } from '@capacitor/core';
export interface BarkoderPlugin extends Plugin {
    initialize(options: {
        width: number;
        height: number;
        x: number;
        y: number;
    }): Promise<any>;
    registerWithLicenseKey(options: {
        licenseKey: string;
    }): Promise<any>;
    /**
     * Sets the zoom factor for the device's camera, adjusting the level of zoom during barcode scanning
     */
    setZoomFactor(options: {
        value: number;
    }): Promise<any>;
    /**
     * Enables or disables the device's flash (torch) for illumination during barcode scanning
     */
    setFlashEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    startCamera(): Promise<any>;
    /**
     * Initiates the barcode scanning process, allowing the application to detect and decode barcodes from the device's camera feed
     */
    startScanning(): Promise<any>;
    /**
     * Halts the barcode scanning process, stopping the camera from capturing and processing barcode information
     */
    stopScanning(): Promise<any>;
    /**
     * Temporarily suspends the barcode scanning process, pausing the camera feed without completely stopping the scanning session
     */
    pauseScanning(): Promise<any>;
    /**
     * Sets the color of the lines used to indicate the location of detected barcodes on the camera feed
     */
    setLocationLineColor(options: {
        value: string;
    }): Promise<any>;
    /**
     * Sets the width of the lines indicating the location of detected barcodes on the camera feed
     */
    setLocationLineWidth(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the color of the lines outlining the Region of Interest (ROI) for barcode scanning on the camera feed
     */
    setRoiLineColor(options: {
        value: string;
    }): Promise<any>;
    /**
     * Sets the width of the lines outlining the Region of Interest (ROI) for barcode scanning on the camera feed
     */
    setRoiLineWidth(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the background color of the overlay within the Region of Interest (ROI) for barcode scanning on the camera feed
     */
    setRoiOverlayBackgroundColor(options: {
        value: string;
    }): Promise<any>;
    /**
     * Enables or disables the automatic closing of the scanning session upon detecting a barcode result
     */
    setCloseSessionOnResultEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Enables or disables the capturing and processing of image data when a barcode is successfully detected
     */
    setImageResultEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Enables or disables the inclusion of barcode location information within the image data result
     */
    setLocationInImageResultEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Defines the Region of Interest (ROI) on the camera preview for barcode scanning, specifying an area where the application focuses on detecting barcodes
     */
    setRegionOfInterest(options: {
        left: number;
        top: number;
        width: number;
        height: number;
    }): Promise<any>;
    /**
     * Sets the threads limit
     */
    setThreadsLimit(options: {
        value: number;
    }): Promise<any>;
    /**
     * Enables or disables the display of barcode location information on the camera preview
     */
    setLocationInPreviewEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Enables or disables the pinch-to-zoom feature for adjusting the zoom level during barcode scanning
     */
    setPinchToZoomEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Sets the visibility of the Region of Interest (ROI) on the camera preview
     */
    setRegionOfInterestVisible(options: {
        value: boolean;
    }): Promise<any>;
    /**
     * Sets the resolution for barcode scanning
     */
    setBarkoderResolution(options: {
        value: number;
    }): Promise<any>;
    /**
     * Enables or disables the audible beep sound upon successfully decoding a barcode
     */
    setBeepOnSuccessEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Enables or disables the device vibration upon successfully decoding a barcode.
     */
    setVibrateOnSuccessEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    showLogMessages(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Sets the length range for the specified barcode type
     */
    setBarcodeTypeLengthRange(options: {
        type: number;
        min: number;
        max: number;
    }): Promise<any>;
    /**
     * Sets the encoding character set for barcode scanning
     */
    setEncodingCharacterSet(options: {
        value: string;
    }): Promise<any>;
    /**
     * Sets the decoding speed for barcode scanning
     */
    setDecodingSpeed(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the formatting type for barcode scanning
     */
    setFormattingType(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the Code11 checksum type
     */
    setCode11ChecksumType(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the MSI checksum type
     */
    setMsiChecksumType(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the Code39 checksum type
     */
    setCode39ChecksumType(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets whether a specific barcode type is enabled
     */
    setBarcodeTypeEnabled(options: {
        type: number;
        enabled: boolean;
    }): Promise<any>;
    /**
     * Sets whether multi-code caching is enabled
     */
    setMulticodeCachingEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Sets the caching duration (in milliseconds) for multi-code results
     */
    setMulticodeCachingDuration(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the maximum number of results to be returned from barcode scanning
     */
    setMaximumResultsCount(options: {
        value: number;
    }): Promise<any>;
    /**
     * A boolean indicating whether to enable barcode thumbnail on result.
     */
    setBarcodeThumbnailOnResultEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Sets the delay in milliseconds for considering duplicate barcodes during scanning
     */
    setDuplicatesDelayMs(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the threshold between duplicate scans
     */
    setThresholdBetweenDuplicatesScans(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets whether the deblurring feature for UPC/EAN barcodes is enabled
     */
    setUpcEanDeblurEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Sets whether the detection of misshaped 1D barcodes is enabled
     */
    setMisshaped1DEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Sets whether Vehicle Identification Number (VIN) restrictions are enabled
     */
    setEnableVINRestrictions(options: {
        value: boolean;
    }): Promise<any>;
    /**
     * Sets whether the Direct Part Marking (DPM) mode for Datamatrix barcodes is enabled.
     */
    setDatamatrixDpmModeEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Configures the Barkoder functionality based on the provided configuration
     */
    configureBarkoder(options: {
        barkoderConfig: BarkoderConfig;
    }): Promise<any>;
    /**
     * Checks whether the device has a built-in flash (torch) that can be used for illumination during barcode scanning
     */
    isFlashAvailable(): Promise<any>;
    /**
     * Enables or disables the automatic closing of the scanning session upon detecting a barcode result
     */
    isCloseSessionOnResultEnabled(): Promise<any>;
    /**
     * Enables or disables the capturing and processing of image data when a barcode is successfully detected
     */
    isImageResultEnabled(): Promise<any>;
    /**
     * Enables or disables the inclusion of barcode location information within the image data result
     */
    isLocationInImageResultEnabled(): Promise<any>;
    /**
     * Checks if location in preview is enabled
     */
    isLocationInPreviewEnabled(): Promise<any>;
    /**
     * Checks if pinch to zoom is enabled
     */
    isPinchToZoomEnabled(): Promise<any>;
    /**
     * Checks if the region of interest (ROI) is visible
     */
    isRegionOfInterestVisible(): Promise<any>;
    /**
     * Retrieves the value indicating whether a beep sound is played on successful barcode scanning
     */
    isBeepOnSuccessEnabled(): Promise<any>;
    /**
     * Retrieves the value indicating whether vibration is enabled on successful barcode scanning
     */
    isVibrateOnSuccessEnabled(): Promise<any>;
    /**
     * Retrieves the version of the Barkoder library
     */
    getVersion(): Promise<any>;
    /**
     * Retrieves the hexadecimal color code representing the line color used to indicate the location of detected barcodes
     */
    getLocationLineColorHex(): Promise<any>;
    /**
     * Retrieves the hexadecimal color code representing the line color of the Region of Interest (ROI) on the camera preview
     */
    getRoiLineColorHex(): Promise<any>;
    /**
     * Retrieves the hexadecimal color code representing the background color of the overlay within the Region of Interest (ROI) on the camera preview
     */
    getRoiOverlayBackgroundColorHex(): Promise<any>;
    /**
     * Retrieves the maximum available zoom factor for the device's camera
     */
    getMaxZoomFactor(): Promise<any>;
    /**
     * Retrieves the current width setting for the lines indicating the location of detected barcodes on the camera feed
     */
    getLocationLineWidth(): Promise<any>;
    /**
     * Retrieves the current width setting for the lines outlining the Region of Interest (ROI) on the camera preview
     */
    getRoiLineWidth(): Promise<any>;
    /**
     * Retrieves the region of interest (ROI)
     */
    getRegionOfInterest(): Promise<any>;
    /**
     * Retrieves the length range of a specific barcode type
     */
    getBarcodeTypeLengthRange(options: {
        type: number;
    }): Promise<any>;
    /**
     * Retrieves the MSI checksum type
     */
    getMsiChecksumType(): Promise<any>;
    /**
     * Retrieves the checksum type for Code 39 barcodes
     */
    getCode39ChecksumType(): Promise<any>;
    /**
     * Retrieves the Code11 checksum type
     */
    getCode11ChecksumType(): Promise<any>;
    /**
     * Retrieves the character set used for encoding barcode data
     */
    getEncodingCharacterSet(): Promise<any>;
    /**
     * Retrieves the current decoding speed setting for barcode scanning
     */
    getDecodingSpeed(): Promise<any>;
    /**
     * Retrieves the formatting type used for presenting decoded barcode data.
     */
    getFormattingType(): Promise<any>;
    /**
     * Retrieves the threads limit
     */
    getThreadsLimit(): Promise<any>;
    /**
     * Retrieves the maximum number of results to be returned from barcode scanning at once
     */
    getMaximumResultsCount(): Promise<any>;
    /**
     * Retrieves the delay in milliseconds for considering duplicate barcodes during scanning
     */
    getDuplicatesDelayMs(): Promise<any>;
    /**
     * Checks if a specific barcode type is enabled
     */
    isBarcodeTypeEnabled(options: {
        type: number;
    }): Promise<any>;
    /**
     * Retrieves whether multi-code caching is enabled
     */
    getMulticodeCachingEnabled(): Promise<any>;
    /**
     * Retrieves the caching duration (in milliseconds) for multi-code results
     */
    getMulticodeCachingDuration(): Promise<any>;
    /**
     * Retrieves the value indicating whether deblurring is enabled for UPC/EAN barcodes
     */
    isUpcEanDeblurEnabled(): Promise<any>;
    /**
     * Checks if the detection of misshaped 1D barcodes is enabled
     */
    isMisshaped1DEnabled(): Promise<any>;
    /**
     * Retrieve whether to enable barcode thumbnail on result
     */
    isBarcodeThumbnailOnResultEnabled(): Promise<any>;
    /**
     * Retrieves the threshold between duplicate scans
     */
    getThresholdBetweenDuplicatesScans(): Promise<any>;
    /**
     * Checks if VIN restrictions are enabled
     */
    isVINRestrictionsEnabled(): Promise<any>;
    /**
     * Retrieves the resolution for barcode scanning
     */
    getBarkoderResolution(): Promise<any>;
}
export declare enum DecodingSpeed {
    fast = 0,
    normal = 1,
    slow = 2
}
export declare enum FormattingType {
    disabled = 0,
    automatic = 1,
    gs1 = 2,
    aamva = 3
}
export declare enum MsiChecksumType {
    disabled = 0,
    mod10 = 1,
    mod11 = 2,
    mod1010 = 3,
    mod1110 = 4,
    mod11IBM = 5,
    mod1110IBM = 6
}
export declare enum Code39ChecksumType {
    disabled = 0,
    enabled = 1
}
export declare enum Code11ChecksumType {
    disabled = 0,
    single = 1,
    double = 2
}
export declare enum BarkoderResolution {
    normal = 0,
    high = 1
}
export declare enum BarcodeType {
    aztec = 0,
    aztecCompact = 1,
    qr = 2,
    qrMicro = 3,
    code128 = 4,
    code93 = 5,
    code39 = 6,
    codabar = 7,
    code11 = 8,
    msi = 9,
    upcA = 10,
    upcE = 11,
    upcE1 = 12,
    ean13 = 13,
    ean8 = 14,
    pdf417 = 15,
    pdf417Micro = 16,
    datamatrix = 17,
    code25 = 18,
    interleaved25 = 19,
    itf14 = 20,
    iata25 = 21,
    matrix25 = 22,
    datalogic25 = 23,
    coop25 = 24,
    code32 = 25,
    telepen = 26,
    dotcode = 27,
    idDocument = 28
}
export declare class BarkoderConfig {
    locationLineColor?: string;
    locationLineWidth?: number;
    roiLineColor?: string;
    roiLineWidth?: number;
    roiOverlayBackgroundColor?: string;
    closeSessionOnResultEnabled?: boolean;
    imageResultEnabled?: boolean;
    locationInImageResultEnabled?: boolean;
    locationInPreviewEnabled?: boolean;
    pinchToZoomEnabled?: boolean;
    regionOfInterestVisible?: boolean;
    barkoderResolution?: BarkoderResolution;
    beepOnSuccessEnabled?: boolean;
    vibrateOnSuccessEnabled?: boolean;
    decoder?: DekoderConfig;
    constructor(config: Partial<BarkoderConfig>);
}
export declare class DekoderConfig {
    aztec?: BarcodeConfig;
    aztecCompact?: BarcodeConfig;
    qr?: BarcodeConfig;
    qrMicro?: BarcodeConfig;
    code128?: BarcodeConfigWithLength;
    code93?: BarcodeConfigWithLength;
    code39?: Code39BarcodeConfig;
    codabar?: BarcodeConfigWithLength;
    code11?: Code11BarcodeConfig;
    msi?: MSIBarcodeConfig;
    upcA?: BarcodeConfig;
    upcE?: BarcodeConfig;
    upcE1?: BarcodeConfig;
    ean13?: BarcodeConfig;
    ean8?: BarcodeConfig;
    pdf417?: BarcodeConfig;
    pdf417Micro?: BarcodeConfig;
    datamatrix?: DatamatrixBarcodeConfig;
    code25?: BarcodeConfig;
    interleaved25?: BarcodeConfig;
    itf14?: BarcodeConfig;
    iata25?: BarcodeConfig;
    matrix25?: BarcodeConfig;
    datalogic25?: BarcodeConfig;
    coop25?: BarcodeConfig;
    code32?: BarcodeConfig;
    telepen?: BarcodeConfig;
    dotcode?: BarcodeConfig;
    idDocument?: BarcodeConfig;
    general?: GeneralSettings;
    constructor(config: Partial<DekoderConfig>);
}
export declare class BarcodeConfig {
    enabled?: boolean;
    constructor(config: Partial<BarcodeConfig>);
}
export declare class BarcodeConfigWithLength {
    enabled?: boolean;
    minLength?: number;
    maxLength?: number;
    constructor(config: Partial<BarcodeConfigWithLength>);
    setLengthRange(minLength: number, maxLength: number): void;
}
export declare class MSIBarcodeConfig {
    enabled?: boolean;
    minLength?: number;
    maxLength?: number;
    checksum?: MsiChecksumType;
    constructor(config: Partial<MSIBarcodeConfig>);
    setLengthRange(minLength: number, maxLength: number): void;
}
export declare class Code39BarcodeConfig {
    enabled?: boolean;
    minLength?: number;
    maxLength?: number;
    checksum?: Code39ChecksumType;
    constructor(config: Partial<Code39BarcodeConfig>);
    setLengthRange(minLength: number, maxLength: number): void;
}
export declare class Code11BarcodeConfig {
    enabled?: boolean;
    minLength?: number;
    maxLength?: number;
    checksum?: Code11ChecksumType;
    constructor(config: Partial<Code11BarcodeConfig>);
    setLengthRange(minLength: number, maxLength: number): void;
}
export declare class DatamatrixBarcodeConfig {
    enabled?: boolean;
    dpmMode?: number;
    minLength?: number;
    maxLength?: number;
    constructor(config: Partial<DatamatrixBarcodeConfig>);
    setLengthRange(minLength: number, maxLength: number): void;
}
export declare class GeneralSettings {
    threadsLimit?: number;
    decodingSpeed?: DecodingSpeed;
    roiX?: number;
    roiY?: number;
    roiWidth?: number;
    roiHeight?: number;
    formattingType?: FormattingType;
    encodingCharacterSet?: string;
    maximumResultsCount?: number;
    duplicatesDelayMs?: number;
    multicodeCachingDuration?: number;
    multicodeCachingEnabled?: boolean;
    upcEanDeblur?: number;
    enableMisshaped1D?: number;
    constructor(config: Partial<GeneralSettings>);
    setROI(x: number, y: number, width: number, height: number): void;
}
