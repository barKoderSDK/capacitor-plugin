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
    setZoomFactor(options: {
        value: number;
    }): Promise<any>;
    setFlashEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    startCamera(): Promise<any>;
    startScanning(): Promise<any>;
    stopScanning(): Promise<any>;
    pauseScanning(): Promise<any>;
    setLocationLineColor(options: {
        value: string;
    }): Promise<any>;
    setLocationLineWidth(options: {
        value: number;
    }): Promise<any>;
    setRoiLineColor(options: {
        value: string;
    }): Promise<any>;
    setRoiLineWidth(options: {
        value: number;
    }): Promise<any>;
    setRoiOverlayBackgroundColor(options: {
        value: string;
    }): Promise<any>;
    setCloseSessionOnResultEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    setImageResultEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    setLocationInImageResultEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    setRegionOfInterest(options: {
        left: number;
        top: number;
        width: number;
        height: number;
    }): Promise<any>;
    setThreadsLimit(options: {
        value: number;
    }): Promise<any>;
    setLocationInPreviewEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    setPinchToZoomEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    setRegionOfInterestVisible(options: {
        value: boolean;
    }): Promise<any>;
    setBarkoderResolution(options: {
        value: number;
    }): Promise<any>;
    setBeepOnSuccessEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    setVibrateOnSuccessEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    showLogMessages(options: {
        enabled: boolean;
    }): Promise<any>;
    setBarcodeTypeLengthRange(options: {
        type: number;
        min: number;
        max: number;
    }): Promise<any>;
    setEncodingCharacterSet(options: {
        value: string;
    }): Promise<any>;
    setDecodingSpeed(options: {
        value: number;
    }): Promise<any>;
    setFormattingType(options: {
        value: number;
    }): Promise<any>;
    setCode11ChecksumType(options: {
        value: number;
    }): Promise<any>;
    setMsiChecksumType(options: {
        value: number;
    }): Promise<any>;
    setCode39ChecksumType(options: {
        value: number;
    }): Promise<any>;
    setBarcodeTypeEnabled(options: {
        type: number;
        enabled: boolean;
    }): Promise<any>;
    setMulticodeCachingEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    setMulticodeCachingDuration(options: {
        value: number;
    }): Promise<any>;
    setMaximumResultsCount(options: {
        value: number;
    }): Promise<any>;
    setBarcodeThumbnailOnResultEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    setDuplicatesDelayMs(options: {
        value: number;
    }): Promise<any>;
    setThresholdBetweenDuplicatesScans(options: {
        value: number;
    }): Promise<any>;
    setUpcEanDeblurEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    setMisshaped1DEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    setEnableVINRestrictions(options: {
        value: boolean;
    }): Promise<any>;
    setDatamatrixDpmModeEnabled(options: {
        enabled: boolean;
    }): Promise<any>;
    configureBarkoder(options: {
        barkoderConfig: BarkoderConfig;
    }): Promise<any>;
    isFlashAvailable(): Promise<any>;
    isCloseSessionOnResultEnabled(): Promise<any>;
    isImageResultEnabled(): Promise<any>;
    isLocationInImageResultEnabled(): Promise<any>;
    isLocationInPreviewEnabled(): Promise<any>;
    isPinchToZoomEnabled(): Promise<any>;
    isRegionOfInterestVisible(): Promise<any>;
    isBeepOnSuccessEnabled(): Promise<any>;
    isVibrateOnSuccessEnabled(): Promise<any>;
    getVersion(): Promise<any>;
    getLocationLineColorHex(): Promise<any>;
    getRoiLineColorHex(): Promise<any>;
    getRoiOverlayBackgroundColorHex(): Promise<any>;
    getMaxZoomFactor(): Promise<any>;
    getLocationLineWidth(): Promise<any>;
    getRoiLineWidth(): Promise<any>;
    getRegionOfInterest(): Promise<any>;
    getBarcodeTypeLengthRange(options: {
        type: number;
    }): Promise<any>;
    getMsiChecksumType(): Promise<any>;
    getCode39ChecksumType(): Promise<any>;
    getCode11ChecksumType(): Promise<any>;
    getEncodingCharacterSet(): Promise<any>;
    getDecodingSpeed(): Promise<any>;
    getFormattingType(): Promise<any>;
    getThreadsLimit(): Promise<any>;
    getMaximumResultsCount(): Promise<any>;
    getDuplicatesDelayMs(): Promise<any>;
    isBarcodeTypeEnabled(options: {
        type: number;
    }): Promise<any>;
    getMulticodeCachingEnabled(): Promise<any>;
    getMulticodeCachingDuration(): Promise<any>;
    isUpcEanDeblurEnabled(): Promise<any>;
    isMisshaped1DEnabled(): Promise<any>;
    isBarcodeThumbnailOnResultEnabled(): Promise<any>;
    getThresholdBetweenDuplicatesScans(): Promise<any>;
    isVINRestrictionsEnabled(): Promise<any>;
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
    dotcode = 27
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
