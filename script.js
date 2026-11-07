const ADOBE_KEY="f600162ba7ba4d799ecec2bca085d48c";


document.addEventListener("adobe_dc_view_sdk.ready", function () {

    console.log("Adobe is ready");

    let adobeDCView = new AdobeDC.View({
        clientId: ADOBE_KEY,
        divId: "mypdf"
    });

    adobeDCView.previewFile(
        {
            content: {
                location: {
                    url: "https://brain131.github.io/E-library/pdf/_OceanofPDF.com_The_DevOps_Handbook_-_Gene_Kim.pdf"
                }
            },

            metaData: {
                fileName: "pdf/_OceanofPDF.com_The_DevOps_Handbook_-_Gene_Kim.pdf"
            }
        },

        {
            embedMode: "FULL_WINDOW"
        }
    );

});

