import React, { useState } from 'react';
import styles from '../CSS/Form.module.css';

const Form = ({ addRow }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    weekday: false,
    gender: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRow(formData);
    setFormData({
      name: '',
      email: '',
      contact: '',
      weekday: false,
      gender: '',
      dob: '',
    });
  };

  return (

    

    <form className={styles.form} onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Contact:</label>
      <input
        type="tel"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        required
      />

      <label>
        Weekday (Monday to Friday):
        <input
          type="checkbox"
          name="weekday"
          checked={formData.weekday}
          onChange={handleChange}
        />
      </label>


      <div>
        <label>
          Gender:
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />{' '}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />{' '}
          Female
        </label>
        </div>

        

      <label>Date of Birth:</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
      />


      <button type="submit">Submit</button>

    </form>

    
  );
};

export default Form;
