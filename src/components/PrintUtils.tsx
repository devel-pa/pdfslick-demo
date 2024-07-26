import '@pdfslick/react/dist/pdf_viewer.css';

const PrintUtils = () => {
  return (
    <div>
      <dialog id="printServiceDialog" style={{ minWidth: '200px' }}>
        <div className="row">
          <span data-l10n-id="print_progress_message">
            Preparing document for printing…
          </span>
        </div>
        <div className="row">
          <progress value="0" max="100"></progress>
          <span
            data-l10n-id="print_progress_percent"
            data-l10n-args='{ "progress": 0 }'
            className="relative-progress"
          >
            0%
          </span>
        </div>
        <div className="buttonRow">
          <button id="printCancel" className="dialogButton">
            <span data-l10n-id="print_progress_close">Cancel</span>
          </button>
        </div>
      </dialog>
      <div id="printContainer" />
      <iframe
        id="printDocumentIframe"
        title="printDocumentIframe"
        style={{ position: 'absolute', top: '-10000px' }}
      ></iframe>
    </div>
  );
};

export default PrintUtils;
