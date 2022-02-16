import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setvalues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setsubmitted] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setvalues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInputChange = (event) => {
    setvalues({ ...values, lastName: event.target.value });
  };

  const handleEmailChange = (event) => {
    setvalues({ ...values, email: event.target.value });
  };

  return (
    <div class="form-container">
      <form class="register-form">
        {submitted ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : null}
        {/* Uncomment the next line to show the success message */}

        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          onChange={handleEmailChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
