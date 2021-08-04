import React, { useEffect } from "react";
import faker from "faker";
import "./Table.css";
import "../App/App.css"

export default function Tables() {
  useEffect(() => {
    console.log("From table component");
  }, []);

  return (
    <div className="Container">
      <table id="customers">
        <tr>
          <th>{faker.lorem.word()}</th>
          <th>{faker.lorem.word()}</th>
          <th>{faker.lorem.word()}</th>
        </tr>
        <tr>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
        </tr>
        <tr>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
        </tr>
        <tr>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
        </tr>
        <tr>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
        </tr>
        <tr>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
        </tr>
        <tr>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
        </tr>
        <tr>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
        </tr>
        <tr>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
        </tr>
        <tr>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
        </tr>
        <tr>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
          <td>{faker.lorem.word()}</td>
        </tr>
      </table>
    </div>
  );
}
