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

  const printHandler = () => {
    store.pdfSlick?.triggerPrinting();
  };

  useEffect(() => {
    window.onbeforeprint = (e) => {
      store.pdfSlick?.eventBus.dispatch("beforeprint", { source: window });
    };
    window.onafterprint = (e) => {
      store.pdfSlick?.eventBus.dispatch("afterprint", { source: window });
    };
    return () => {
      window.onbeforeprint = null;
      window.onafterprint = null;
    };
  }, [store.pdfSlick?.eventBus]);

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
    </div>
  );
};

export default PdfViewer;
