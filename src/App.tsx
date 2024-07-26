import "./App.css";
import PdfViewDialog from "./components/PdfViewDialog";
import PrintUtils from "./components/PrintUtils";

function App() {
  return (
    <div className="App">
      <PdfViewDialog />
      <PrintUtils />
    </div>
  );
}

export default App;
