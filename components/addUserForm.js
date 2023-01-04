import { useState } from "react";
import styles from "../styles/AddUserForm.module.css";
import { addNewUser } from "../lib/api";

const initValues = {
  name: "",
  email: "",
  organisation: "",
};

const initState = { values: initValues };

export const AddUserForms = () => {
  const [state, setState] = useState(initState);
  const { values } = state;

  const handleChange = ({ target }) => {
    setState((prev) => {
      return {
        ...prev,
        values: {
          ...prev.values,
          [target.name]: target.value,
        },
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewUser(values);
      setState(initState);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h2>Add new user</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name
          <input
            value={values.name}
            onChange={handleChange}
            id="name"
            type="text"
            name="name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="text"
            name="email"
          />
        </label>
        <label htmlFor="organisation">
          Organisation
          <input
            onChange={handleChange}
            id="organisation"
            type="text"
            name="organisation"
            value={values.organisation}
          />
        </label>
        <button type="submit"> Add </button>
      </form>
    </>
  );
};
