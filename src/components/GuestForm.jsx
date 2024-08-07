import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/GuestForm.module.css';

const GuestForm = ({ addGuest }) => {
  const formik = useFormik({
    initialValues: {
      guests: [{ name: '', age: '' }],
    },
    validationSchema: Yup.object({
      guests: Yup.array().of(
        Yup.object({
          name: Yup.string().required('Required'),
          age: Yup.number().required('Required').min(0, 'Age must be a positive number'),
        })
      ),
    }),
    onSubmit: (values) => {
      values.guests.forEach((guest) => addGuest(guest));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      {formik.values.guests.map((guest, index) => (
        <div key={index}>
          <input
            type="text"
            name={`guests[${index}].name`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={guest.name}
            placeholder="Guest Name"
          />
          <input
            type="number"
            name={`guests[${index}].age`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={guest.age}
            placeholder="Guest Age"
          />
          {formik.errors.guests && formik.touched.guests ? (
            <div>
              {formik.errors.guests[index]?.name && formik.touched.guests[index]?.name ? (
                <div>{formik.errors.guests[index].name}</div>
              ) : null}
              {formik.errors.guests[index]?.age && formik.touched.guests[index]?.age ? (
                <div>{formik.errors.guests[index].age}</div>
              ) : null}
            </div>
          ) : null}
        </div>
      ))}
      <button type="submit" className={styles.button}>Add Guests</button>
    </form>
  );
};

export default GuestForm;
