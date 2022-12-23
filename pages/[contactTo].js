import Head from "next/head";
import styles from "../styles/Contact.module.css";
import { useState, useEffect } from "react";
import { sendContactForm } from "../lib/api";
import { useRouter } from "next/router";
import users from "../users/users.json";

const initValues = {
  name: "",
  // email: "",
  subject: "",
  message: "",
  emailTo: "",
};

const initState = { values: initValues };

export default function ContactTo() {
  const [state, setState] = useState(initState);
  const router = useRouter();
  const { contactTo } = router.query;

  const { values, error } = state;
  console.log(values);

  useEffect(() => {
    users.map((user) => {
      if (contactTo === user.organisation) {
        setState((prev) => {
          return {
            ...prev,
            values: {
              ...prev.values,
              emailTo: user.emailTo,
            },
          };
        });
      }
    });
  }, [contactTo]);

  const hadleChange = ({ target }) => {
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
      await sendContactForm(values);
      setState(initState);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Head>
        <title>Nodemailer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Contact to {contactTo}</h1>
        {users.map((user) => {
          return contactTo === user.organisation && user.emailTo;
        })}
        {error && <h4> {error} </h4>}
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* <label htmlFor="emailTo" className={styles.label}>
            Choose email to:
            <select
              onChange={hadleChange}
              name="emailTo"
              id="emailTo">
              <option value="">--Choose email--</option>
              <option value="dimazayac@gmail.com">dimazayac@gmail.com</option>
              <option value="dmytro.zaichenko@capgemini.com">
                dmytro.zaichenko@capgemini.com
              </option>
            </select>
          </label> */}

          <label htmlFor="name" className={styles.label}>
            Name
            <input
              className={styles.input}
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={hadleChange}
            />
          </label>

          {/* <label htmlFor="name" className={styles.label}>
            Email
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={hadleChange}
            />
          </label> */}

          <label htmlFor="subject" className={styles.label}>
            Subject
            <input
              className={styles.input}
              id="subject"
              name="subject"
              type="text"
              value={values.subject}
              onChange={hadleChange}
            />
          </label>

          <label htmlFor="message" className={styles.label}>
            Message
            <textarea
              className={styles.input}
              id="message"
              name="message"
              type="text"
              cols={30}
              rows={5}
              value={values.message}
              onChange={hadleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}