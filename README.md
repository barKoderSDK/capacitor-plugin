# barKoder Barcode Scanner SDK plugin for Capacitor
## Enterprise-grade barcode scanner SDK plugin for all Capacitor apps

The barKoder Barcode Scanner SDK Capacitor plugin grants an easy to use solution with a great and completely customizable interface that can be instantly integrated in both iOS and Android apps.

The [barKoder Barcode Scanner SDK](https://barkoder.com/barcode-scanner-sdk) will fully transform the user's smartphones and tablets that deploy your Enterprise and Consumer apps into rugged barcode scanning devices without the need to procure and maintain expensive and sluggish hardware devices that have a very short life span.

Even though the barKoder barcode scanner SDK is a relatively new product, it is already more advanced than other competitor API's. Its robust barcode reading engine can be used to read the content of the most widely used barcodes with lightning fast speed and unprecedented recognition rate:

1D - [Codabar](https://barkoder.com/barcode-types/codaba), [Code 11](https://barkoder.com/barcode-types/code-11), [Code 25](https://barkoder.com/barcode-types/code-25), [Code 39](https://barkoder.com/barcode-types/code-39), [Code 93](https://barkoder.com/barcode-types/code-93), [Code 128](https://barkoder.com/barcode-types/code-128), [EAN-8](https://barkoder.com/barcode-types/ean-upc-code), [EAN-13](https://barkoder.com/barcode-types/ean-upc-code), [Interleaved 2 of 5](https://barkoder.com/barcode-types/code-25), [ITF-14](https://barkoder.com/barcode-types/code-25), [MSI Plessey](https://barkoder.com/barcode-types/msi-plessey), [Pharmacode](https://barkoder.com/barcode-types/code-32), [Telepen](https://barkoder.com/barcode-types/telepen), [UPC-A](https://barkoder.com/barcode-types/ean-upc-code) & [UPC-E](https://barkoder.com/barcode-types/ean-upc-code)
2D - [Aztec Code](https://barkoder.com/barcode-types/aztec), [Aztec Compact](https://barkoder.com/barcode-types/aztec), [Data Matrix](https://barkoder.com/barcode-types/data-matrix), [DotCode](https://barkoder.com/barcode-types/dotcode), [PDF417](https://barkoder.com/barcode-types/pdf417), [Micro PDF417](https://barkoder.com/barcode-types/pdf417), [QR Code](https://barkoder.com/barcode-types/qr-code) & [Micro QR Code](https://barkoder.com/barcode-types/qr-code)

The [barKoder SDK](https://barkoder.com/) features multiple algorithms that handle a wide variety of barcode scanning scenarios with unprecedented performance in terms of speed and success rate: 
* [DPM Mode](https://barkoder.com/dpm-barcode-scanner-sdk) - Specially designed scanning template for decoding Data Matrix barcodes engraved using any Direct Part Marking (DPM) technique;
* [MatrixSight](https://barkoder.com/matrixsight) - Proprietary algorithm that can successfully scan QR Codes or Data Matrix barcodes even when they are missing their finder, timing and/or alignment patterns, even part of the data elements;
* [Segment Decoding](https://barkoder.com/segment-decoding) - The advanced barcode localization techniques implemented into the barKoder SDK grants an ability to recognize 1D barcodes that have significant deformations along their Z axis, getting especially handy when trying to recognize barcodes found on test tubes, bottles and other surfaces with rounded, curved, hollowed or otherwise irregular shapes;
* [VIN Barcode Scanning Mode](https://barkoder.com/vin-scanning-mode) - The most advanced VIN barcode scanning mode on the market, utilizing all the special algorithms of the barKoder SDK leading to the ultimate scanning experience of any kind of barcodes used for embedding Vehicle Identification Numbers, including Code 39, Code 128, QR Code and Data Matrix;
* [DeBlur Mode](https://barkoder.com/deblur-mode) - Whether there's lens, motion or focus blur present in EAN or UPC barcodes, the barKoder DeBlur Mode alleviates it fully and doesn't allow the scanning experience to suffer;
* [PDF417-LineSight](https://barkoder.com/pdf417-linesight) - The robust PDF417 barcode scanner SDK that is offered by barKoder can detect even the most severely damaged PDF417 codes, including missing their start and stop patterns, stop row indicators or even entire data columns, making it the sublime choice for apps that need to reliably scan US or Canadian driver's licenses, South African vehicle license discs or driver's licenses, as well as various types of ID's such as Military, Argentinian, Colombian or South African Smart ID Cards.

You can check out our free demo app Barcode Scanner by barKoder available both via [Apple App Store](https://apps.apple.com/us/app/barkoder-scanner/id6443715409?uo=2) & [Google Play Store](https://play.google.com/store/apps/details?id=com.barkoder.demoscanner).

## Documentation

You can find full documentation about the barKoder Barcode Reader SDK here: https://docs.barkoder.com/en/capacitor-installation

## Trial License

If you run the barKoder Barcode Scanner SDK without a valid trial or production license, all results upon successful barcode scans will be partially masked by asterisks (*). You can get a trial license simply by [registering on the barKoder Portal](https://barkoder.com/register) and utilizing the self-service for [Evaluation License Generation](https://barkoder.com/spr/new)! Each trial license will be good for an initial duration of 30 days and can be deployed to up to 25 devices. For any custom requirements, contact our sales team via sales@barkoder.com

Note that a trial license is only supposed to be utilized in a development or staging environment. If you decide to publish a trial license along with your app to the App Store, Play Store or any public store we won't be held accountable for any potential consequences. 

## Free Developer Support

Our support is completely free for integration or testing purposes and granted through the [barKoder Portal](https://barkoder.com/login). After registering and logging into your account, you only need to submit a [Support Issue](https://barkoder.com/issues) form. Alternatively, you can contact us by email via support@barkoder.com.

## Requirements

Capacitor is a cross-platform app runtime that makes it easy to build web apps that run natively on iOS, Android and the web. To get started with building apps using Capacitor, you'll need to meet certain requirements:

1. **Node.js and npm:**
   - Ensure you have Node.js installed on your machine. Capacitor requires Node.js version 10 or later.
   - npm (Node Package Manager) is also required. It usually comes with Node.js.
2. **Text Editor or IDE:**
   - Choose a text editor or an integrated development environment (IDE) for coding. Popular choices include Visual Studio Code, Atom, or any other editor of your preference.
3. **Git:**
   - Capacitor projects are often managed with Git, so having Git installed on your machine is recommended.
4. **Command Line Interface (CLI):**
   - Capacitor commands are executed via the command line. Make sure you have a command line interface (CLI) installed and accessible on your system.
5. **Mobile Development SDKs:**
   - To build and run apps on specific platforms, you'll need the corresponding SDKs:
     - For iOS development: Xcode (available on macOS)
     - For Android development: Android Studio
Capacitor project. Here are the basic steps:
1. **Install Capacitor:**
   ```bash
   npm install -g @capacitor/cli
   ```
3. **Add Platforms:**
   ```bash
   npx cap add ios
   npx cap add android
   ```
4. **Open IDE and Start Coding:**
   - Open your chosen IDE or text editor and start building your app using web technologies.
5. **Build and Run:**
   - Use Capacitor commands to build and run your app on different platforms.
   ```bash
   npx cap open ios
   npx cap open android
   ```
These steps provide a basic overview, and the Capacitor documentation may have been updated since our last knowledge update. It's always a good idea to refer to the official Capacitor documentation for the latest and most accurate information: [Capacitor Documentation](https://capacitorjs.com/docs).

## Install

```bash
npm install barkoder-capacitor
npx cap sync
```

## Install Manually
If you would like to install from a local folder you will need to follow these steps:

- Download zip
- Unpack zip file
- Rename folder to your liking
- Paste the folder in app directory ex. **myApp/barkoder-capacitor** (this is the new name of the download plugin folder)
- Finally:
```bash
npm install “/your-path/myApp/barkoder-capacitor”
```

## Using the plugin 
## Angular

In your ts file:
```bash
import { Barkoder, BarkoderResult, BarcodeType } from 'barkoder-capacitor'

@ViewChild('barkoderView') barkoderViewRef!: ElementRef;

   constructor() {
     Barkoder.addListener('barkoderResultEvent', (data: any) => {
       console.log('barkoderResultEvent was fired');
       const barkoderResult = new BarkoderResult(data);
       if (barkoderResult) { 
         barkoderResult.decoderResults.forEach((result, index) => {
            console.log(`Result ${index + 1}: ${result.textualData}`);
         });
       }
     });
   }

   ngAfterViewInit() {
    Barkoder.registerWithLicenseKey({ licenseKey: "YOUR_LICENSE_KEY" });
    setTimeout(() => {
      const boundingRect = this.barkoderViewRef.nativeElement.getBoundingClientRect() as DOMRect;
      Barkoder.initialize({
        width: Math.round(boundingRect.width),
        height: Math.round(boundingRect.height),
        x: Math.round(boundingRect.x),
        y: Math.round(boundingRect.y),
      });
      this.setBarkoderSettings();
      this.setActiveBarcodeTypes();
    }, 200);
  }

   setActiveBarcodeTypes() {
    Barkoder.setBarcodeTypeEnabled({ type: BarcodeType.qr, enabled: true });
    Barkoder.setBarcodeTypeEnabled({ type: BarcodeType.code128, enabled: true });
    Barkoder.setBarcodeTypeEnabled({ type: BarcodeType.ean13, enabled: true });
   }

   setBarkoderSettings() {
    Barkoder.setRegionOfInterestVisible({value: true});
    Barkoder.setRegionOfInterest({ left: 5, top: 5, width: 90, height: 90 });
    Barkoder.setImageResultEnabled({ enabled: true});
    Barkoder.setBarcodeThumbnailOnResultEnabled({ enabled: true});
   }

   startScanning() {
    Barkoder.startScanning();
   }
```

In your HTML file add the barkoderView div id:
```bash
<div id="barkoderView" #barkoderView >
```

In your scss file set the desired barkoderView height:
```bash
#barkoderView {
   height: 400px;
}
```



## API

<docgen-index>

* [`initialize(...)`](#initialize)
* [`registerWithLicenseKey(...)`](#registerwithlicensekey)
* [`setZoomFactor(...)`](#setzoomfactor)
* [`setFlashEnabled(...)`](#setflashenabled)
* [`startCamera()`](#startcamera)
* [`startScanning()`](#startscanning)
* [`stopScanning()`](#stopscanning)
* [`pauseScanning()`](#pausescanning)
* [`freezeScanning()`](#freezescanning)
* [`unfreezeScanning()`](#unfreezescanning)
* [`scanImage(...)`](#scanimage)
* [`setLocationLineColor(...)`](#setlocationlinecolor)
* [`setLocationLineWidth(...)`](#setlocationlinewidth)
* [`setRoiLineColor(...)`](#setroilinecolor)
* [`setRoiLineWidth(...)`](#setroilinewidth)
* [`setRoiOverlayBackgroundColor(...)`](#setroioverlaybackgroundcolor)
* [`setCloseSessionOnResultEnabled(...)`](#setclosesessiononresultenabled)
* [`setImageResultEnabled(...)`](#setimageresultenabled)
* [`setLocationInImageResultEnabled(...)`](#setlocationinimageresultenabled)
* [`setRegionOfInterest(...)`](#setregionofinterest)
* [`setThreadsLimit(...)`](#setthreadslimit)
* [`setLocationInPreviewEnabled(...)`](#setlocationinpreviewenabled)
* [`setPinchToZoomEnabled(...)`](#setpinchtozoomenabled)
* [`setRegionOfInterestVisible(...)`](#setregionofinterestvisible)
* [`setBarkoderResolution(...)`](#setbarkoderresolution)
* [`setBeepOnSuccessEnabled(...)`](#setbeeponsuccessenabled)
* [`setVibrateOnSuccessEnabled(...)`](#setvibrateonsuccessenabled)
* [`showLogMessages(...)`](#showlogmessages)
* [`setBarcodeTypeLengthRange(...)`](#setbarcodetypelengthrange)
* [`setEncodingCharacterSet(...)`](#setencodingcharacterset)
* [`setDecodingSpeed(...)`](#setdecodingspeed)
* [`setFormattingType(...)`](#setformattingtype)
* [`setCode11ChecksumType(...)`](#setcode11checksumtype)
* [`setMsiChecksumType(...)`](#setmsichecksumtype)
* [`setCode39ChecksumType(...)`](#setcode39checksumtype)
* [`setBarcodeTypeEnabled(...)`](#setbarcodetypeenabled)
* [`setMulticodeCachingEnabled(...)`](#setmulticodecachingenabled)
* [`setMulticodeCachingDuration(...)`](#setmulticodecachingduration)
* [`setMaximumResultsCount(...)`](#setmaximumresultscount)
* [`setBarcodeThumbnailOnResultEnabled(...)`](#setbarcodethumbnailonresultenabled)
* [`setThresholdBetweenDuplicatesScans(...)`](#setthresholdbetweenduplicatesscans)
* [`setUpcEanDeblurEnabled(...)`](#setupceandeblurenabled)
* [`setMisshaped1DEnabled(...)`](#setmisshaped1denabled)
* [`setEnableVINRestrictions(...)`](#setenablevinrestrictions)
* [`setDatamatrixDpmModeEnabled(...)`](#setdatamatrixdpmmodeenabled)
* [`setQrDpmModeEnabled(...)`](#setqrdpmmodeenabled)
* [`setQrMicroDpmModeEnabled(...)`](#setqrmicrodpmmodeenabled)
* [`configureBarkoder(...)`](#configurebarkoder)
* [`setIdDocumentMasterChecksumEnabled(...)`](#setiddocumentmasterchecksumenabled)
* [`setUPCEexpandToUPCA(...)`](#setupceexpandtoupca)
* [`setUPCE1expandToUPCA(...)`](#setupce1expandtoupca)
* [`setCustomOption(...)`](#setcustomoption)
* [`setScanningIndicatorColor(...)`](#setscanningindicatorcolor)
* [`setScanningIndicatorWidth(...)`](#setscanningindicatorwidth)
* [`setScanningIndicatorAnimation(...)`](#setscanningindicatoranimation)
* [`setScanningIndicatorAlwaysVisible(...)`](#setscanningindicatoralwaysvisible)
* [`setDynamicExposure(...)`](#setdynamicexposure)
* [`setCentricFocusAndExposure(...)`](#setcentricfocusandexposure)
* [`setEnableComposite(...)`](#setenablecomposite)
* [`setVideoStabilization(...)`](#setvideostabilization)
* [`setCamera(...)`](#setcamera)
* [`setShowDuplicatesLocations(...)`](#setshowduplicateslocations)
* [`setARMode(...)`](#setarmode)
* [`setARResultDisappearanceDelayMs(...)`](#setarresultdisappearancedelayms)
* [`setARLocationTransitionSpeed(...)`](#setarlocationtransitionspeed)
* [`setAROverlayRefresh(...)`](#setaroverlayrefresh)
* [`setARSelectedLocationColor(...)`](#setarselectedlocationcolor)
* [`setARNonSelectedLocationColor(...)`](#setarnonselectedlocationcolor)
* [`setARSelectedLocationLineWidth(...)`](#setarselectedlocationlinewidth)
* [`setARNonSelectedLocationLineWidth(...)`](#setarnonselectedlocationlinewidth)
* [`setARLocationType(...)`](#setarlocationtype)
* [`setARDoubleTapToFreezeEnabled(...)`](#setardoubletaptofreezeenabled)
* [`setARHeaderHeight(...)`](#setarheaderheight)
* [`setARHeaderShowMode(...)`](#setarheadershowmode)
* [`setARHeaderMaxTextHeight(...)`](#setarheadermaxtextheight)
* [`setARHeaderMinTextHeight(...)`](#setarheadermintextheight)
* [`setARHeaderTextColorSelected(...)`](#setarheadertextcolorselected)
* [`setARHeaderTextColorNonSelected(...)`](#setarheadertextcolornonselected)
* [`setARHeaderHorizontalTextMargin(...)`](#setarheaderhorizontaltextmargin)
* [`setARHeaderVerticalTextMargin(...)`](#setarheaderverticaltextmargin)
* [`setARHeaderTextFormat(...)`](#setarheadertextformat)
* [`isFlashAvailable()`](#isflashavailable)
* [`isCloseSessionOnResultEnabled()`](#isclosesessiononresultenabled)
* [`isImageResultEnabled()`](#isimageresultenabled)
* [`isLocationInImageResultEnabled()`](#islocationinimageresultenabled)
* [`isLocationInPreviewEnabled()`](#islocationinpreviewenabled)
* [`isPinchToZoomEnabled()`](#ispinchtozoomenabled)
* [`isRegionOfInterestVisible()`](#isregionofinterestvisible)
* [`isBeepOnSuccessEnabled()`](#isbeeponsuccessenabled)
* [`isVibrateOnSuccessEnabled()`](#isvibrateonsuccessenabled)
* [`getVersion()`](#getversion)
* [`getLocationLineColorHex()`](#getlocationlinecolorhex)
* [`getRoiLineColorHex()`](#getroilinecolorhex)
* [`getRoiOverlayBackgroundColorHex()`](#getroioverlaybackgroundcolorhex)
* [`getMaxZoomFactor()`](#getmaxzoomfactor)
* [`getLocationLineWidth()`](#getlocationlinewidth)
* [`getRoiLineWidth()`](#getroilinewidth)
* [`getRegionOfInterest()`](#getregionofinterest)
* [`getBarcodeTypeLengthRange(...)`](#getbarcodetypelengthrange)
* [`getMsiChecksumType()`](#getmsichecksumtype)
* [`getCode39ChecksumType()`](#getcode39checksumtype)
* [`getCode11ChecksumType()`](#getcode11checksumtype)
* [`getEncodingCharacterSet()`](#getencodingcharacterset)
* [`getDecodingSpeed()`](#getdecodingspeed)
* [`getFormattingType()`](#getformattingtype)
* [`getThreadsLimit()`](#getthreadslimit)
* [`getMaximumResultsCount()`](#getmaximumresultscount)
* [`isBarcodeTypeEnabled(...)`](#isbarcodetypeenabled)
* [`getMulticodeCachingEnabled()`](#getmulticodecachingenabled)
* [`getMulticodeCachingDuration()`](#getmulticodecachingduration)
* [`isUpcEanDeblurEnabled()`](#isupceandeblurenabled)
* [`isMisshaped1DEnabled()`](#ismisshaped1denabled)
* [`isBarcodeThumbnailOnResultEnabled()`](#isbarcodethumbnailonresultenabled)
* [`getThresholdBetweenDuplicatesScans()`](#getthresholdbetweenduplicatesscans)
* [`isVINRestrictionsEnabled()`](#isvinrestrictionsenabled)
* [`getBarkoderResolution()`](#getbarkoderresolution)
* [`isDatamatrixDpmModeEnabled()`](#isdatamatrixdpmmodeenabled)
* [`isQrDpmModeEnabled()`](#isqrdpmmodeenabled)
* [`isQrMicroDpmModeEnabled()`](#isqrmicrodpmmodeenabled)
* [`isIdDocumentMasterChecksumEnabled()`](#isiddocumentmasterchecksumenabled)
* [`getScanningIndicatorColorHex()`](#getscanningindicatorcolorhex)
* [`getScanningIndicatorWidth()`](#getscanningindicatorwidth)
* [`getScanningIndicatorAnimation()`](#getscanningindicatoranimation)
* [`isScanningIndicatorAlwaysVisible()`](#isscanningindicatoralwaysvisible)
* [`getShowDuplicatesLocations()`](#getshowduplicateslocations)
* [`getARMode()`](#getarmode)
* [`getARResultDisappearanceDelayMs()`](#getarresultdisappearancedelayms)
* [`getARLocationTransitionSpeed()`](#getarlocationtransitionspeed)
* [`getAROverlayRefresh()`](#getaroverlayrefresh)
* [`getARSelectedLocationColor()`](#getarselectedlocationcolor)
* [`getARNonSelectedLocationColor()`](#getarnonselectedlocationcolor)
* [`getARSelectedLocationLineWidth()`](#getarselectedlocationlinewidth)
* [`getARNonSelectedLocationLineWidth()`](#getarnonselectedlocationlinewidth)
* [`getARLocationType()`](#getarlocationtype)
* [`isARDoubleTapToFreezeEnabled()`](#isardoubletaptofreezeenabled)
* [`getARHeaderHeight()`](#getarheaderheight)
* [`getARHeaderShowMode()`](#getarheadershowmode)
* [`getARHeaderMaxTextHeight()`](#getarheadermaxtextheight)
* [`getARHeaderMinTextHeight()`](#getarheadermintextheight)
* [`getARHeaderTextColorSelected()`](#getarheadertextcolorselected)
* [`getARHeaderTextColorNonSelected()`](#getarheadertextcolornonselected)
* [`getARHeaderHorizontalTextMargin()`](#getarheaderhorizontaltextmargin)
* [`getARHeaderVerticalTextMargin()`](#getarheaderverticaltextmargin)
* [`getARHeaderTextFormat()`](#getarheadertextformat)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: { width: number; height: number; x: number; y: number; }) => Promise<any>
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code>{ width: number; height: number; x: number; y: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### registerWithLicenseKey(...)

```typescript
registerWithLicenseKey(options: { licenseKey: string; }) => Promise<any>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ licenseKey: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setZoomFactor(...)

```typescript
setZoomFactor(options: { value: number; }) => Promise<any>
```

Sets the zoom factor for the device's camera, adjusting the level of zoom during barcode scanning

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setFlashEnabled(...)

```typescript
setFlashEnabled(options: { enabled: boolean; }) => Promise<any>
```

Enables or disables the device's flash (torch) for illumination during barcode scanning

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### startCamera()

```typescript
startCamera() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### startScanning()

```typescript
startScanning() => Promise<any>
```

Initiates the barcode scanning process, allowing the application to detect and decode barcodes from the device's camera feed

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### stopScanning()

```typescript
stopScanning() => Promise<any>
```

Halts the barcode scanning process, stopping the camera from capturing and processing barcode information

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### pauseScanning()

```typescript
pauseScanning() => Promise<any>
```

Temporarily suspends the barcode scanning process, pausing the camera feed without completely stopping the scanning session

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### freezeScanning()

```typescript
freezeScanning() => Promise<any>
```

Freezes the current AR scanning session by capturing a still image from the camera feed.
Use only when AR mode is enabled to temporarily freeze the view while keeping overlays visible.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### unfreezeScanning()

```typescript
unfreezeScanning() => Promise<any>
```

Unfreezes the AR scanning session by removing the still image and reactivating the camera and overlays.
Use only when AR mode is enabled to restore the live AR view and continue scanning.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### scanImage(...)

```typescript
scanImage(options: { base64: string; }) => Promise<any>
```

Scan barcodes from base64 string image

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ base64: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setLocationLineColor(...)

```typescript
setLocationLineColor(options: { value: string; }) => Promise<any>
```

Sets the color of the lines used to indicate the location of detected barcodes on the camera feed

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setLocationLineWidth(...)

```typescript
setLocationLineWidth(options: { value: number; }) => Promise<any>
```

Sets the width of the lines indicating the location of detected barcodes on the camera feed

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setRoiLineColor(...)

```typescript
setRoiLineColor(options: { value: string; }) => Promise<any>
```

Sets the color of the lines outlining the Region of Interest (ROI) for barcode scanning on the camera feed

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setRoiLineWidth(...)

```typescript
setRoiLineWidth(options: { value: number; }) => Promise<any>
```

Sets the width of the lines outlining the Region of Interest (ROI) for barcode scanning on the camera feed

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setRoiOverlayBackgroundColor(...)

```typescript
setRoiOverlayBackgroundColor(options: { value: string; }) => Promise<any>
```

Sets the background color of the overlay within the Region of Interest (ROI) for barcode scanning on the camera feed

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setCloseSessionOnResultEnabled(...)

```typescript
setCloseSessionOnResultEnabled(options: { enabled: boolean; }) => Promise<any>
```

Enables or disables the automatic closing of the scanning session upon detecting a barcode result

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setImageResultEnabled(...)

```typescript
setImageResultEnabled(options: { enabled: boolean; }) => Promise<any>
```

Enables or disables the capturing and processing of image data when a barcode is successfully detected

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setLocationInImageResultEnabled(...)

```typescript
setLocationInImageResultEnabled(options: { enabled: boolean; }) => Promise<any>
```

Enables or disables the inclusion of barcode location information within the image data result

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setRegionOfInterest(...)

```typescript
setRegionOfInterest(options: { left: number; top: number; width: number; height: number; }) => Promise<any>
```

Defines the Region of Interest (ROI) on the camera preview for barcode scanning, specifying an area where the application focuses on detecting barcodes

| Param         | Type                                                                       |
| ------------- | -------------------------------------------------------------------------- |
| **`options`** | <code>{ left: number; top: number; width: number; height: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setThreadsLimit(...)

```typescript
setThreadsLimit(options: { value: number; }) => Promise<any>
```

Sets the threads limit

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setLocationInPreviewEnabled(...)

```typescript
setLocationInPreviewEnabled(options: { enabled: boolean; }) => Promise<any>
```

Enables or disables the display of barcode location information on the camera preview

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setPinchToZoomEnabled(...)

```typescript
setPinchToZoomEnabled(options: { enabled: boolean; }) => Promise<any>
```

Enables or disables the pinch-to-zoom feature for adjusting the zoom level during barcode scanning

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setRegionOfInterestVisible(...)

```typescript
setRegionOfInterestVisible(options: { value: boolean; }) => Promise<any>
```

Sets the visibility of the Region of Interest (ROI) on the camera preview

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ value: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setBarkoderResolution(...)

```typescript
setBarkoderResolution(options: { value: BarkoderResolution; }) => Promise<any>
```

Sets the resolution for barcode scanning

| Param         | Type                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| **`options`** | <code>{ value: <a href="#barkoderresolution">BarkoderResolution</a>; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setBeepOnSuccessEnabled(...)

```typescript
setBeepOnSuccessEnabled(options: { enabled: boolean; }) => Promise<any>
```

Enables or disables the audible beep sound upon successfully decoding a barcode

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setVibrateOnSuccessEnabled(...)

```typescript
setVibrateOnSuccessEnabled(options: { enabled: boolean; }) => Promise<any>
```

Enables or disables the device vibration upon successfully decoding a barcode.

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### showLogMessages(...)

```typescript
showLogMessages(options: { enabled: boolean; }) => Promise<any>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setBarcodeTypeLengthRange(...)

```typescript
setBarcodeTypeLengthRange(options: { type: BarcodeType; min: number; max: number; }) => Promise<any>
```

Sets the length range for the specified barcode type

| Param         | Type                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------- |
| **`options`** | <code>{ type: <a href="#barcodetype">BarcodeType</a>; min: number; max: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setEncodingCharacterSet(...)

```typescript
setEncodingCharacterSet(options: { value: string; }) => Promise<any>
```

Sets the encoding character set for barcode scanning

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setDecodingSpeed(...)

```typescript
setDecodingSpeed(options: { value: DecodingSpeed; }) => Promise<any>
```

Sets the decoding speed for barcode scanning

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code>{ value: <a href="#decodingspeed">DecodingSpeed</a>; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setFormattingType(...)

```typescript
setFormattingType(options: { value: FormattingType; }) => Promise<any>
```

Sets the formatting type for barcode scanning

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code>{ value: <a href="#formattingtype">FormattingType</a>; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setCode11ChecksumType(...)

```typescript
setCode11ChecksumType(options: { value: number; }) => Promise<any>
```

Sets the Code11 checksum type

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setMsiChecksumType(...)

```typescript
setMsiChecksumType(options: { value: number; }) => Promise<any>
```

Sets the MSI checksum type

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setCode39ChecksumType(...)

```typescript
setCode39ChecksumType(options: { value: number; }) => Promise<any>
```

Sets the Code39 checksum type

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setBarcodeTypeEnabled(...)

```typescript
setBarcodeTypeEnabled(options: { type: BarcodeType; enabled: boolean; }) => Promise<any>
```

Sets whether a specific barcode type is enabled

| Param         | Type                                                                             |
| ------------- | -------------------------------------------------------------------------------- |
| **`options`** | <code>{ type: <a href="#barcodetype">BarcodeType</a>; enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setMulticodeCachingEnabled(...)

```typescript
setMulticodeCachingEnabled(options: { enabled: boolean; }) => Promise<any>
```

Sets whether multi-code caching is enabled

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setMulticodeCachingDuration(...)

```typescript
setMulticodeCachingDuration(options: { value: number; }) => Promise<any>
```

Sets the caching duration (in milliseconds) for multi-code results

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setMaximumResultsCount(...)

```typescript
setMaximumResultsCount(options: { value: number; }) => Promise<any>
```

Sets the maximum number of results to be returned from barcode scanning

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setBarcodeThumbnailOnResultEnabled(...)

```typescript
setBarcodeThumbnailOnResultEnabled(options: { enabled: boolean; }) => Promise<any>
```

A boolean indicating whether to enable barcode thumbnail on result.

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setThresholdBetweenDuplicatesScans(...)

```typescript
setThresholdBetweenDuplicatesScans(options: { value: number; }) => Promise<any>
```

Sets the threshold between duplicate scans

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setUpcEanDeblurEnabled(...)

```typescript
setUpcEanDeblurEnabled(options: { enabled: boolean; }) => Promise<any>
```

Sets whether the deblurring feature for UPC/EAN barcodes is enabled

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setMisshaped1DEnabled(...)

```typescript
setMisshaped1DEnabled(options: { enabled: boolean; }) => Promise<any>
```

Sets whether the detection of misshaped 1D barcodes is enabled

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setEnableVINRestrictions(...)

```typescript
setEnableVINRestrictions(options: { value: boolean; }) => Promise<any>
```

Sets whether Vehicle Identification Number (VIN) restrictions are enabled

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ value: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setDatamatrixDpmModeEnabled(...)

```typescript
setDatamatrixDpmModeEnabled(options: { enabled: boolean; }) => Promise<any>
```

Sets whether the Direct Part Marking (DPM) mode for Datamatrix barcodes is enabled.

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setQrDpmModeEnabled(...)

```typescript
setQrDpmModeEnabled(options: { enabled: boolean; }) => Promise<any>
```

Sets whether the Direct Part Marking (DPM) mode for QR barcodes is enabled.

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setQrMicroDpmModeEnabled(...)

```typescript
setQrMicroDpmModeEnabled(options: { enabled: boolean; }) => Promise<any>
```

Sets whether the Direct Part Marking (DPM) mode for QR Micro barcodes is enabled.

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### configureBarkoder(...)

```typescript
configureBarkoder(options: { barkoderConfig: BarkoderConfig; }) => Promise<any>
```

Configures the Barkoder functionality based on the provided configuration

| Param         | Type                                             |
| ------------- | ------------------------------------------------ |
| **`options`** | <code>{ barkoderConfig: BarkoderConfig; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setIdDocumentMasterChecksumEnabled(...)

```typescript
setIdDocumentMasterChecksumEnabled(options: { enabled: boolean; }) => Promise<any>
```

Sets whether Master checksum should be requiered when scanning ID Documents

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setUPCEexpandToUPCA(...)

```typescript
setUPCEexpandToUPCA(options: { value: boolean; }) => Promise<any>
```

Sets whether the UPC-E barcodes should be expanded to UPC-A format

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ value: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setUPCE1expandToUPCA(...)

```typescript
setUPCE1expandToUPCA(options: { value: boolean; }) => Promise<any>
```

Sets whether the UPC-E1 barcodes should be expanded to UPC-A format

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ value: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setCustomOption(...)

```typescript
setCustomOption(options: { option: string; value: number; }) => Promise<any>
```

Sets a custom option with a string option and integer value

| Param         | Type                                            |
| ------------- | ----------------------------------------------- |
| **`options`** | <code>{ option: string; value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setScanningIndicatorColor(...)

```typescript
setScanningIndicatorColor(options: { value: string; }) => Promise<any>
```

Sets the color of the lines outlining the scanning indicator for barcode scanning on the camera feed

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setScanningIndicatorWidth(...)

```typescript
setScanningIndicatorWidth(options: { value: number; }) => Promise<any>
```

Sets the width of the scanning indicator for barcode scanning on the camera feed

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setScanningIndicatorAnimation(...)

```typescript
setScanningIndicatorAnimation(options: { value: number; }) => Promise<any>
```

Sets the animation of the scanning indicator for barcode scanning on the camera feed

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setScanningIndicatorAlwaysVisible(...)

```typescript
setScanningIndicatorAlwaysVisible(options: { value: boolean; }) => Promise<any>
```

Sets the scanning indicator to be always shown on the camera feed

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ value: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setDynamicExposure(...)

```typescript
setDynamicExposure(options: { value: number; }) => Promise<any>
```

Sets the camera's exposure dynamically based on the provided intensity, cycling through predefined compensation values

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setCentricFocusAndExposure(...)

```typescript
setCentricFocusAndExposure(options: { value: boolean; }) => Promise<any>
```

Set the camera to use the center of the viewfinder for focus and exposure

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ value: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setEnableComposite(...)

```typescript
setEnableComposite(options: { value: number; }) => Promise<any>
```

Sets wheter Composite Mode should be enabled when scanning

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setVideoStabilization(...)

```typescript
setVideoStabilization(options: { value: boolean; }) => Promise<any>
```

Enable or disable video stabilization for smoother video capture

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ value: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setCamera(...)

```typescript
setCamera(options: { value: BarkoderCameraPosition; }) => Promise<any>
```

Sets the camera to be used for scanning (back/front)

| Param         | Type                                                                                  |
| ------------- | ------------------------------------------------------------------------------------- |
| **`options`** | <code>{ value: <a href="#barkodercameraposition">BarkoderCameraPosition</a>; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setShowDuplicatesLocations(...)

```typescript
setShowDuplicatesLocations(options: { value: boolean; }) => Promise<any>
```

Enables or disables showing duplicate barcode locations on the preview overlay.

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ value: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARMode(...)

```typescript
setARMode(options: { value: BarkoderARMode; }) => Promise<any>
```

Sets the AR mode used for barcode scanning visualization (e.g., interactive, non-interactive, or off).

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code>{ value: <a href="#barkoderarmode">BarkoderARMode</a>; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARResultDisappearanceDelayMs(...)

```typescript
setARResultDisappearanceDelayMs(options: { value: number; }) => Promise<any>
```

Sets the delay (in milliseconds) after which a detected AR result is considered expired and removed.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARLocationTransitionSpeed(...)

```typescript
setARLocationTransitionSpeed(options: { value: number; }) => Promise<any>
```

Sets the speed at which barcode location overlays transition positions.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setAROverlayRefresh(...)

```typescript
setAROverlayRefresh(options: { value: BarkoderAROverlayRefresh; }) => Promise<any>
```

Sets the refresh mode for the AR overlay on the camera preview.

| Param         | Type                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------- |
| **`options`** | <code>{ value: <a href="#barkoderaroverlayrefresh">BarkoderAROverlayRefresh</a>; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARSelectedLocationColor(...)

```typescript
setARSelectedLocationColor(options: { value: string; }) => Promise<any>
```

Sets the color used for drawing the overlay around selected barcodes in AR mode.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARNonSelectedLocationColor(...)

```typescript
setARNonSelectedLocationColor(options: { value: string; }) => Promise<any>
```

Sets the color used for drawing the overlay around non-selected barcodes in AR mode.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARSelectedLocationLineWidth(...)

```typescript
setARSelectedLocationLineWidth(options: { value: number; }) => Promise<any>
```

Sets the line width of the overlay for selected barcodes in AR mode.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARNonSelectedLocationLineWidth(...)

```typescript
setARNonSelectedLocationLineWidth(options: { value: number; }) => Promise<any>
```

Sets the line width of the overlay for non-selected barcodes in AR mode.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARLocationType(...)

```typescript
setARLocationType(options: { value: BarkoderARLocationType; }) => Promise<any>
```

Sets the style of location overlays drawn around detected barcodes (tight, bounding box, or none).

| Param         | Type                                                                                  |
| ------------- | ------------------------------------------------------------------------------------- |
| **`options`** | <code>{ value: <a href="#barkoderarlocationtype">BarkoderARLocationType</a>; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARDoubleTapToFreezeEnabled(...)

```typescript
setARDoubleTapToFreezeEnabled(options: { enabled: boolean; }) => Promise<any>
```

Enables or disables the ability to freeze/unfreeze scanning via a double-tap gesture in AR mode.

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARHeaderHeight(...)

```typescript
setARHeaderHeight(options: { value: number; }) => Promise<any>
```

Sets the height of the header text label shown above the barcode in AR mode.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARHeaderShowMode(...)

```typescript
setARHeaderShowMode(options: { value: BarkoderARHeaderShowMode; }) => Promise<any>
```

Sets the condition under which the header text is shown above the barcode (always, on selected, or never).

| Param         | Type                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------- |
| **`options`** | <code>{ value: <a href="#barkoderarheadershowmode">BarkoderARHeaderShowMode</a>; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARHeaderMaxTextHeight(...)

```typescript
setARHeaderMaxTextHeight(options: { value: number; }) => Promise<any>
```

Sets the maximum text height used for rendering AR header text above barcodes.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARHeaderMinTextHeight(...)

```typescript
setARHeaderMinTextHeight(options: { value: number; }) => Promise<any>
```

Sets the minimum text height used for rendering AR header text above barcodes.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARHeaderTextColorSelected(...)

```typescript
setARHeaderTextColorSelected(options: { value: string; }) => Promise<any>
```

Sets the text color of the header when the barcode is in a selected state.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARHeaderTextColorNonSelected(...)

```typescript
setARHeaderTextColorNonSelected(options: { value: string; }) => Promise<any>
```

Sets the text color of the header when the barcode is not selected.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARHeaderHorizontalTextMargin(...)

```typescript
setARHeaderHorizontalTextMargin(options: { value: number; }) => Promise<any>
```

Sets the horizontal margin applied to the header text in AR mode, creating equal padding on both sides.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARHeaderVerticalTextMargin(...)

```typescript
setARHeaderVerticalTextMargin(options: { value: number; }) => Promise<any>
```

Sets the vertical margin applied to the header text in AR mode, creating equal padding on both sides.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setARHeaderTextFormat(...)

```typescript
setARHeaderTextFormat(options: { value: string; }) => Promise<any>
```

Sets the format string for the AR header text above each barcode, using placeholders like [barcode_text], [barcode_type].

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isFlashAvailable()

```typescript
isFlashAvailable() => Promise<any>
```

Checks whether the device has a built-in flash (torch) that can be used for illumination during barcode scanning

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isCloseSessionOnResultEnabled()

```typescript
isCloseSessionOnResultEnabled() => Promise<any>
```

Enables or disables the automatic closing of the scanning session upon detecting a barcode result

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isImageResultEnabled()

```typescript
isImageResultEnabled() => Promise<any>
```

Enables or disables the capturing and processing of image data when a barcode is successfully detected

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isLocationInImageResultEnabled()

```typescript
isLocationInImageResultEnabled() => Promise<any>
```

Enables or disables the inclusion of barcode location information within the image data result

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isLocationInPreviewEnabled()

```typescript
isLocationInPreviewEnabled() => Promise<any>
```

Checks if location in preview is enabled

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isPinchToZoomEnabled()

```typescript
isPinchToZoomEnabled() => Promise<any>
```

Checks if pinch to zoom is enabled

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isRegionOfInterestVisible()

```typescript
isRegionOfInterestVisible() => Promise<any>
```

Checks if the region of interest (ROI) is visible

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isBeepOnSuccessEnabled()

```typescript
isBeepOnSuccessEnabled() => Promise<any>
```

Retrieves the value indicating whether a beep sound is played on successful barcode scanning

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isVibrateOnSuccessEnabled()

```typescript
isVibrateOnSuccessEnabled() => Promise<any>
```

Retrieves the value indicating whether vibration is enabled on successful barcode scanning

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getVersion()

```typescript
getVersion() => Promise<any>
```

Retrieves the version of the Barkoder library

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getLocationLineColorHex()

```typescript
getLocationLineColorHex() => Promise<any>
```

Retrieves the hexadecimal color code representing the line color used to indicate the location of detected barcodes

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getRoiLineColorHex()

```typescript
getRoiLineColorHex() => Promise<any>
```

Retrieves the hexadecimal color code representing the line color of the Region of Interest (ROI) on the camera preview

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getRoiOverlayBackgroundColorHex()

```typescript
getRoiOverlayBackgroundColorHex() => Promise<any>
```

Retrieves the hexadecimal color code representing the background color of the overlay within the Region of Interest (ROI) on the camera preview

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getMaxZoomFactor()

```typescript
getMaxZoomFactor() => Promise<any>
```

Retrieves the maximum available zoom factor for the device's camera

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getLocationLineWidth()

```typescript
getLocationLineWidth() => Promise<any>
```

Retrieves the current width setting for the lines indicating the location of detected barcodes on the camera feed

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getRoiLineWidth()

```typescript
getRoiLineWidth() => Promise<any>
```

Retrieves the current width setting for the lines outlining the Region of Interest (ROI) on the camera preview

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getRegionOfInterest()

```typescript
getRegionOfInterest() => Promise<any>
```

Retrieves the region of interest (ROI)

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getBarcodeTypeLengthRange(...)

```typescript
getBarcodeTypeLengthRange(options: { type: number; }) => Promise<any>
```

Retrieves the length range of a specific barcode type

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ type: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getMsiChecksumType()

```typescript
getMsiChecksumType() => Promise<any>
```

Retrieves the MSI checksum type

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getCode39ChecksumType()

```typescript
getCode39ChecksumType() => Promise<any>
```

Retrieves the checksum type for Code 39 barcodes

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getCode11ChecksumType()

```typescript
getCode11ChecksumType() => Promise<any>
```

Retrieves the Code11 checksum type

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getEncodingCharacterSet()

```typescript
getEncodingCharacterSet() => Promise<any>
```

Retrieves the character set used for encoding barcode data

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getDecodingSpeed()

```typescript
getDecodingSpeed() => Promise<any>
```

Retrieves the current decoding speed setting for barcode scanning

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getFormattingType()

```typescript
getFormattingType() => Promise<any>
```

Retrieves the formatting type used for presenting decoded barcode data.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getThreadsLimit()

```typescript
getThreadsLimit() => Promise<any>
```

Retrieves the threads limit

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getMaximumResultsCount()

```typescript
getMaximumResultsCount() => Promise<any>
```

Retrieves the maximum number of results to be returned from barcode scanning at once

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isBarcodeTypeEnabled(...)

```typescript
isBarcodeTypeEnabled(options: { type: number; }) => Promise<any>
```

Checks if a specific barcode type is enabled

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ type: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getMulticodeCachingEnabled()

```typescript
getMulticodeCachingEnabled() => Promise<any>
```

Retrieves whether multi-code caching is enabled

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getMulticodeCachingDuration()

```typescript
getMulticodeCachingDuration() => Promise<any>
```

Retrieves the caching duration (in milliseconds) for multi-code results

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isUpcEanDeblurEnabled()

```typescript
isUpcEanDeblurEnabled() => Promise<any>
```

Retrieves the value indicating whether deblurring is enabled for UPC/EAN barcodes

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isMisshaped1DEnabled()

```typescript
isMisshaped1DEnabled() => Promise<any>
```

Checks if the detection of misshaped 1D barcodes is enabled

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isBarcodeThumbnailOnResultEnabled()

```typescript
isBarcodeThumbnailOnResultEnabled() => Promise<any>
```

Retrieve whether to enable barcode thumbnail on result

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getThresholdBetweenDuplicatesScans()

```typescript
getThresholdBetweenDuplicatesScans() => Promise<any>
```

Retrieves the threshold between duplicate scans

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isVINRestrictionsEnabled()

```typescript
isVINRestrictionsEnabled() => Promise<any>
```

Checks if VIN restrictions are enabled

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getBarkoderResolution()

```typescript
getBarkoderResolution() => Promise<any>
```

Retrieves the resolution for barcode scanning

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isDatamatrixDpmModeEnabled()

```typescript
isDatamatrixDpmModeEnabled() => Promise<any>
```

Retrieves whether Direct Part Marking (DPM) mode for Datamatrix barcodes is enabled

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isQrDpmModeEnabled()

```typescript
isQrDpmModeEnabled() => Promise<any>
```

Retrieves whether Direct Part Marking (DPM) mode for QR barcodes is enabled

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isQrMicroDpmModeEnabled()

```typescript
isQrMicroDpmModeEnabled() => Promise<any>
```

Retrieves whether Direct Part Marking (DPM) mode for QR Micro barcodes is enabled

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isIdDocumentMasterChecksumEnabled()

```typescript
isIdDocumentMasterChecksumEnabled() => Promise<any>
```

Retrieves whether Master checksum is enabled when scanning ID Documents

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getScanningIndicatorColorHex()

```typescript
getScanningIndicatorColorHex() => Promise<any>
```

Retrieves the hexadecimal color code representing the line color of the scanning indicator on the camera preview

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getScanningIndicatorWidth()

```typescript
getScanningIndicatorWidth() => Promise<any>
```

Retrieves the current width setting for the scanning indicator on the camera preview

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getScanningIndicatorAnimation()

```typescript
getScanningIndicatorAnimation() => Promise<any>
```

Retrieves the current animation setting for the scanning indicator on the camera preview

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isScanningIndicatorAlwaysVisible()

```typescript
isScanningIndicatorAlwaysVisible() => Promise<any>
```

Retrieves if the scanning indicator is set to be always visible on the camera preview

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getShowDuplicatesLocations()

```typescript
getShowDuplicatesLocations() => Promise<any>
```

Retrieves whether showing duplicate barcode locations is enabled.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARMode()

```typescript
getARMode() => Promise<any>
```

Retrieves the current AR mode used for barcode scanning.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARResultDisappearanceDelayMs()

```typescript
getARResultDisappearanceDelayMs() => Promise<any>
```

Retrieves the delay (in milliseconds) after which AR results disappear once detected.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARLocationTransitionSpeed()

```typescript
getARLocationTransitionSpeed() => Promise<any>
```

Retrieves the transition speed for moving AR barcode locations on the screen.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getAROverlayRefresh()

```typescript
getAROverlayRefresh() => Promise<any>
```

Retrieves the current AR overlay refresh mode.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARSelectedLocationColor()

```typescript
getARSelectedLocationColor() => Promise<any>
```

Retrieves the color used to highlight selected barcode locations in AR mode.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARNonSelectedLocationColor()

```typescript
getARNonSelectedLocationColor() => Promise<any>
```

Retrieves the color used to highlight non-selected barcode locations in AR mode.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARSelectedLocationLineWidth()

```typescript
getARSelectedLocationLineWidth() => Promise<any>
```

Retrieves the line width used for selected barcode locations in AR mode.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARNonSelectedLocationLineWidth()

```typescript
getARNonSelectedLocationLineWidth() => Promise<any>
```

Retrieves the line width used for non-selected barcode locations in AR mode.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARLocationType()

```typescript
getARLocationType() => Promise<any>
```

Retrieves the location type style used for drawing AR overlays (tight, bounding box, or none).

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### isARDoubleTapToFreezeEnabled()

```typescript
isARDoubleTapToFreezeEnabled() => Promise<any>
```

Checks if the double-tap-to-freeze feature is enabled in AR mode.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARHeaderHeight()

```typescript
getARHeaderHeight() => Promise<any>
```

Retrieves the height of the header text shown above barcodes in AR mode.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARHeaderShowMode()

```typescript
getARHeaderShowMode() => Promise<any>
```

Retrieves the display mode for AR header text (always, on selected, or never).

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARHeaderMaxTextHeight()

```typescript
getARHeaderMaxTextHeight() => Promise<any>
```

Retrieves the maximum height for AR header text.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARHeaderMinTextHeight()

```typescript
getARHeaderMinTextHeight() => Promise<any>
```

Retrieves the minimum height for AR header text.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARHeaderTextColorSelected()

```typescript
getARHeaderTextColorSelected() => Promise<any>
```

Retrieves the color used for header text when a barcode is selected in AR mode.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARHeaderTextColorNonSelected()

```typescript
getARHeaderTextColorNonSelected() => Promise<any>
```

Retrieves the color used for header text when a barcode is not selected in AR mode.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARHeaderHorizontalTextMargin()

```typescript
getARHeaderHorizontalTextMargin() => Promise<any>
```

Retrieves the horizontal margin applied to the AR header text.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARHeaderVerticalTextMargin()

```typescript
getARHeaderVerticalTextMargin() => Promise<any>
```

Retrieves the vertical margin applied to the AR header text.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getARHeaderTextFormat()

```typescript
getARHeaderTextFormat() => Promise<any>
```

Retrieves the format string used for rendering AR header text above barcodes.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### Enums


#### BarkoderResolution

| Members   |
| --------- |
| **`HD`**  |
| **`FHD`** |
| **`UHD`** |


#### BarcodeType

| Members               |
| --------------------- |
| **`aztec`**           |
| **`aztecCompact`**    |
| **`qr`**              |
| **`qrMicro`**         |
| **`code128`**         |
| **`code93`**          |
| **`code39`**          |
| **`codabar`**         |
| **`code11`**          |
| **`msi`**             |
| **`upcA`**            |
| **`upcE`**            |
| **`upcE1`**           |
| **`ean13`**           |
| **`ean8`**            |
| **`pdf417`**          |
| **`pdf417Micro`**     |
| **`datamatrix`**      |
| **`code25`**          |
| **`interleaved25`**   |
| **`itf14`**           |
| **`iata25`**          |
| **`matrix25`**        |
| **`datalogic25`**     |
| **`coop25`**          |
| **`code32`**          |
| **`telepen`**         |
| **`dotcode`**         |
| **`idDocument`**      |
| **`databar14`**       |
| **`databarLimited`**  |
| **`databarExpanded`** |
| **`postalIMB`**       |
| **`postnet`**         |
| **`planet`**          |
| **`australianPost`**  |
| **`royalMail`**       |
| **`kix`**             |
| **`japanesePost`**    |


#### DecodingSpeed

| Members        |
| -------------- |
| **`fast`**     |
| **`normal`**   |
| **`slow`**     |
| **`rigorous`** |


#### FormattingType

| Members         |
| --------------- |
| **`disabled`**  |
| **`automatic`** |
| **`gs1`**       |
| **`aamva`**     |
| **`sadl`**      |


#### BarkoderCameraPosition

| Members     |
| ----------- |
| **`BACK`**  |
| **`FRONT`** |


#### BarkoderARMode

| Members                   |
| ------------------------- |
| **`off`**                 |
| **`interactiveDisabled`** |
| **`interactiveEnabled`**  |
| **`nonInteractive`**      |


#### BarkoderAROverlayRefresh

| Members      |
| ------------ |
| **`smooth`** |
| **`normal`** |


#### BarkoderARLocationType

| Members           |
| ----------------- |
| **`none`**        |
| **`tight`**       |
| **`boundingBox`** |


#### BarkoderARHeaderShowMode

| Members          |
| ---------------- |
| **`never`**      |
| **`always`**     |
| **`onSelected`** |

</docgen-api>
