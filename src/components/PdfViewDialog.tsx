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
    </div>
  );
};

export default PdfViewDialog;
