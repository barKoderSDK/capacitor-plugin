export var DecodingSpeed;
(function (DecodingSpeed) {
    DecodingSpeed[DecodingSpeed["fast"] = 0] = "fast";
    DecodingSpeed[DecodingSpeed["normal"] = 1] = "normal";
    DecodingSpeed[DecodingSpeed["slow"] = 2] = "slow";
})(DecodingSpeed || (DecodingSpeed = {}));
export var FormattingType;
(function (FormattingType) {
    FormattingType[FormattingType["disabled"] = 0] = "disabled";
    FormattingType[FormattingType["automatic"] = 1] = "automatic";
    FormattingType[FormattingType["gs1"] = 2] = "gs1";
    FormattingType[FormattingType["aamva"] = 3] = "aamva";
})(FormattingType || (FormattingType = {}));
export var MsiChecksumType;
(function (MsiChecksumType) {
    MsiChecksumType[MsiChecksumType["disabled"] = 0] = "disabled";
    MsiChecksumType[MsiChecksumType["mod10"] = 1] = "mod10";
    MsiChecksumType[MsiChecksumType["mod11"] = 2] = "mod11";
    MsiChecksumType[MsiChecksumType["mod1010"] = 3] = "mod1010";
    MsiChecksumType[MsiChecksumType["mod1110"] = 4] = "mod1110";
    MsiChecksumType[MsiChecksumType["mod11IBM"] = 5] = "mod11IBM";
    MsiChecksumType[MsiChecksumType["mod1110IBM"] = 6] = "mod1110IBM";
})(MsiChecksumType || (MsiChecksumType = {}));
export var Code39ChecksumType;
(function (Code39ChecksumType) {
    Code39ChecksumType[Code39ChecksumType["disabled"] = 0] = "disabled";
    Code39ChecksumType[Code39ChecksumType["enabled"] = 1] = "enabled";
})(Code39ChecksumType || (Code39ChecksumType = {}));
export var Code11ChecksumType;
(function (Code11ChecksumType) {
    Code11ChecksumType[Code11ChecksumType["disabled"] = 0] = "disabled";
    Code11ChecksumType[Code11ChecksumType["single"] = 1] = "single";
    Code11ChecksumType[Code11ChecksumType["double"] = 2] = "double";
})(Code11ChecksumType || (Code11ChecksumType = {}));
export var BarkoderResolution;
(function (BarkoderResolution) {
    BarkoderResolution[BarkoderResolution["normal"] = 0] = "normal";
    BarkoderResolution[BarkoderResolution["high"] = 1] = "high";
})(BarkoderResolution || (BarkoderResolution = {}));
export var BarcodeType;
(function (BarcodeType) {
    BarcodeType[BarcodeType["aztec"] = 0] = "aztec";
    BarcodeType[BarcodeType["aztecCompact"] = 1] = "aztecCompact";
    BarcodeType[BarcodeType["qr"] = 2] = "qr";
    BarcodeType[BarcodeType["qrMicro"] = 3] = "qrMicro";
    BarcodeType[BarcodeType["code128"] = 4] = "code128";
    BarcodeType[BarcodeType["code93"] = 5] = "code93";
    BarcodeType[BarcodeType["code39"] = 6] = "code39";
    BarcodeType[BarcodeType["codabar"] = 7] = "codabar";
    BarcodeType[BarcodeType["code11"] = 8] = "code11";
    BarcodeType[BarcodeType["msi"] = 9] = "msi";
    BarcodeType[BarcodeType["upcA"] = 10] = "upcA";
    BarcodeType[BarcodeType["upcE"] = 11] = "upcE";
    BarcodeType[BarcodeType["upcE1"] = 12] = "upcE1";
    BarcodeType[BarcodeType["ean13"] = 13] = "ean13";
    BarcodeType[BarcodeType["ean8"] = 14] = "ean8";
    BarcodeType[BarcodeType["pdf417"] = 15] = "pdf417";
    BarcodeType[BarcodeType["pdf417Micro"] = 16] = "pdf417Micro";
    BarcodeType[BarcodeType["datamatrix"] = 17] = "datamatrix";
    BarcodeType[BarcodeType["code25"] = 18] = "code25";
    BarcodeType[BarcodeType["interleaved25"] = 19] = "interleaved25";
    BarcodeType[BarcodeType["itf14"] = 20] = "itf14";
    BarcodeType[BarcodeType["iata25"] = 21] = "iata25";
    BarcodeType[BarcodeType["matrix25"] = 22] = "matrix25";
    BarcodeType[BarcodeType["datalogic25"] = 23] = "datalogic25";
    BarcodeType[BarcodeType["coop25"] = 24] = "coop25";
    BarcodeType[BarcodeType["code32"] = 25] = "code32";
    BarcodeType[BarcodeType["telepen"] = 26] = "telepen";
    BarcodeType[BarcodeType["dotcode"] = 27] = "dotcode";
})(BarcodeType || (BarcodeType = {}));
export class BarkoderConfig {
    constructor(config) {
        Object.assign(this, config);
    }
}
export class DekoderConfig {
    constructor(config) {
        Object.assign(this, config);
    }
}
export class BarcodeConfig {
    constructor(config) {
        Object.assign(this, config);
    }
}
export class BarcodeConfigWithLength {
    constructor(config) {
        Object.assign(this, config);
    }
    setLengthRange(minLength, maxLength) {
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
}
export class MSIBarcodeConfig {
    constructor(config) {
        Object.assign(this, config);
    }
    setLengthRange(minLength, maxLength) {
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
}
export class Code39BarcodeConfig {
    constructor(config) {
        Object.assign(this, config);
    }
    setLengthRange(minLength, maxLength) {
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
}
export class Code11BarcodeConfig {
    constructor(config) {
        Object.assign(this, config);
    }
    setLengthRange(minLength, maxLength) {
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
}
export class DatamatrixBarcodeConfig {
    constructor(config) {
        Object.assign(this, config);
    }
    setLengthRange(minLength, maxLength) {
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
}
export class GeneralSettings {
    constructor(config) {
        Object.assign(this, config);
    }
    setROI(x, y, width, height) {
        this.roiX = x;
        this.roiY = y;
        this.roiWidth = width;
        this.roiHeight = height;
    }
}
//# sourceMappingURL=definitions.js.map