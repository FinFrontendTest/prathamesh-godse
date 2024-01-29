import React from 'react';
import styles from '../CSS/Table.module.css';

const Table = ({ data, editRow, deleteRow }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Weekday</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.contact}</td>
            <td>{row.email}</td>
            <td>{row.weekday ? 'Yes' : 'No'}</td>
            <td>{row.gender}</td>
            <td>{row.dob}</td>
            <td>
              <button onClick={() => editRow(index)}>Edit</button>
              <button onClick={() => deleteRow(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
