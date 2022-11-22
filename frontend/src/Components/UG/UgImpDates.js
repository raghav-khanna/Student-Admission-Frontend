import React from 'react';
import { Table } from 'react-bootstrap';
import "./UgImpDates.css";
import "bootstrap/dist/css/bootstrap.min.css";


const UgImpDates = ({ x, arr }) => {

  const card = [];
  arr.map((val) => {
    card.push(
      <tr>
        <td className="table-elemento">{val[0]}</td>
        <td className="table-elemento">{val[1]}</td>
      </tr>
    )
  });

  return (
    <section className="ug-imp-dates">
      <div className="ug-imp-dates-container">
        <h3 className="ug-imp-dates-h3">
          {x}
        </h3>
        <Table striped bordered>
          <thead>
            <tr className="checkers">
              <th className="event-head">Event</th>
              <th className="date-head">Dates</th>
            </tr>
          </thead>
          <tbody>
            {card}
          </tbody>
        </Table>
      </div>
    </section>
  )
}

export default UgImpDates;