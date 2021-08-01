import "./App.css";
import faker from "faker";
import ChartLibrary from "chart.js/auto";

import BarChart from "../BarChart/BarChart";
import Table from "../Table/Table";
import RadarChart from "../RadarChart/RadarChart";
import Nav from "../NavBar/Nav";

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="header">
          <h1 className="title">The Anything Goes Project</h1>
          <h3 className="description">
            A project space for collaboration and practicing skill gaps.
          </h3>
          <br />
        </div>
        <BarChart />
        <RadarChart />
        <Table />
      </div>
    </div>
  );
}

export default App;
