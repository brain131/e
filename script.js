const ADOBE_KEY="f600162ba7ba4d799ecec2bca085d48c";


document.addEventListener("adobe_dc_view_sdk.ready", function () {

    let adobeDCView = new AdobeDC.View({
        clientId: ADOBE_KEY,
        divId: "mypdf"
    });

    adobeDCView.previewFile({
        content: {
            location: {
                url: "https://brain131.github.io/E-library/pdf/Brian-ObareCapstone%20Presentation%20Slides%20Template-1.pdf"
            }
        },

        metaData: {
            fileName: "Brian-ObareCapstone Presentation Slides Template-1.pdf"
        }
    });

});

