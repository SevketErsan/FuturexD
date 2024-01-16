import "./App.css";
import ShowQuestion from "./components/Fragen/index";

function App() {
  return (
    <div
      id="question-container"
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <ShowQuestion />
    </div>
  );
}

export default App;
