import './App.css';
import faker from  'faker'; 
import ChartLibrary from 'chart.js/auto';

import BarChart from '../BarChart/BarChart';
import Table from '../Table/Table';


function App() {
  
  return (
    <div className="container">
      <div className="header">
          <h1 className="title">The Anything Goes Project</h1>
          <h3 className="description">A project space for collaboration and practicing skill gaps.</h3>
          <br />
      </div>
      <BarChart />
      <Table />

    </div>
  );
}

export default App;
