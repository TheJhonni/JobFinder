import Home from "./components/Home";
import "./App.css";

function App() {
  const fetchJobs = async () => {
    try {
      let resp = await fetch();
      //"https://strive-jobs-api.herokuapp.com/jobs?search=developer&limit=100"
      if (resp.ok) {
        let jobs = await resp.json();
        return jobs.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>CIAOOO</h1>
      <Home fetchJobs={fetchJobs} />
    </div>
  );
}

export default App;
