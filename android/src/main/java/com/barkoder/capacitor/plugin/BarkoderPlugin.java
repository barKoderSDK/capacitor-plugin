package com.barkoder.capacitor.plugin;

import static android.content.ContentValues.TAG;

import com.barkoder.BarkoderHelper;
import com.barkoder.enums.BarkoderCameraPosition;
import com.barkoder.enums.BarkoderResolution;
import com.barkoder.interfaces.BarkoderResultCallback;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.barkoder.Barkoder;
import com.barkoder.BarkoderConfig;
import com.barkoder.BarkoderLog;
import com.barkoder.BarkoderView;

import org.json.JSONException;
import org.json.JSONObject;

import java.lang.ref.SoftReference;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@CapacitorPlugin(name = "Barkoder")
public class BarkoderPlugin extends Plugin implements BarkoderResultCallback {

    BarkoderView barkoderView;
    Integer barkoderViewParentId;
    Integer DEFAULT_WIDTH = 400;
    Integer DEFAULT_HEIGHT = 400;
    String licenseKey = "";

    @PluginMethod
    public void initialize(PluginCall call) {
        final Integer width = call.getInt("width", DEFAULT_WIDTH);
        final Integer height = call.getInt("height", DEFAULT_HEIGHT);
        final Integer x = call.getInt("x", 0);
        final Integer y = call.getInt("y", 0);

        if (width == null || height == null || x == null || y == null) {
            return;
        }

        getBridge().getActivity().runOnUiThread(() -> {
            FrameLayout barkoderViewParent = new FrameLayout(getBridge().getContext());
            barkoderViewParentId = View.generateViewId();
            barkoderViewParent.setId(barkoderViewParentId);

            barkoderView = new BarkoderView(getBridge().getContext());
            createBarkoderConfig(getBridge().getContext());

            FrameLayout.LayoutParams lp = new FrameLayout.LayoutParams(getScaledPixels(width), getScaledPixels(height));
            lp.topMargin = getScaledPixels(y);
            lp.leftMargin = getScaledPixels(x);

            barkoderView.setLayoutParams(lp);

            barkoderViewParent.addView(barkoderView);

            ((ViewGroup) getBridge().getWebView().getParent()).addView(barkoderViewParent);
        });

        call.resolve(toJSObjectBool("barkoderView initialized", true));
    }

    public void createBarkoderConfig(Context context) {
        // In order to perform scanning, config property need to be set before
        // If license key is not valid you will receive results with asterisks inside
        barkoderView.config = new BarkoderConfig(context, licenseKey,
                licenseCheckResult -> BarkoderLog.i(TAG, "LICENSE RESULT: " + licenseCheckResult.message));
    }

    @PluginMethod
    public void registerWithLicenseKey(PluginCall call) {
        String licenseKey = call.getString("licenseKey");
        if (licenseKey == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> this.licenseKey = licenseKey);

        call.resolve(toJSObjectString("licenseKey", licenseKey));
    }

    @Override
    public void scanningFinished(Barkoder.Result[] results, Bitmap[] thumbnails, Bitmap image) {
        JSObject barkoderResultsToJS = BarkoderUtil.barkoderResultsToJS(results, thumbnails, image);
        notifyListeners("barkoderResultEvent", barkoderResultsToJS);
    }

    // - Setters

    @PluginMethod
    public void setZoomFactor(PluginCall call) {
        Float zoomFactor = call.getFloat("value");
        if (zoomFactor == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.setZoomFactor(zoomFactor));

        call.resolve();
    }

    @PluginMethod
    public void setFlashEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.setFlashEnabled(enabled));

        call.resolve();
    }

    @PluginMethod
    public void startCamera(PluginCall call) {
        barkoderView.startCamera();

        call.resolve();
    }

    @PluginMethod
    public void startScanning(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> barkoderView.startScanning(this));
        call.resolve();
    }

    @PluginMethod
    public void stopScanning(PluginCall call) {
        barkoderView.stopScanning();

        call.resolve();
    }

    @PluginMethod
    public void pauseScanning(PluginCall call) {
        barkoderView.pauseScanning();

        call.resolve();
    }

    @PluginMethod
    public void scanImage(PluginCall call) {
        String base64 = call.getString("base64");
        if (base64 == null) {
            return;
        }

        getBridge().getActivity().runOnUiThread(
                () -> {
                    byte[] imageData = android.util.Base64.decode(base64, android.util.Base64.DEFAULT);
                    if (imageData == null) {
                        return;
                    }

                    Bitmap image = BitmapFactory.decodeByteArray(imageData, 0, imageData.length);
                    if (image == null) {
                        return;
                    }

                    BarkoderHelper.scanImage(image, barkoderView.config, this, this.barkoderView.getContext());
                });

        call.resolve();
    }

    @PluginMethod
    public void setLocationLineColor(PluginCall call) {
        String hexColor = call.getString("value");
        if (hexColor == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(
                () -> barkoderView.config.setLocationLineColor(BarkoderUtil.hexColorToIntColor(hexColor)));

        call.resolve();
    }

    @PluginMethod
    public void setLocationLineWidth(PluginCall call) {
        Float lineWidth = call.getFloat("value");
        if (lineWidth == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.setLocationLineWidth(lineWidth));

        call.resolve();
    }

    @PluginMethod
    public void setRoiLineColor(PluginCall call) {
        String hexColor = call.getString("value");
        if (hexColor == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.setRoiLineColor(BarkoderUtil.hexColorToIntColor(hexColor)));

        call.resolve();
    }

    @PluginMethod
    public void setRoiLineWidth(PluginCall call) {
        Float lineWidth = call.getFloat("value");
        if (lineWidth == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.setRoiLineWidth(lineWidth));

        call.resolve();
    }

    @PluginMethod
    public void setRoiOverlayBackgroundColor(PluginCall call) {
        String hexColor = call.getString("value");
        if (hexColor == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(
                () -> barkoderView.config.setRoiOverlayBackgroundColor(BarkoderUtil.hexColorToIntColor(hexColor)));

        call.resolve();
    }

    @PluginMethod
    public void setCloseSessionOnResultEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.setCloseSessionOnResultEnabled(enabled));

        call.resolve();
    }

    @PluginMethod
    public void setImageResultEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.setImageResultEnabled(enabled));

        call.resolve();
    }

    @PluginMethod
    public void setLocationInImageResultEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.setLocationInImageResultEnabled(enabled));

        call.resolve();
    }

    @PluginMethod
    public void setRegionOfInterest(PluginCall call) throws JSONException {
        JSONObject arguments = call.getData();
        Double left = arguments.getDouble("left");
        Double width = arguments.getDouble("width");
        Double top = arguments.getDouble("top");
        Double height = arguments.getDouble("height");

        getBridge().getActivity().runOnUiThread(() -> {
            try {
                barkoderView.config.setRegionOfInterest(left.floatValue(), top.floatValue(), width.floatValue(),
                        height.floatValue());

                call.resolve();
            } catch (IllegalArgumentException ex) {
                sendErrorReject(BarkoderPluginErrors.ROI_NOT_SET, ex.getMessage(), call);
            }
        });
    }

    @PluginMethod
    public void setThreadsLimit(PluginCall call) {
        Integer threadsLimit = call.getInt("value");
        if (threadsLimit == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> {
            try {
                BarkoderConfig.SetThreadsLimit(threadsLimit);

                call.resolve();
            } catch (IllegalArgumentException ex) {
                sendErrorReject(BarkoderPluginErrors.THREADS_LIMIT_NOT_SET, ex.getMessage(), call);
            }
        });
    }

    @PluginMethod
    public void setLocationInPreviewEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.setLocationInPreviewEnabled(enabled));

        call.resolve();
    }

    @PluginMethod
    public void setPinchToZoomEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.setPinchToZoomEnabled(enabled));

        call.resolve();
    }

    @PluginMethod
    public void setRegionOfInterestVisible(PluginCall call) {
        Boolean regionOfInterestVisible = call.getBoolean("value");
        if (regionOfInterestVisible == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.setRegionOfInterestVisible(regionOfInterestVisible));

        call.resolve();
    }

    @PluginMethod
    public void setBarkoderResolution(PluginCall call) {
        Integer resolutionIndex = call.getInt("value");
        if (resolutionIndex == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> {
            try {
                BarkoderResolution bkdResolution = BarkoderResolution.values()[resolutionIndex];
                barkoderView.config.setBarkoderResolution(bkdResolution);

                call.resolve();
            } catch (Exception ex) {
                sendErrorReject(BarkoderPluginErrors.INVALID_RESOLUTION, ex.getMessage(), call);
            }
        });
    }

    @PluginMethod
    public void setBeepOnSuccessEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.setBeepOnSuccessEnabled(enabled));

        call.resolve();
    }

    @PluginMethod
    public void setVibrateOnSuccessEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.setVibrateOnSuccessEnabled(enabled));

        call.resolve();
    }

    @PluginMethod
    public void showLogMessages(PluginCall call) {
        Boolean show = call.getBoolean("value");
        if (show == null) {
            return;
        }

        // TODO: - Logic about log messages
        // getBridge().getActivity().runOnUiThread(() -> );

        call.resolve();
    }

    @PluginMethod
    public void setBarcodeTypeLengthRange(PluginCall call) throws JSONException {
        JSONObject arguments = call.getData();
        Integer barcodeTypeOrdinal = arguments.getInt("type");
        Integer min = arguments.getInt("min");
        Integer max = arguments.getInt("max");

        getBridge().getActivity().runOnUiThread(() -> {
            if (barcodeTypeOrdinal == Barkoder.BarcodeType.Code128.ordinal() ||
                    barcodeTypeOrdinal == Barkoder.BarcodeType.Code93.ordinal() ||
                    barcodeTypeOrdinal == Barkoder.BarcodeType.Code39.ordinal() ||
                    barcodeTypeOrdinal == Barkoder.BarcodeType.Codabar.ordinal() ||
                    barcodeTypeOrdinal == Barkoder.BarcodeType.Code11.ordinal() ||
                    barcodeTypeOrdinal == Barkoder.BarcodeType.Msi.ordinal()) {
                try {
                    final Barkoder.SpecificConfig specificConfig = BarkoderUtil
                            .getSpecificConfigRefFromBarcodeTypeOrdinal(barcodeTypeOrdinal,
                                    barkoderView.config.getDecoderConfig());

                    if (specificConfig != null) {
                        if (specificConfig.setLengthRange(min, max) == 0)
                            call.resolve();
                        else
                            sendErrorReject(BarkoderPluginErrors.LENGTH_RANGE_NOT_VALID, null, call);
                    } else {
                        sendErrorReject(BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED, null, call);
                    }
                } catch (Exception ex) {
                    sendErrorReject(BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED, ex.getMessage(), call);
                }
            } else {
                sendErrorReject(BarkoderPluginErrors.BARCODE_TYPE_NOT_SUPPORTED, null, call);
            }
        });
    }

    @PluginMethod
    public void setEncodingCharacterSet(PluginCall call) {
        String characterSet = call.getString("value");
        if (characterSet == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.getDecoderConfig().encodingCharacterSet = characterSet);

        call.resolve();
    }

    @PluginMethod
    public void setDecodingSpeed(PluginCall call) {
        Integer decodingSpeedOrdinal = call.getInt("value");
        if (decodingSpeedOrdinal == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.getDecoderConfig().decodingSpeed = Barkoder.DecodingSpeed
                        .valueOf(decodingSpeedOrdinal));

        call.resolve();
    }

    @PluginMethod
    public void setFormattingType(PluginCall call) {
        Integer formattingTypeOrdinal = call.getInt("value");
        if (formattingTypeOrdinal == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.getDecoderConfig().formattingType = Barkoder.FormattingType
                        .valueOf(formattingTypeOrdinal));

        call.resolve();
    }

    @PluginMethod
    public void setCode11ChecksumType(PluginCall call) {
        Integer checksumTypeOrdinal = call.getInt("value");
        if (checksumTypeOrdinal == null) {
            return;
        }

        getBridge().getActivity().runOnUiThread(() -> {
            try {
                barkoderView.config.getDecoderConfig().Code11.checksumType = Barkoder.Code11ChecksumType
                        .valueOf(checksumTypeOrdinal);

                call.resolve();
            } catch (Exception ex) {
                sendErrorReject(BarkoderPluginErrors.CHECKSUM_TYPE_NOT_FOUNDED, ex.getMessage(), call);
            }
        });
    }

    @PluginMethod
    public void setMsiChecksumType(PluginCall call) {
        Integer checksumTypeOrdinal = call.getInt("value");
        if (checksumTypeOrdinal == null) {
            return;
        }

        getBridge().getActivity().runOnUiThread(() -> {
            try {
                barkoderView.config.getDecoderConfig().Msi.checksumType = Barkoder.MsiChecksumType
                        .valueOf(checksumTypeOrdinal);

                call.resolve();
            } catch (Exception ex) {
                sendErrorReject(BarkoderPluginErrors.CHECKSUM_TYPE_NOT_FOUNDED, ex.getMessage(), call);
            }
        });
    }

    @PluginMethod
    public void setCode39ChecksumType(PluginCall call) {
        Integer checksumTypeOrdinal = call.getInt("value");
        if (checksumTypeOrdinal == null) {
            return;
        }

        getBridge().getActivity().runOnUiThread(() -> {
            try {
                barkoderView.config.getDecoderConfig().Code39.checksumType = Barkoder.Code39ChecksumType
                        .valueOf(checksumTypeOrdinal);

                call.resolve();
            } catch (Exception ex) {
                sendErrorReject(BarkoderPluginErrors.CHECKSUM_TYPE_NOT_FOUNDED, ex.getMessage(), call);
            }
        });
    }

    @PluginMethod
    public void setBarcodeTypeEnabled(PluginCall call) throws JSONException {
        JSONObject arguments = call.getData();
        Integer barcodeTypeOrdinal = arguments.getInt("type");
        Boolean enabled = arguments.getBoolean("enabled");

        getBridge().getActivity().runOnUiThread(() -> {
            try {
                final Barkoder.SpecificConfig specificConfig = BarkoderUtil.getSpecificConfigRefFromBarcodeTypeOrdinal(
                        barcodeTypeOrdinal,
                        barkoderView.config.getDecoderConfig());

                if (specificConfig != null) {
                    specificConfig.enabled = enabled;

                    call.resolve();
                } else {
                    sendErrorReject(BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED, null, call);
                }
            } catch (Exception ex) {
                sendErrorReject(BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED, ex.getMessage(), call);
            }
        });
    }

    @PluginMethod
    public void setMulticodeCachingEnabled(PluginCall call) {
        Boolean multicodeCachingEnabled = call.getBoolean("enabled");
        if (multicodeCachingEnabled == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> BarkoderConfig.SetMulticodeCachingEnabled(multicodeCachingEnabled));

        call.resolve();
    }

    @PluginMethod
    public void setMulticodeCachingDuration(PluginCall call) {
        Integer multicodeCachingDuration = call.getInt("value");
        if (multicodeCachingDuration == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> BarkoderConfig.SetMulticodeCachingDuration(multicodeCachingDuration));

        call.resolve();
    }

    @PluginMethod
    public void setMaximumResultsCount(PluginCall call) {
        Integer maximumResultsCount = call.getInt("value");
        if (maximumResultsCount == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.getDecoderConfig().maximumResultsCount = maximumResultsCount);

        call.resolve();
    }

    @PluginMethod
    public void setBarcodeThumbnailOnResultEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.setThumbnailOnResultEnabled(enabled));

        call.resolve();
    }

    @PluginMethod
    public void setDuplicatesDelayMs(PluginCall call) {
        Integer duplicatesDelayMs = call.getInt("value");
        if (duplicatesDelayMs == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.getDecoderConfig().duplicatesDelayMs = duplicatesDelayMs);

        call.resolve();
    }

    @PluginMethod
    public void setThresholdBetweenDuplicatesScans(PluginCall call) {
        Integer thresholdBetweenDuplicatesScans = call.getInt("value");
        if (thresholdBetweenDuplicatesScans == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(
                () -> barkoderView.config.setThresholdBetweenDuplicatesScans(thresholdBetweenDuplicatesScans));

        call.resolve();
    }

    @PluginMethod
    public void setUpcEanDeblurEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.getDecoderConfig().upcEanDeblur = enabled);

        call.resolve();
    }

    @PluginMethod
    public void setMisshaped1DEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.getDecoderConfig().enableMisshaped1D = enabled);

        call.resolve();
    }

    @PluginMethod
    public void setEnableVINRestrictions(PluginCall call) {
        Boolean enableVINRestrictions = call.getBoolean("value");
        if (enableVINRestrictions == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(
                () -> barkoderView.config.getDecoderConfig().enableVINRestrictions = enableVINRestrictions);

        call.resolve();
    }

    @PluginMethod
    public void setDatamatrixDpmModeEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.getDecoderConfig().Datamatrix.dpmMode = enabled);

        call.resolve();
    }

    @PluginMethod
    public void setQrDpmModeEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.getDecoderConfig().QR.dpmMode = enabled);

        call.resolve();
    }

    @PluginMethod
    public void setQrMicroDpmModeEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.getDecoderConfig().QRMicro.dpmMode = enabled);

        call.resolve();
    }

    @PluginMethod
    public void configureBarkoder(PluginCall call) {
        JSONObject configAsJson = call.getObject("barkoderConfig");
        if (configAsJson == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> {
            try {
                // Its easier for the users to send us hex color from the cross platform
                if (configAsJson.has("roiLineColor")) {
                    String colorAsHex = configAsJson.getString("roiLineColor");
                    configAsJson.put("roiLineColor", BarkoderUtil.hexColorToIntColor(colorAsHex));
                }

                if (configAsJson.has("roiOverlayBackgroundColor")) {
                    String colorAsHex = configAsJson.getString("roiOverlayBackgroundColor");
                    configAsJson.put("roiOverlayBackgroundColor", BarkoderUtil.hexColorToIntColor(colorAsHex));
                }

                if (configAsJson.has("locationLineColor")) {
                    String colorAsHex = configAsJson.getString("locationLineColor");
                    configAsJson.put("locationLineColor", BarkoderUtil.hexColorToIntColor(colorAsHex));
                }

                if (configAsJson.has("scanningIndicatorColor")) {
                    String colorAsHex = configAsJson.getString("scanningIndicatorColor");
                    configAsJson.put("scanningIndicatorColor", BarkoderUtil.hexColorToIntColor(colorAsHex));
                }

                String convertedBarkoderConfigAsString = configAsJson.toString();

                String[] keys = { "aztec", "aztecCompact", "qr", "qrMicro", "code128", "code93", "code39", "codabar",
                        "code11", "msi", "upcA", "upcE", "upcE1", "ean13", "ean8", "pdf417", "pdf417Micro",
                        "datamatrix", "code25", "interleaved25", "itf14", "iata25", "matrix25", "datalogic25", "coop25",
                        "code32", "telepen", "dotcode", "idDocument", "databar14", "databarLimited", "databarExpanded", "minLength", "maxLength", "threadsLimit", "roiX",
                        "roiY", "roiWidth", "roiHeight" };

                String[] values = { "Aztec", "Aztec Compact", "QR", "QR Micro", "Code 128", "Code 93", "Code 39",
                        "Codabar", "Code 11", "MSI", "Upc-A", "Upc-E", "Upc-E1", "Ean-13", "Ean-8", "PDF 417",
                        "PDF 417 Micro", "Datamatrix", "Code 25", "Interleaved 2 of 5", "ITF 14", "IATA 25",
                        "Matrix 25", "Datalogic 25", "COOP 25", "Code 32", "Telepen", "Dotcode", "ID Document", "Databar 14", "Databar Limited", "Databar Expanded",
                        "minimumLength", "maximumLength", "maxThreads", "roi_x", "roi_y", "roi_w", "roi_h" };

                Map<String, String> map = new HashMap<>();
                for (int i = 0; i < keys.length; i++) {
                    map.put(keys[i], values[i]);
                }

                for (Map.Entry<String, String> entry : map.entrySet()) {
                    convertedBarkoderConfigAsString = convertedBarkoderConfigAsString.replaceAll(entry.getKey(),
                            entry.getValue());
                }

                JSONObject convertedConfigAsJson = new JSONObject(convertedBarkoderConfigAsString);

                BarkoderHelper.applyJsonToConfig(barkoderView.config, convertedConfigAsJson);

                call.resolve();
            } catch (Exception ex) {
                sendErrorReject(BarkoderPluginErrors.BARKODER_CONFIG_IS_NOT_VALID, ex.getMessage(), call);
            }
        });
    }

    @PluginMethod
    public void setIdDocumentMasterChecksumEnabled(PluginCall call) {
        Boolean enabled = call.getBoolean("enabled");
        if (enabled == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.getDecoderConfig().IDDocument.masterChecksumType = Barkoder.StandardChecksumType.valueOf(enabled ? 1 : 0));

        call.resolve();
    }

    @PluginMethod
    public void setUPCEexpandToUPCA(PluginCall call) {
        Boolean value = call.getBoolean("value");
        if (value == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.getDecoderConfig().UpcE.expandToUPCA = value);

        call.resolve();
    }

    @PluginMethod
    public void setUPCE1expandToUPCA(PluginCall call) {
        Boolean value = call.getBoolean("value");
        if (value == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.getDecoderConfig().UpcE1.expandToUPCA = value);

        call.resolve();
    }

    @PluginMethod
    public void setCustomOption(PluginCall call) throws JSONException {
        JSONObject arguments = call.getData();
        String option = arguments.getString("option");
        Integer value = arguments.getInt("value");

        getBridge().getActivity().runOnUiThread(() -> {
            Barkoder.SetCustomOption(barkoderView.config.getDecoderConfig(), option, value);
        });
    }

    @PluginMethod
    public void setScanningIndicatorColor(PluginCall call) {
        String hexColor = call.getString("value");
        if (hexColor == null) {
            return;
        }
        getBridge().getActivity()
                .runOnUiThread(() -> barkoderView.config.setScanningIndicatorColor(BarkoderUtil.hexColorToIntColor(hexColor)));

        call.resolve();
    }

    @PluginMethod
    public void setScanningIndicatorWidth(PluginCall call) {
        Float lineWidth = call.getFloat("value");
        if (lineWidth == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.setScanningIndicatorWidth(lineWidth));

        call.resolve();
    }

    @PluginMethod
    public void setScanningIndicatorAnimation(PluginCall call) {
        Integer animation = call.getInt("value");
        if (animation == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.setScanningIndicatorAnimation(animation));

        call.resolve();
    }

    @PluginMethod
    public void setScanningIndicatorAlwaysVisible(PluginCall call) {
        Boolean value = call.getBoolean("value");
        if (value == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.setScanningIndicatorAlwaysVisible(value));

        call.resolve();
    }

    @PluginMethod
    public void setDynamicExposure(PluginCall call) {
        Integer dynamicExposure = call.getInt("value");
        if (dynamicExposure == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.setDynamicExposure(dynamicExposure));

        call.resolve();
    }

    @PluginMethod
    public void setCentricFocusAndExposure(PluginCall call) {
        Boolean value = call.getBoolean("value");
        if (value == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.setCentricFocusAndExposure(value));

        call.resolve();
    }

    @PluginMethod
    public void setEnableComposite(PluginCall call) {
        Integer value = call.getInt("value");
        if (value == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.config.getDecoderConfig().enableComposite = value);

        call.resolve();
    }

    @PluginMethod
    public void setVideoStabilization(PluginCall call) {
        Boolean value = call.getBoolean("value");
        if (value == null) {
            return;
        }
        getBridge().getActivity().runOnUiThread(() -> barkoderView.setVideoStabilization(value));

        call.resolve();
    }

    @PluginMethod
    public void setCamera(PluginCall call) {
        Integer value = call.getInt("value");

        if (value == null || value < 0 || value >= BarkoderCameraPosition.values().length) {
            sendErrorReject(BarkoderPluginErrors.INVALID_CAMERA_POSITION, BarkoderPluginErrors.INVALID_CAMERA_POSITION.getErrorMessage(), call);
            return;
        }

        getBridge().getActivity().runOnUiThread(() -> {
                BarkoderCameraPosition cameraPosition = BarkoderCameraPosition.values()[value];
                barkoderView.setCamera(cameraPosition);
        });

        call.resolve();
    }

    // Getters

    @PluginMethod
    public void isFlashAvailable(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            barkoderView.isFlashAvailable(value -> call.resolve(toJSObjectBool("isFlashAvailable", value)));
        });
    }

    @PluginMethod
    public void isCloseSessionOnResultEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isCloseSessionOnResultEnabled",
                    barkoderView.config.isCloseSessionOnResultEnabled()));
        });
    }

    @PluginMethod
    public void isImageResultEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isImageResultEnabled", barkoderView.config.isImageResultEnabled()));
        });
    }

    @PluginMethod
    public void isLocationInImageResultEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isLocationInImageResultEnabled",
                    barkoderView.config.isLocationInImageResultEnabled()));
        });
    }

    @PluginMethod
    public void isLocationInPreviewEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(
                    toJSObjectBool("isLocationInPreviewEnabled", barkoderView.config.isLocationInPreviewEnabled()));
        });
    }

    @PluginMethod
    public void isPinchToZoomEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isPinchToZoomEnabled", barkoderView.config.isPinchToZoomEnabled()));
        });
    }

    @PluginMethod
    public void isRegionOfInterestVisible(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isRegionOfInterestVisible", barkoderView.config.isRegionOfInterestVisible()));
        });
    }

    @PluginMethod
    public void isBeepOnSuccessEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isBeepOnSuccessEnabled", barkoderView.config.isBeepOnSuccessEnabled()));
        });
    }

    @PluginMethod
    public void isVibrateOnSuccessEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isVibrateOnSuccessEnabled", barkoderView.config.isVibrateOnSuccessEnabled()));
        });
    }

    @PluginMethod
    public void getVersion(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectString("version", Barkoder.GetVersion()));
        });
    }

    @PluginMethod
    public void getLocationLineColorHex(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            String hexColor = String.format("#%08X", barkoderView.config.getLocationLineColor());
            call.resolve(toJSObjectString("locationLineColorHex", hexColor));
        });
    }

    @PluginMethod
    public void getRoiLineColorHex(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            String hexColor = String.format("#%08X", barkoderView.config.getRoiLineColor());
            call.resolve(toJSObjectString("roiLineColorHex", hexColor));
        });
    }

    @PluginMethod
    public void getRoiOverlayBackgroundColorHex(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            String hexColor = String.format("#%08X", barkoderView.config.getRoiOverlayBackgroundColor());
            call.resolve(toJSObjectString("roiOverlayBackgroundColorHex", hexColor));
        });
    }

    @PluginMethod
    public void getMaxZoomFactor(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            barkoderView.getMaxZoomFactor(value -> call.resolve(toJSObjectFloat("maxZoomFactor", value)));
        });
    }

    @PluginMethod
    public void getLocationLineWidth(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectFloat("locationLineWidth", barkoderView.config.getLocationLineWidth()));
        });
    }

    @PluginMethod
    public void getRoiLineWidth(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectFloat("roiLineWidth", barkoderView.config.getRoiLineWidth()));
        });
    }

    @PluginMethod
    public void getRegionOfInterest(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            Barkoder.BKRect roiRect = barkoderView.config.getRegionOfInterest();
            JSObject jsObject = new JSObject();
            jsObject.put("roiX", roiRect.left);
            jsObject.put("roiY", roiRect.top);
            jsObject.put("roiWidth", roiRect.width);
            jsObject.put("roiHeight", roiRect.height);
            call.resolve(jsObject);
        });
    }

    @PluginMethod
    public void getBarcodeTypeLengthRange(PluginCall call) throws JSONException {
        JSONObject arguments = call.getData();
        Integer barcodeTypeOrdinal = arguments.getInt("type");
        getBridge().getActivity().runOnUiThread(() -> {
            if (barcodeTypeOrdinal == Barkoder.BarcodeType.Code128.ordinal() ||
                    barcodeTypeOrdinal == Barkoder.BarcodeType.Code93.ordinal() ||
                    barcodeTypeOrdinal == Barkoder.BarcodeType.Code39.ordinal() ||
                    barcodeTypeOrdinal == Barkoder.BarcodeType.Codabar.ordinal() ||
                    barcodeTypeOrdinal == Barkoder.BarcodeType.Code11.ordinal() ||
                    barcodeTypeOrdinal == Barkoder.BarcodeType.Msi.ordinal()) {
                try {
                    final Barkoder.SpecificConfig specificConfig = BarkoderUtil
                            .getSpecificConfigRefFromBarcodeTypeOrdinal(barcodeTypeOrdinal,
                                    barkoderView.config.getDecoderConfig());

                    if (specificConfig != null) {
                        JSObject jsObject = new JSObject();
                        jsObject.put(specificConfig.typeName,
                                Arrays.asList(specificConfig.minimumLength, specificConfig.maximumLength));
                        call.resolve(jsObject);
                    } else {
                        sendErrorReject(BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED, null, call);
                    }
                } catch (Exception ex) {
                    sendErrorReject(BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED, ex.getMessage(), call);
                }
            } else {
                sendErrorReject(BarkoderPluginErrors.BARCODE_TYPE_NOT_SUPPORTED, null, call);
            }
        });
    }

    @PluginMethod
    public void getMsiChecksumType(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectInt("msiChecksumType",
                    barkoderView.config.getDecoderConfig().Msi.checksumType.ordinal()));
        });
    }

    @PluginMethod
    public void getCode39ChecksumType(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectInt("code39ChecksumType",
                    barkoderView.config.getDecoderConfig().Code39.checksumType.ordinal()));
        });
    }

    @PluginMethod
    public void getCode11ChecksumType(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectInt("code11ChecksumType",
                    barkoderView.config.getDecoderConfig().Code11.checksumType.ordinal()));
        });
    }

    @PluginMethod
    public void getEncodingCharacterSet(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectString("encodingCharacterSet",
                    barkoderView.config.getDecoderConfig().encodingCharacterSet));
        });
    }

    @PluginMethod
    public void getDecodingSpeed(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(
                    toJSObjectInt("decodingSpeed", barkoderView.config.getDecoderConfig().decodingSpeed.ordinal()));
        });
    }

    @PluginMethod
    public void getFormattingType(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectInt("formattingType",
                    barkoderView.config.getDecoderConfig().formattingType.ordinal()));
        });
    }

    @PluginMethod
    public void getThreadsLimit(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectInt("threadsLimit", BarkoderConfig.GetThreadsLimit()));
        });
    }

    @PluginMethod
    public void getMaximumResultsCount(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectInt("maximumResultsCount",
                    barkoderView.config.getDecoderConfig().maximumResultsCount));
        });
    }

    @PluginMethod
    public void getDuplicatesDelayMs(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(
                    toJSObjectInt("duplicatesDelayMs", barkoderView.config.getDecoderConfig().duplicatesDelayMs));
        });
    }

    @PluginMethod
    public void isBarcodeTypeEnabled(PluginCall call) throws JSONException {
        JSONObject arguments = call.getData();
        Integer barcodeTypeOrdinal = arguments.getInt("type");
        getBridge().getActivity().runOnUiThread(() -> {
            try {
                final Barkoder.SpecificConfig specificConfig = BarkoderUtil.getSpecificConfigRefFromBarcodeTypeOrdinal(
                        barcodeTypeOrdinal,
                        barkoderView.config.getDecoderConfig());

                if (specificConfig != null) {
                    JSObject jsObject = new JSObject();
                    jsObject.put(specificConfig.typeName, specificConfig.enabled);
                    call.resolve(jsObject);
                } else {
                    sendErrorReject(BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED, null, call);
                }
            } catch (Exception ex) {
                sendErrorReject(BarkoderPluginErrors.BARCODE_TYPE_NOT_FOUNDED, ex.getMessage(), call);
            }
        });
    }

    @PluginMethod
    public void getMulticodeCachingEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("multicodeCachingEnabled", BarkoderConfig.IsMulticodeCachingEnabled()));
        });
    }

    @PluginMethod
    public void getMulticodeCachingDuration(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectInt("multicodeCachingDuration", BarkoderConfig.GetMulticodeCachingDuration()));
        });
    }

    @PluginMethod
    public void isUpcEanDeblurEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isUpcEanDeblurEnabled", barkoderView.config.getDecoderConfig().upcEanDeblur));
        });
    }

    @PluginMethod
    public void isMisshaped1DEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(
                    toJSObjectBool("isMisshaped1DEnabled", barkoderView.config.getDecoderConfig().enableMisshaped1D));
        });
    }

    @PluginMethod
    public void isBarcodeThumbnailOnResultEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isBarcodeThumbnailOnResultEnabled",
                    barkoderView.config.getThumbnailOnResulEnabled()));
        });
    }

    @PluginMethod
    public void getThresholdBetweenDuplicatesScans(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectInt("thresholdBetweenDuplicatesScans",
                    barkoderView.config.getThresholdBetweenDuplicatesScans()));
        });
    }

    @PluginMethod
    public void isVINRestrictionsEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isVINRestrictionsEnabled",
                    barkoderView.config.getDecoderConfig().enableVINRestrictions));
        });
    }

    @PluginMethod
    public void getBarkoderResolution(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectInt("barkoderResolution", barkoderView.config.getBarkoderResolution().ordinal()));
        });
    }

    @PluginMethod
    public void isDatamatrixDpmModeEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isDatamatrixDpmModeEnabled",
                    barkoderView.config.getDecoderConfig().Datamatrix.dpmMode));
        });
    }

    @PluginMethod
    public void isQrDpmModeEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isQrDpmModeEnabled",
                    barkoderView.config.getDecoderConfig().QR.dpmMode));
        });
    }

    @PluginMethod
    public void isQrMicroDpmModeEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isQrMicroDpmModeEnabled",
                    barkoderView.config.getDecoderConfig().QRMicro.dpmMode));
        });
    }

    @PluginMethod
    public void isIdDocumentMasterChecksumEnabled(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isIdDocumentMasterChecksumEnabled",
                    barkoderView.config.getDecoderConfig().IDDocument.masterChecksumType.ordinal() == 1));
        });
    }

    @PluginMethod
    public void getScanningIndicatorColorHex(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            String hexColor = String.format("#%08X", barkoderView.config.getScanningIndicatorColor());
            call.resolve(toJSObjectString("scanningIndicatorColorHex", hexColor));
        });
    }

    @PluginMethod
    public void getScanningIndicatorWidth(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectFloat("scanningIndicatorWidth", barkoderView.config.getScanningIndicatorWidth()));
        });
    }

    @PluginMethod
    public void getScanningIndicatorAnimation(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectInt("scanningIndicatorAnimation", barkoderView.config.getScanningIndicatorAnimation()));
        });
    }

    @PluginMethod
    public void isScanningIndicatorAlwaysVisible(PluginCall call) {
        getBridge().getActivity().runOnUiThread(() -> {
            call.resolve(toJSObjectBool("isScanningIndicatorAlwaysVisible",
                    barkoderView.config.isScanningIndicatorAlwaysVisible()));
        });
    }

    // Helpers

    public JSObject toJSObjectBool(String message, Boolean boolValue) {
        JSObject jsObject = new JSObject();
        return jsObject.put(message, boolValue);
    }

    public JSObject toJSObjectString(String message, String stringValue) {
        JSObject jsObject = new JSObject();
        return jsObject.put(message, stringValue);
    }

    public JSObject toJSObjectFloat(String message, Float floatValue) {
        JSObject jsObject = new JSObject();
        return jsObject.put(message, floatValue);
    }

    public JSObject toJSObjectInt(String message, Integer intValue) {
        JSObject jsObject = new JSObject();
        return jsObject.put(message, intValue);
    }

    private void sendErrorReject(BarkoderPluginErrors error, String message, PluginCall call) {
        call.reject(error.getErrorCode(), error.getErrorMessage() + (message != null ? message : ""));
    }

    public int getScaledPixels(float pixels) {
        // Get the screen's density scale
        final float scale = getBridge().getActivity().getResources().getDisplayMetrics().density;
        // Convert the dps to pixels, based on density scale
        return (int) (pixels * scale + 0.5f);
    }

}