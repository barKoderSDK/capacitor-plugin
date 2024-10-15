package com.barkoder.capacitor.plugin;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.text.TextUtils;
import android.util.Base64;

import com.barkoder.Barkoder;
import com.barkoder.BarkoderLog;
import com.getcapacitor.JSObject;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;

public class BarkoderUtil {
    private static final String TAG = BarkoderUtil.class.getSimpleName();

    static JSObject barkoderResultsToJS(Barkoder.Result[] results, Bitmap[] thumbnails, Bitmap resultImage) {
        JSObject resultJS = new JSObject();

        try {
            resultJS.put("barcodeType", results[0].barcodeType.ordinal());
            resultJS.put("barcodeTypeName", results[0].barcodeTypeName);
            resultJS.put("binaryDataAsBase64", Base64.encodeToString(results[0].binaryData, Base64.NO_WRAP));
            resultJS.put("textualData", results[0].textualData);

            if (!TextUtils.isEmpty(results[0].characterSet))
                resultJS.put("characterSet", results[0].characterSet);

            if (results[0].extra != null && results[0].extra.length > 0) {
                JSONObject extraAsJson = new JSONObject();
                for (Barkoder.BKKeyValue item : results[0].extra) {
                    extraAsJson.put(item.key, item.value);
                }
                resultJS.put("extra", extraAsJson.toString());
            }

            if (resultImage != null)
                resultJS.put("resultImageAsBase64", bitmapImageToBase64(resultImage));

            if (thumbnails[0] != null)
                resultJS.put("resultThumbnailAsBase64", bitmapImageToBase64(thumbnails[0]));

            if (results[0].images != null) {
                for (Barkoder.BKImageDescriptor image : results[0].images) {
                    if (image != null && image.image != null) {
                        switch (image.name) {
                            case "main":
                                resultJS.put("mainImageAsBase64", bitmapImageToBase64(image.image));
                                break;
                            case "document":
                                resultJS.put("documentImageAsBase64", bitmapImageToBase64(image.image));
                                break;
                            case "signature":
                                resultJS.put("signatureImageAsBase64", bitmapImageToBase64(image.image));
                                break;
                            case "picture":
                                resultJS.put("pictureImageAsBase64", bitmapImageToBase64(image.image));
                                break;
                            default:
                                break;
                        }
                    }
                }
            }

        } catch (JSONException ex) {
            BarkoderLog.d(TAG, ex.getMessage());
        }

        return resultJS;
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
        Barkoder.BarcodeType type = Barkoder.BarcodeType.valueOf(barcodeTypeOrdinal);

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
                return  decoderConfig.Dotcode;
            case IDDocument:
                return decoderConfig.IDDocument;
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
}