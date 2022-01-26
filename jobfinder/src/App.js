import Home from "./components/Home";
import FilteredJobsByCompany from "./components/FilteredJobsByCompany";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SavedJobsPage from "./components/SavedJobsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="bg-gray-400 text-xl py-5 text-white ">Job Finder App</h1>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/:company" element={<FilteredJobsByCompany />} />
          <Route path="/favourite" element={<SavedJobsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
