import React, { useRef } from "react";
import styles from "../styles/AddUserForm.module.css";

export const AddUserForms = () => {
  const formData = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.current);
  };

  return (
    <>
      <h2>Add new user</h2>
      <form ref={formData} onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name
          <input id="name" type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" type="text" name="email" />
        </label>
        <label htmlFor="organisation">
          Organisation
          <input id="organisation" type="text" name="organisation" />
        </label>
        <button type="submit"> Add </button>
      </form>
    </>
  );
};
