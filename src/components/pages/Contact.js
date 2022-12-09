import React, { useState } from 'react';
import '../../styles/Form.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the name is empty
    if (!name) {
      setErrorMessage(
        `Name is required`
      );
      return;
    }
    
    // Next we check if there is a valid email address
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    //Last we check if a message was entered
    if (!message) {
      setErrorMessage(
        `Message is required`
      );
      return;
    }
    

    // If everything goes according to plan, then contact info was sent
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  const styles = {
    bodyHeight: {
      height: '475px'
    },
  };

  return (
    <div class="container d-flex justify-content-center" style={styles.bodyHeight}>
      {/* <h3>Contact Me</h3> */}

      <form className="form">
      <label class="h4">Name</label>
      <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <label class="h4">Email</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <label class="h4">Message</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
  
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
