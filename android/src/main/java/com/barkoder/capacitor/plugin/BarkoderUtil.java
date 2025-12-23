package com.barkoder.capacitor.plugin;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.text.TextUtils;
import android.util.Base64;
import androidx.annotation.Nullable;

import com.barkoder.Barkoder;
import com.barkoder.BarkoderHelper;
import com.barkoder.BarkoderLog;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.util.Objects;

public class BarkoderUtil {
    private static final String TAG = BarkoderUtil.class.getSimpleName();

    static JSObject barkoderResultsToJS(Barkoder.Result[] results, Bitmap[] thumbnails, Bitmap resultImage) {
        JSObject barkoderResultJS = new JSObject();
        JSArray resultsArray = new JSArray();

        // Process each decoder result separately
        for (Barkoder.Result decoderResult : results) {
            JSObject resultJS = new JSObject();

            resultJS.put("barcodeType", decoderResult.barcodeType.ordinal());
            resultJS.put("barcodeTypeName", decoderResult.barcodeTypeName);
            resultJS.put("binaryDataAsBase64", Base64.encodeToString(decoderResult.binaryData, Base64.NO_WRAP));
            resultJS.put("textualData", decoderResult.textualData);

            if (!TextUtils.isEmpty(decoderResult.characterSet)) {
                resultJS.put("characterSet", decoderResult.characterSet);
            }

            // Add "extra" if available and not empty
            if (decoderResult.extra != null && decoderResult.extra.length > 0) {
                JSObject extraJson = new JSObject();
                for (Barkoder.BKKeyValue item : decoderResult.extra) {
                    extraJson.put(item.key, item.value);
                }
                resultJS.put("extra", extraJson.toString());
            }

            if (decoderResult.location != null && decoderResult.location.points != null) {
                JSArray locationPointsArray = new JSArray();
                for (Barkoder.BKPoint point : decoderResult.location.points) {
                    JSObject pointJson = new JSObject();
                    pointJson.put("x", point.x);
                    pointJson.put("y", point.y);
                    locationPointsArray.put(pointJson);
                }
                resultJS.put("locationPoints", locationPointsArray);
            }

            if (decoderResult.extra != null && decoderResult.extra.length > 0) {
            Bitmap sadlImage = BarkoderHelper.sadlImage(decoderResult.extra);
            if (sadlImage != null) {
                resultJS.put("sadlImageAsBase64", bitmapImageToBase64(sadlImage));
                }
            }

            // Add mrzImagesAsBase64
            if (Objects.equals(decoderResult.barcodeTypeName, "MRZ")) {
                if (decoderResult.images != null) {
                    JSArray mrzImagesArray = new JSArray();

                    for (Barkoder.BKImageDescriptor image : decoderResult.images) {
                        if (image != null && image.image != null) {
                            switch (image.name) {
                                case "main":
                                case "document":
                                case "signature":
                                case "picture":
                                    JSObject imageInfo = new JSObject();
                                    imageInfo.put("name", image.name);
                                    imageInfo.put("base64", bitmapImageToBase64(image.image));
                                    mrzImagesArray.put(imageInfo);
                                    break;
                            }
                        }
                    }
                    resultJS.put("mrzImagesAsBase64", mrzImagesArray);
                }
            }

            resultsArray.put(resultJS);
        }

        // Add decoderResults to the final JSON object
        barkoderResultJS.put("decoderResults", resultsArray);

        // Process thumbnails as an array of base64 strings if available, outside the loop
        if (thumbnails != null) {
            JSArray thumbnailsBase64Array = new JSArray();
            for (Bitmap thumbnail : thumbnails) {
                if (thumbnail != null) {
                    thumbnailsBase64Array.put(bitmapImageToBase64(thumbnail));
                }
            }
            barkoderResultJS.put("resultThumbnailsAsBase64", thumbnailsBase64Array);
        }

        // Process the main result image as base64 if available, outside the loop
        if (resultImage != null) {
            barkoderResultJS.put("resultImageAsBase64", bitmapImageToBase64(resultImage));
        }

        return barkoderResultJS;
    }

    private static String bitmapImageToBase64(Bitmap bitmapImage) {
        try (ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream()) {
            bitmapImage.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream);
            byte[] bitmapImageBytes = byteArrayOutputStream.toByteArray();

            return Base64.encodeToString(bitmapImageBytes, Base64.NO_WRAP);
        } catch (Exception ex) {
            BarkoderLog.d(TAG, ex.getMessage());
        }
        return null;
    }

    static Barkoder.SpecificConfig getSpecificConfigRefFromBarcodeTypeOrdinal
            (int barcodeTypeOrdinal, Barkoder.Config decoderConfig) throws Exception {

        // If not founded exception is thrown
        Barkoder.DecoderType type = Barkoder.DecoderType.valueOf(barcodeTypeOrdinal);

        switch (type) {
            case Aztec:
                return decoderConfig.Aztec;
            case AztecCompact:
                return decoderConfig.AztecCompact;
            case QR:
                return decoderConfig.QR;
            case QRMicro:
                return decoderConfig.QRMicro;
            case Code128:
                return decoderConfig.Code128;
            case Code93:
                return decoderConfig.Code93;
            case Code39:
                return decoderConfig.Code39;
            case Codabar:
                return decoderConfig.Codabar;
            case Code11:
                return decoderConfig.Code11;
            case Msi:
                return decoderConfig.Msi;
            case UpcA:
                return decoderConfig.UpcA;
            case UpcE:
                return decoderConfig.UpcE;
            case UpcE1:
                return decoderConfig.UpcE1;
            case Ean13:
                return decoderConfig.Ean13;
            case Ean8:
                return decoderConfig.Ean8;
            case PDF417:
                return decoderConfig.PDF417;
            case PDF417Micro:
                return decoderConfig.PDF417Micro;
            case Datamatrix:
                return decoderConfig.Datamatrix;
            case Code25:
                return decoderConfig.Code25;
            case Interleaved25:
                return decoderConfig.Interleaved25;
            case ITF14:
                return decoderConfig.ITF14;
            case IATA25:
                return decoderConfig.IATA25;
            case Matrix25:
                return decoderConfig.Matrix25;
            case Datalogic25:
                return decoderConfig.Datalogic25;
            case COOP25:
                return decoderConfig.COOP25;
            case Code32:
                return decoderConfig.Code32;
            case Telepen:
                return decoderConfig.Telepen;
            case Dotcode:
                return decoderConfig.Dotcode;
            case IDDocument:
                return decoderConfig.IDDocument;
            case Databar14:
                return decoderConfig.Databar14;
            case DatabarLimited:
                return decoderConfig.DatabarLimited;
            case DatabarExpanded:
                return decoderConfig.DatabarExpanded;
            case PostalIMB:
                return decoderConfig.PostalIMB;
            case Postnet:
                return decoderConfig.Postnet;
            case Planet:
                return decoderConfig.Planet;
            case AustralianPost:
                return decoderConfig.AustralianPost;
            case RoyalMail:
                return decoderConfig.RoyalMail;
            case KIX:
                return decoderConfig.KIX;
            case JapanesePost:
                return decoderConfig.JapanesePost;
            case MaxiCode:
                return decoderConfig.MaxiCode;
            case OCRText:
                return decoderConfig.OCRText;
        }
        return null;
    }

    static int hexColorToIntColor(String hexColor) {
        int color;

        if (hexColor.startsWith("#"))
            color = Color.parseColor(hexColor);
        else
            color = Color.parseColor("#" + hexColor);

        return color;
    }

    /** Parses "#RGB", "#ARGB", "#RRGGBB", or "#AARRGGBB" (alpha first when present).
     *  Returns null for empty or invalid input. */
    @Nullable
    public static Integer hexColorToIntColorOrNull(@Nullable String raw) {
        if (raw == null) return null;

        String s = raw.trim();
        if (s.isEmpty()) return null;

        if (s.startsWith("#")) {
            s = s.substring(1);
        } else if (s.startsWith("0x") || s.startsWith("0X")) {
            s = s.substring(2);
        }

        int len = s.length();
        if (!(len == 3 || len == 4 || len == 6 || len == 8)) return null;

        // must be all hex digits
        if (!s.matches("^[0-9A-Fa-f]+$")) return null;

        try {
            // Color.parseColor needs a leading '#'
            return Color.parseColor("#" + s);
        } catch (IllegalArgumentException e) {
            return null;
        }
    }

    @Nullable
    public static Bitmap decodeBase64BitmapOrNull(@Nullable String base64) {
        if (base64 == null || base64.isEmpty()) return null;
        try {
            byte[] bytes = android.util.Base64.decode(base64, android.util.Base64.DEFAULT);
            return android.graphics.BitmapFactory.decodeByteArray(bytes, 0, bytes.length);
        } catch (Throwable ignore) {
            return null;
        }
    }
}