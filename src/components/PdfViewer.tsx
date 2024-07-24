import "@pdfslick/react/dist/pdf_viewer.css";
import { usePDFSlick } from "@pdfslick/react";
import { useEffect } from "react";

type Props = {
  pdfFilePath: ArrayBuffer | string;
};

const PdfViewer = ({ pdfFilePath }: Props) => {
  const {
    viewerRef,
    usePDFSlickStore,
    PDFSlickViewer,
    isDocumentLoaded,
    error,
  } = usePDFSlick(pdfFilePath, {
    // singlePageViewer: true,
    scaleValue: "page-fit",
  });

  const store = usePDFSlickStore();

  useEffect(() => {
    console.log(
      viewerRef,
      usePDFSlickStore,
      PDFSlickViewer,
      isDocumentLoaded,
      error,
      store
    );
  }, [
    viewerRef,
    usePDFSlickStore,
    PDFSlickViewer,
    isDocumentLoaded,
    error,
    store,
  ]);

  const printHandler = () => {
    store.pdfSlick?.triggerPrinting();
  };

  return (
    <div className="pdfSlick">
      <button onClick={printHandler}>Print</button>
      <div
        style={{
          height: "500px",
          width: "500px",
          position: "relative",
        }}
      >
        <PDFSlickViewer {...{ viewerRef, usePDFSlickStore }} />
      </div>
      <div id="printContainer" />
    </div>
  );
};

export default PdfViewer;
