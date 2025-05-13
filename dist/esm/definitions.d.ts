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
     * Freezes the current AR scanning session by capturing a still image from the camera feed.
     * Use only when AR mode is enabled to temporarily freeze the view while keeping overlays visible.
     */
    freezeScanning(): Promise<any>;
    /**
     * Unfreezes the AR scanning session by removing the still image and reactivating the camera and overlays.
     * Use only when AR mode is enabled to restore the live AR view and continue scanning.
     */
    unfreezeScanning(): Promise<any>;
    /**
   * Scan barcodes from base64 string image
   */
    scanImage(options: {
        base64: string;
    }): Promise<any>;
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
        value: BarkoderResolution;
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
        type: BarcodeType;
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
        value: DecodingSpeed;
    }): Promise<any>;
    /**
     * Sets the formatting type for barcode scanning
     */
    setFormattingType(options: {
        value: FormattingType;
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
        type: BarcodeType;
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
   * Sets whether the Direct Part Marking (DPM) mode for QR barcodes is enabled.
   */
    setQrDpmModeEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
   * Sets whether the Direct Part Marking (DPM) mode for QR Micro barcodes is enabled.
   */
    setQrMicroDpmModeEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Configures the Barkoder functionality based on the provided configuration
     */
    configureBarkoder(options: {
        barkoderConfig: BarkoderConfig;
    }): Promise<any>;
    /**
  *  Sets whether Master checksum should be requiered when scanning ID Documents
  */
    setIdDocumentMasterChecksumEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
   * Sets whether the UPC-E barcodes should be expanded to UPC-A format
   */
    setUPCEexpandToUPCA(options: {
        value: boolean;
    }): Promise<any>;
    /**
     * Sets whether the UPC-E1 barcodes should be expanded to UPC-A format
     */
    setUPCE1expandToUPCA(options: {
        value: boolean;
    }): Promise<any>;
    /**
     * Sets a custom option with a string option and integer value
     */
    setCustomOption(options: {
        option: string;
        value: number;
    }): Promise<any>;
    /**
     * Sets the color of the lines outlining the scanning indicator for barcode scanning on the camera feed
     */
    setScanningIndicatorColor(options: {
        value: string;
    }): Promise<any>;
    /**
     * Sets the width of the scanning indicator for barcode scanning on the camera feed
     */
    setScanningIndicatorWidth(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the animation of the scanning indicator for barcode scanning on the camera feed
     */
    setScanningIndicatorAnimation(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the scanning indicator to be always shown on the camera feed
     */
    setScanningIndicatorAlwaysVisible(options: {
        value: boolean;
    }): Promise<any>;
    /**
   * Sets the camera's exposure dynamically based on the provided intensity, cycling through predefined compensation values
   */
    setDynamicExposure(options: {
        value: number;
    }): Promise<any>;
    /**
 * Set the camera to use the center of the viewfinder for focus and exposure
 */
    setCentricFocusAndExposure(options: {
        value: boolean;
    }): Promise<any>;
    /**
   * Sets wheter Composite Mode should be enabled when scanning
   */
    setEnableComposite(options: {
        value: number;
    }): Promise<any>;
    /**
   * Enable or disable video stabilization for smoother video capture
   */
    setVideoStabilization(options: {
        value: boolean;
    }): Promise<any>;
    /**
   * Sets the camera to be used for scanning (back/front)
   */
    setCamera(options: {
        value: BarkoderCameraPosition;
    }): Promise<any>;
    /**
    * Enables or disables showing duplicate barcode locations on the preview overlay.
    */
    setShowDuplicatesLocations(options: {
        value: boolean;
    }): Promise<any>;
    /**
     * Sets the AR mode used for barcode scanning visualization (e.g., interactive, non-interactive, or off).
     */
    setARMode(options: {
        value: BarkoderARMode;
    }): Promise<any>;
    /**
     * Sets the delay (in milliseconds) after which a detected AR result is considered expired and removed.
     */
    setARResultDisappearanceDelayMs(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the speed at which barcode location overlays transition positions.
     */
    setARLocationTransitionSpeed(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the refresh mode for the AR overlay on the camera preview.
     */
    setAROverlayRefresh(options: {
        value: BarkoderAROverlayRefresh;
    }): Promise<any>;
    /**
     * Sets the color used for drawing the overlay around selected barcodes in AR mode.
     */
    setARSelectedLocationColor(options: {
        value: string;
    }): Promise<any>;
    /**
     * Sets the color used for drawing the overlay around non-selected barcodes in AR mode.
     */
    setARNonSelectedLocationColor(options: {
        value: string;
    }): Promise<any>;
    /**
     * Sets the line width of the overlay for selected barcodes in AR mode.
     */
    setARSelectedLocationLineWidth(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the line width of the overlay for non-selected barcodes in AR mode.
     */
    setARNonSelectedLocationLineWidth(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the style of location overlays drawn around detected barcodes (tight, bounding box, or none).
     */
    setARLocationType(options: {
        value: BarkoderARLocationType;
    }): Promise<any>;
    /**
     * Enables or disables the ability to freeze/unfreeze scanning via a double-tap gesture in AR mode.
     */
    setARDoubleTapToFreezeEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    /**
     * Sets the height of the header text label shown above the barcode in AR mode.
     */
    setARHeaderHeight(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the condition under which the header text is shown above the barcode (always, on selected, or never).
     */
    setARHeaderShowMode(options: {
        value: BarkoderARHeaderShowMode;
    }): Promise<any>;
    /**
     * Sets the maximum text height used for rendering AR header text above barcodes.
     */
    setARHeaderMaxTextHeight(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the minimum text height used for rendering AR header text above barcodes.
     */
    setARHeaderMinTextHeight(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the text color of the header when the barcode is in a selected state.
     */
    setARHeaderTextColorSelected(options: {
        value: string;
    }): Promise<any>;
    /**
     * Sets the text color of the header when the barcode is not selected.
     */
    setARHeaderTextColorNonSelected(options: {
        value: string;
    }): Promise<any>;
    /**
     * Sets the horizontal margin applied to the header text in AR mode, creating equal padding on both sides.
     */
    setARHeaderHorizontalTextMargin(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the vertical margin applied to the header text in AR mode, creating equal padding on both sides.
     */
    setARHeaderVerticalTextMargin(options: {
        value: number;
    }): Promise<any>;
    /**
     * Sets the format string for the AR header text above each barcode, using placeholders like [barcode_text], [barcode_type].
     */
    setARHeaderTextFormat(options: {
        value: string;
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
    /**
   * Retrieves whether Direct Part Marking (DPM) mode for Datamatrix barcodes is enabled
   */
    isDatamatrixDpmModeEnabled(): Promise<any>;
    /**
  * Retrieves whether Direct Part Marking (DPM) mode for QR barcodes is enabled
  */
    isQrDpmModeEnabled(): Promise<any>;
    /**
  * Retrieves whether Direct Part Marking (DPM) mode for QR Micro barcodes is enabled
  */
    isQrMicroDpmModeEnabled(): Promise<any>;
    /**
  * Retrieves whether Master checksum is enabled when scanning ID Documents
  */
    isIdDocumentMasterChecksumEnabled(): Promise<any>;
    /**
   * Retrieves the hexadecimal color code representing the line color of the scanning indicator on the camera preview
   */
    getScanningIndicatorColorHex(): Promise<any>;
    /**
   * Retrieves the current width setting for the scanning indicator on the camera preview
   */
    getScanningIndicatorWidth(): Promise<any>;
    /**
   * Retrieves the current animation setting for the scanning indicator on the camera preview
   */
    getScanningIndicatorAnimation(): Promise<any>;
    /**
   * Retrieves if the scanning indicator is set to be always visible on the camera preview
   */
    isScanningIndicatorAlwaysVisible(): Promise<any>;
    /**
     * Retrieves whether showing duplicate barcode locations is enabled.
     */
    getShowDuplicatesLocations(): Promise<any>;
    /**
     * Retrieves the current AR mode used for barcode scanning.
     */
    getARMode(): Promise<any>;
    /**
     * Retrieves the delay (in milliseconds) after which AR results disappear once detected.
     */
    getARResultDisappearanceDelayMs(): Promise<any>;
    /**
     * Retrieves the transition speed for moving AR barcode locations on the screen.
     */
    getARLocationTransitionSpeed(): Promise<any>;
    /**
     * Retrieves the current AR overlay refresh mode.
     */
    getAROverlayRefresh(): Promise<any>;
    /**
     * Retrieves the color used to highlight selected barcode locations in AR mode.
     */
    getARSelectedLocationColor(): Promise<any>;
    /**
     * Retrieves the color used to highlight non-selected barcode locations in AR mode.
     */
    getARNonSelectedLocationColor(): Promise<any>;
    /**
     * Retrieves the line width used for selected barcode locations in AR mode.
     */
    getARSelectedLocationLineWidth(): Promise<any>;
    /**
     * Retrieves the line width used for non-selected barcode locations in AR mode.
     */
    getARNonSelectedLocationLineWidth(): Promise<any>;
    /**
     * Retrieves the location type style used for drawing AR overlays (tight, bounding box, or none).
     */
    getARLocationType(): Promise<any>;
    /**
     * Checks if the double-tap-to-freeze feature is enabled in AR mode.
     */
    isARDoubleTapToFreezeEnabled(): Promise<any>;
    /**
     * Retrieves the height of the header text shown above barcodes in AR mode.
     */
    getARHeaderHeight(): Promise<any>;
    /**
     * Retrieves the display mode for AR header text (always, on selected, or never).
     */
    getARHeaderShowMode(): Promise<any>;
    /**
     * Retrieves the maximum height for AR header text.
     */
    getARHeaderMaxTextHeight(): Promise<any>;
    /**
     * Retrieves the minimum height for AR header text.
     */
    getARHeaderMinTextHeight(): Promise<any>;
    /**
     * Retrieves the color used for header text when a barcode is selected in AR mode.
     */
    getARHeaderTextColorSelected(): Promise<any>;
    /**
     * Retrieves the color used for header text when a barcode is not selected in AR mode.
     */
    getARHeaderTextColorNonSelected(): Promise<any>;
    /**
     * Retrieves the horizontal margin applied to the AR header text.
     */
    getARHeaderHorizontalTextMargin(): Promise<any>;
    /**
     * Retrieves the vertical margin applied to the AR header text.
     */
    getARHeaderVerticalTextMargin(): Promise<any>;
    /**
     * Retrieves the format string used for rendering AR header text above barcodes.
     */
    getARHeaderTextFormat(): Promise<any>;
}
export declare enum DecodingSpeed {
    fast = 0,
    normal = 1,
    slow = 2,
    rigorous = 3
}
export declare enum FormattingType {
    disabled = 0,
    automatic = 1,
    gs1 = 2,
    aamva = 3,
    sadl = 4
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
export declare enum BarkoderCameraPosition {
    BACK = 0,
    FRONT = 1
}
export declare enum BarkoderResolution {
    HD = 0,
    FHD = 1,
    UHD = 2
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
    idDocument = 28,
    databar14 = 29,
    databarLimited = 30,
    databarExpanded = 31,
    postalIMB = 32,
    postnet = 33,
    planet = 34,
    australianPost = 35,
    royalMail = 36,
    kix = 37,
    japanesePost = 38
}
export declare enum BarkoderARMode {
    off = 0,
    interactiveDisabled = 1,
    interactiveEnabled = 2,
    nonInteractive = 3
}
export declare enum BarkoderAROverlayRefresh {
    smooth = 0,
    normal = 1
}
export declare enum BarkoderARLocationType {
    none = 0,
    tight = 1,
    boundingBox = 2
}
export declare enum BarkoderARHeaderShowMode {
    never = 0,
    always = 1,
    onSelected = 2
}
export declare class BarkoderConfig {
    locationLineColor?: string;
    locationLineWidth?: number;
    roiLineColor?: string;
    roiLineWidth?: number;
    roiOverlayBackgroundColor?: string;
    scanningIndicatorColor?: string;
    scanningIndicatorWidth?: number;
    scanningIndicatorAnimation?: number;
    scanningIndicatorAlwaysVisible?: boolean;
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
    arConfig?: BarkoderARConfig;
    constructor(config: Partial<BarkoderConfig>);
}
export declare class DekoderConfig {
    aztec?: BarcodeConfig;
    aztecCompact?: BarcodeConfig;
    qr?: BarcodeConfigWithDpmMode;
    qrMicro?: BarcodeConfigWithDpmMode;
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
    datamatrix?: BarcodeConfigWithDpmMode;
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
    idDocument?: IdDocumentBarcodeConfig;
    databar14?: BarcodeConfig;
    databarLimited?: BarcodeConfig;
    databarExpanded?: BarcodeConfig;
    postalIMB?: BarcodeConfig;
    postnet?: BarcodeConfig;
    planet?: BarcodeConfig;
    australianPost?: BarcodeConfig;
    royalMail?: BarcodeConfig;
    kix?: BarcodeConfig;
    japanesePost?: BarcodeConfig;
    general?: GeneralSettings;
    constructor(config: Partial<DekoderConfig>);
}
export declare class BarkoderARConfig {
    arMode?: BarkoderARMode;
    resultDisappearanceDelayMs?: number;
    locationTransitionSpeed?: number;
    overlayRefresh?: BarkoderAROverlayRefresh;
    selectedLocationColor?: string;
    nonSelectedLocationColor?: string;
    selectedLocationLineWidth?: number;
    nonSelectedLocationLineWidth?: number;
    locationType?: BarkoderARLocationType;
    doubleTapToFreezeEnabled?: boolean;
    headerHeight?: number;
    headerShowMode?: BarkoderARHeaderShowMode;
    headerMaxTextHeight?: number;
    headerMinTextHeight?: number;
    headerTextColorSelected?: string;
    headerTextColorNonSelected?: string;
    headerHorizontalTextMargin?: number;
    headerVerticalTextMargin?: number;
    headerTextFormat?: string;
    constructor(config: Partial<BarkoderARConfig>);
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
export declare class BarcodeConfigWithDpmMode {
    enabled?: boolean;
    dpmMode?: number;
    minLength?: number;
    maxLength?: number;
    constructor(config: Partial<BarcodeConfigWithDpmMode>);
    setLengthRange(minLength: number, maxLength: number): void;
}
export declare enum IdDocumentMasterChecksumType {
    disabled = 0,
    enabled = 1
}
export declare class IdDocumentBarcodeConfig {
    enabled?: boolean;
    masterChecksum?: IdDocumentMasterChecksumType;
    constructor(config: Partial<IdDocumentBarcodeConfig>);
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
    multicodeCachingDuration?: number;
    multicodeCachingEnabled?: boolean;
    upcEanDeblur?: number;
    enableMisshaped1D?: number;
    constructor(config: Partial<GeneralSettings>);
    setROI(x: number, y: number, width: number, height: number): void;
}
export declare class BarkoderResult {
    decoderResults: DecoderResult[];
    resultThumbnailsAsBase64?: string[] | null;
    resultImageAsBase64?: string | null;
    constructor(resultMap: Record<string, any>);
    private convertToBase64;
}
export declare class DecoderResult {
    barcodeType: number;
    barcodeTypeName: string;
    binaryDataAsBase64: string;
    textualData: string;
    characterSet?: string | null;
    extra?: Record<string, any> | null;
    mrzImagesAsBase64?: {
        name: string;
        base64: string;
    }[];
    constructor(resultMap: Record<string, any>);
}
