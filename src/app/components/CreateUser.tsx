"use client";
import React from "react";

const CreateUser = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;

    const email: any = form.email.value;
    const name: any = form.name.value;

    const data: any = {
      email,
      name,
    };

    if (data) {
      fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    // console.log(email, name);
  };

  return (
    <div>
      <h2 className="text-5xl text-center mt-20 font-bold">
        Create User
      </h2>
      <div className="text-center my-5">
        <form onSubmit={handleSubmit}>
          <input
            className="border-2  px-4"
            type="email"
            name="email"
            placeholder="email"
          />{" "}
          <input
            className="border-2  px-4"
            type="text"
            name="name"
            placeholder="name"
          />{" "}
          <button
            type="submit"
            className="px-3 py-1 bg-sky-500 rounded text-white"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
