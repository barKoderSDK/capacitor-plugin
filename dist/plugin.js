var capacitorBarkoder = (function (exports, core) {
    'use strict';

    exports.DecodingSpeed = void 0;
    (function (DecodingSpeed) {
        DecodingSpeed[DecodingSpeed["fast"] = 0] = "fast";
        DecodingSpeed[DecodingSpeed["normal"] = 1] = "normal";
        DecodingSpeed[DecodingSpeed["slow"] = 2] = "slow";
        DecodingSpeed[DecodingSpeed["rigorous"] = 3] = "rigorous";
    })(exports.DecodingSpeed || (exports.DecodingSpeed = {}));
    exports.FormattingType = void 0;
    (function (FormattingType) {
        FormattingType[FormattingType["disabled"] = 0] = "disabled";
        FormattingType[FormattingType["automatic"] = 1] = "automatic";
        FormattingType[FormattingType["gs1"] = 2] = "gs1";
        FormattingType[FormattingType["aamva"] = 3] = "aamva";
        FormattingType[FormattingType["sadl"] = 4] = "sadl";
    })(exports.FormattingType || (exports.FormattingType = {}));
    exports.MsiChecksumType = void 0;
    (function (MsiChecksumType) {
        MsiChecksumType[MsiChecksumType["disabled"] = 0] = "disabled";
        MsiChecksumType[MsiChecksumType["mod10"] = 1] = "mod10";
        MsiChecksumType[MsiChecksumType["mod11"] = 2] = "mod11";
        MsiChecksumType[MsiChecksumType["mod1010"] = 3] = "mod1010";
        MsiChecksumType[MsiChecksumType["mod1110"] = 4] = "mod1110";
        MsiChecksumType[MsiChecksumType["mod11IBM"] = 5] = "mod11IBM";
        MsiChecksumType[MsiChecksumType["mod1110IBM"] = 6] = "mod1110IBM";
    })(exports.MsiChecksumType || (exports.MsiChecksumType = {}));
    exports.Code39ChecksumType = void 0;
    (function (Code39ChecksumType) {
        Code39ChecksumType[Code39ChecksumType["disabled"] = 0] = "disabled";
        Code39ChecksumType[Code39ChecksumType["enabled"] = 1] = "enabled";
    })(exports.Code39ChecksumType || (exports.Code39ChecksumType = {}));
    exports.Code11ChecksumType = void 0;
    (function (Code11ChecksumType) {
        Code11ChecksumType[Code11ChecksumType["disabled"] = 0] = "disabled";
        Code11ChecksumType[Code11ChecksumType["single"] = 1] = "single";
        Code11ChecksumType[Code11ChecksumType["double"] = 2] = "double";
    })(exports.Code11ChecksumType || (exports.Code11ChecksumType = {}));
    exports.BarkoderCameraPosition = void 0;
    (function (BarkoderCameraPosition) {
        BarkoderCameraPosition[BarkoderCameraPosition["BACK"] = 0] = "BACK";
        BarkoderCameraPosition[BarkoderCameraPosition["FRONT"] = 1] = "FRONT";
    })(exports.BarkoderCameraPosition || (exports.BarkoderCameraPosition = {}));
    exports.BarkoderResolution = void 0;
    (function (BarkoderResolution) {
        BarkoderResolution[BarkoderResolution["HD"] = 0] = "HD";
        BarkoderResolution[BarkoderResolution["FHD"] = 1] = "FHD";
        BarkoderResolution[BarkoderResolution["UHD"] = 2] = "UHD";
    })(exports.BarkoderResolution || (exports.BarkoderResolution = {}));
    exports.BarcodeType = void 0;
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
        BarcodeType[BarcodeType["idDocument"] = 28] = "idDocument";
        BarcodeType[BarcodeType["databar14"] = 29] = "databar14";
        BarcodeType[BarcodeType["databarLimited"] = 30] = "databarLimited";
        BarcodeType[BarcodeType["databarExpanded"] = 31] = "databarExpanded";
        BarcodeType[BarcodeType["postalIMB"] = 32] = "postalIMB";
        BarcodeType[BarcodeType["postnet"] = 33] = "postnet";
        BarcodeType[BarcodeType["planet"] = 34] = "planet";
        BarcodeType[BarcodeType["australianPost"] = 35] = "australianPost";
        BarcodeType[BarcodeType["royalMail"] = 36] = "royalMail";
        BarcodeType[BarcodeType["kix"] = 37] = "kix";
        BarcodeType[BarcodeType["japanesePost"] = 38] = "japanesePost";
    })(exports.BarcodeType || (exports.BarcodeType = {}));
    exports.BarkoderARMode = void 0;
    (function (BarkoderARMode) {
        BarkoderARMode[BarkoderARMode["off"] = 0] = "off";
        BarkoderARMode[BarkoderARMode["interactiveDisabled"] = 1] = "interactiveDisabled";
        BarkoderARMode[BarkoderARMode["interactiveEnabled"] = 2] = "interactiveEnabled";
        BarkoderARMode[BarkoderARMode["nonInteractive"] = 3] = "nonInteractive";
    })(exports.BarkoderARMode || (exports.BarkoderARMode = {}));
    exports.BarkoderAROverlayRefresh = void 0;
    (function (BarkoderAROverlayRefresh) {
        BarkoderAROverlayRefresh[BarkoderAROverlayRefresh["smooth"] = 0] = "smooth";
        BarkoderAROverlayRefresh[BarkoderAROverlayRefresh["normal"] = 1] = "normal";
    })(exports.BarkoderAROverlayRefresh || (exports.BarkoderAROverlayRefresh = {}));
    exports.BarkoderARLocationType = void 0;
    (function (BarkoderARLocationType) {
        BarkoderARLocationType[BarkoderARLocationType["none"] = 0] = "none";
        BarkoderARLocationType[BarkoderARLocationType["tight"] = 1] = "tight";
        BarkoderARLocationType[BarkoderARLocationType["boundingBox"] = 2] = "boundingBox";
    })(exports.BarkoderARLocationType || (exports.BarkoderARLocationType = {}));
    exports.BarkoderARHeaderShowMode = void 0;
    (function (BarkoderARHeaderShowMode) {
        BarkoderARHeaderShowMode[BarkoderARHeaderShowMode["never"] = 0] = "never";
        BarkoderARHeaderShowMode[BarkoderARHeaderShowMode["always"] = 1] = "always";
        BarkoderARHeaderShowMode[BarkoderARHeaderShowMode["onSelected"] = 2] = "onSelected";
    })(exports.BarkoderARHeaderShowMode || (exports.BarkoderARHeaderShowMode = {}));
    class BarkoderConfig {
        constructor(config) {
            Object.assign(this, config);
        }
    }
    class DekoderConfig {
        constructor(config) {
            Object.assign(this, config);
        }
    }
    class BarkoderARConfig {
        constructor(config) {
            Object.assign(this, config);
        }
    }
    class BarcodeConfig {
        constructor(config) {
            Object.assign(this, config);
        }
    }
    class BarcodeConfigWithLength {
        constructor(config) {
            Object.assign(this, config);
        }
        setLengthRange(minLength, maxLength) {
            this.minLength = minLength;
            this.maxLength = maxLength;
        }
    }
    class MSIBarcodeConfig {
        constructor(config) {
            Object.assign(this, config);
        }
        setLengthRange(minLength, maxLength) {
            this.minLength = minLength;
            this.maxLength = maxLength;
        }
    }
    class Code39BarcodeConfig {
        constructor(config) {
            Object.assign(this, config);
        }
        setLengthRange(minLength, maxLength) {
            this.minLength = minLength;
            this.maxLength = maxLength;
        }
    }
    class Code11BarcodeConfig {
        constructor(config) {
            Object.assign(this, config);
        }
        setLengthRange(minLength, maxLength) {
            this.minLength = minLength;
            this.maxLength = maxLength;
        }
    }
    class BarcodeConfigWithDpmMode {
        constructor(config) {
            Object.assign(this, config);
        }
        setLengthRange(minLength, maxLength) {
            this.minLength = minLength;
            this.maxLength = maxLength;
        }
    }
    exports.IdDocumentMasterChecksumType = void 0;
    (function (IdDocumentMasterChecksumType) {
        IdDocumentMasterChecksumType[IdDocumentMasterChecksumType["disabled"] = 0] = "disabled";
        IdDocumentMasterChecksumType[IdDocumentMasterChecksumType["enabled"] = 1] = "enabled";
    })(exports.IdDocumentMasterChecksumType || (exports.IdDocumentMasterChecksumType = {}));
    class IdDocumentBarcodeConfig {
        constructor(config) {
            Object.assign(this, config);
        }
    }
    class GeneralSettings {
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
    class BarkoderResult {
        constructor(resultMap) {
            if (Array.isArray(resultMap['decoderResults'])) {
                this.decoderResults = resultMap['decoderResults'].map((result) => new DecoderResult(result));
            }
            else {
                this.decoderResults = [];
            }
            this.resultThumbnailsAsBase64 = Array.isArray(resultMap['resultThumbnailsAsBase64'])
                ? resultMap['resultThumbnailsAsBase64']
                    .map(thumbnail => this.convertToBase64(thumbnail))
                    .filter((thumbnail) => thumbnail !== null)
                : null;
            this.resultImageAsBase64 = this.convertToBase64(resultMap['resultImageAsBase64']);
        }
        convertToBase64(data) {
            return data ? `data:image/jpeg;base64,${data}` : null;
        }
    }
    class DecoderResult {
        constructor(resultMap) {
            this.barcodeType = resultMap['barcodeType'];
            this.barcodeTypeName = resultMap['barcodeTypeName'];
            this.binaryDataAsBase64 = resultMap['binaryDataAsBase64'];
            this.textualData = resultMap['textualData'];
            this.characterSet = resultMap['characterSet'] || null;
            this.extra = 'extra' in resultMap ? JSON.parse(resultMap['extra']) : null;
            this.mrzImagesAsBase64 = Array.isArray(resultMap['mrzImagesAsBase64'])
                ? resultMap['mrzImagesAsBase64'].map((image) => ({
                    name: image.name,
                    base64: `data:image/jpeg;base64,${image.base64}`,
                }))
                : [];
        }
    }

    const Barkoder = core.registerPlugin('Barkoder', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.BarkoderWeb()),
    });

    class BarkoderWeb extends core.WebPlugin {
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BarkoderWeb: BarkoderWeb
    });

    exports.BarcodeConfig = BarcodeConfig;
    exports.BarcodeConfigWithDpmMode = BarcodeConfigWithDpmMode;
    exports.BarcodeConfigWithLength = BarcodeConfigWithLength;
    exports.Barkoder = Barkoder;
    exports.BarkoderARConfig = BarkoderARConfig;
    exports.BarkoderConfig = BarkoderConfig;
    exports.BarkoderResult = BarkoderResult;
    exports.Code11BarcodeConfig = Code11BarcodeConfig;
    exports.Code39BarcodeConfig = Code39BarcodeConfig;
    exports.DecoderResult = DecoderResult;
    exports.DekoderConfig = DekoderConfig;
    exports.GeneralSettings = GeneralSettings;
    exports.IdDocumentBarcodeConfig = IdDocumentBarcodeConfig;
    exports.MSIBarcodeConfig = MSIBarcodeConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
