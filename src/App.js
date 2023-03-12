import "./App.css";
import { Body } from "./components/Layout/Body/Body";
import { Header } from "./components/Layout/Header/Header";
import { Validation } from "./components/Pages/Validation/Validation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Results } from "./components/Pages/Results/Results";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Validation />} />
          <Route path="/card" element={<Body />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
