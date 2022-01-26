import Home from "./components/Home";
import FilteredJobsByCompany from "./components/FilteredJobsByCompany";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SavedJobsPage from "./components/SavedJobsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">
          <h1 className="bg-gray-400 text-xl py-5 text-white ">
            Job Finder App
          </h1>
        </Link>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/:company" element={<FilteredJobsByCompany />} />
          <Route path="/favourite" element={<SavedJobsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
