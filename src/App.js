import "./App.css";
import { Body } from "./components/Layout/Body/Body";
import { Header } from "./components/Layout/Header/Header";


function App() {
  return (
    <div className="md:bg-white">
      <Header />
      <Body />
    </div>
  );
}

export default App;

