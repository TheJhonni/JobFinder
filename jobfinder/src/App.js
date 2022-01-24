import Home from "./components/Home";
import FilteredJobsByCompany from "./components/FilteredJobsByCompany";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="bg-gray-400 py-5 text-white">Job Finder App</h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:company" element={<FilteredJobsByCompany />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
