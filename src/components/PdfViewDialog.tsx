import { useState } from "react";
import PdfViewer from "./PdfViewer";

type Props = {};

const PdfViewDialog = (props: Props) => {
  const [uri, setUri] = useState<string>();

  const handleChange = (e: any) => {
    let t = e.target.files[0],
      s = URL.createObjectURL(t);
    setUri(s);
  };

  return (
    <div>
      <strong>
        disable `"storybook-addon-mock"` from `.storybook/main.ts` to have the
        pdf displayed
      </strong>
      <br />
      <br />
      <br />
      <div
        style={{
          height: "500px",
          width: "500px",
        }}
      >
        <input type="file" onChange={handleChange} />
        {uri && <PdfViewer {...{ pdfFilePath: uri }} />}
      </div>
      <dialog id="printServiceDialog" className="min-w-[200px]">
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
    </div>
  );
};

export default PdfViewDialog;
