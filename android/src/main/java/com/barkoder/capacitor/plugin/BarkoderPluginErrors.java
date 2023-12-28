package com.barkoder.capacitor.plugin;

enum BarkoderPluginErrors {

    BARKODER_VIEW_DESTROYED("1", "BarkoderView is destroyed. "),
    INVALID_RESOLUTION("2", "Invalid resolution. "),
    THREADS_LIMIT_NOT_SET("3", "Threads limit is not set. "),
    ROI_NOT_SET("4", "Region Of Interest is not set. "),
    COLOR_NOT_SET("5", "Color is not set. "),
    BARCODE_TYPE_NOT_FOUNDED("6", "Barcode type can't be founded. "),
    BARCODE_TYPE_NOT_SUPPORTED("7", "Barcode type is not supported. "),
    DECODING_SPEED_NOT_FOUNDED("8", "Decoding speed value can't be founded. "),
    FORMATTING_TYPE_NOT_FOUNDED("9", "Formatting type can't be founded. "),
    LENGTH_RANGE_NOT_VALID("10", "Length range is not valid. Min must be > 0 and max must be >= min. "),
    CHECKSUM_TYPE_NOT_FOUNDED("11", "Checksum type can't be founded. "),
    BARKODER_CONFIG_IS_NOT_VALID("12", ""),
    MAXIMUM_RESULTS_TYPE_NOT_FOUNDED("13", "Maximum result value can't be founded. "),
    DUPLICATES_DELAY_NOT_FOUNDED("14", "Duplicates delay value can't be founded. ");

    private final String errorCode;
    private final String errorMessage;

    BarkoderPluginErrors(String errorCode, String errorMessage) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }

    String getErrorCode() {
        return errorCode;
    }

    String getErrorMessage() {
        return errorMessage;
    }

    @SuppressWarnings("NullableProblems")
    @Override
    public String toString() {
        return errorMessage;
    }
}

