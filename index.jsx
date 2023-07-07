import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

const students = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
];

const table = (
  <table>
    <thead>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      {students.map(student => (
        <tr>
          <td>{student.company}</td>
          <td>{student.contact}</td>
          <td>{student.country}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const root = document.getElementById('root');
ReactDOM.render(table, root);
