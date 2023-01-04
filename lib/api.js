import Router from "next/router";

export const sendContactForm = async (data) => {
  fetch("api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
};

export const addNewUser = async (data) => {
  fetch("http://localhost:8008/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to add new user");
    return res.json();
  });
};

export const deleteUser = async (id) => {
  fetch(`http://localhost:8008/users/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to delete a user");
      return res.json();
    })
    .then(() => {
      Router.reload();
    });
};
