import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';

const Actions = () => {
  const [rowData, setRowData] = useState([]);
  const [createFormOpen, setFormOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState(null);

  const addRow = (data) => {
    if (editingIndex !== null) {
      const updatedData = [...rowData];
      updatedData[editingIndex] = data;       // upadate here If editing, update the row
      setRowData(updatedData);
      setEditingIndex(null);
      setEditFormData(null);
    } else {
      setRowData([...rowData, data]);         // If we are not going editing, then add a new row
    }
  };

  const editRow = (index) => {
    if (window.confirm(`Are you sure you want to edit the row at index ${index + 1}?`)) {      //  alert msg popup
      setEditingIndex(index);       // Set the editing index to enable editing mode
      setEditFormData(rowData[index]);      // Sets the form data for editing
      setFormOpen(true);      // Open  form
    }
  };

  const deleteRow = (index) => {
    if (window.confirm(`Are you sure you want to delete the row at index ${index + 1}?`))     //  alert msg popup

    setRowData((prevData) => prevData.filter((_, i) => i !== index));    // dlt
  };

  return (
    <div>
      <Form
        addRow={addRow}
        isOpen={createFormOpen}
        setFormOpen={setFormOpen}
        editFormData={editFormData}
      />
      <Table
        data={rowData}
        editRow={editRow}
        deleteRow={deleteRow}
      />
    </div>
  );
};

export default Actions;
