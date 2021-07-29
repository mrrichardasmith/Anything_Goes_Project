import './App.css';
import faker from  'faker'; 

import Chart from '../Chart/Chart';
import Table from '../Table/Table';


function App() {

  let name =  faker.name.findName();

  return (
    <div className="container">
      <div className="header">
          <h1 className="title">The Anything Goes Project</h1>
          <h3 className="description">A project space for collaboration and practicing skill gaps.</h3>
          <br />
          <p>This name was faked by faker.js: <strong>{name}</strong></p>
      </div>
      <Chart />
      <Table />

    </div>
  );
}

export default App;
