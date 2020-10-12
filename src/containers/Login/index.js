import React, { useState } from "react";
import { Button, FormGroup, FormControl, Alert } from "react-bootstrap";
import axios from 'axios';
import { useAppContext } from "../../utils/contextLib";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();
  

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    /* LOGIN CALL https://strapi.io/documentation/3.0.0-beta.x/guides/auth-request.html#login-as-a-reader*/
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/local`, {
      identifier: email,
      password: password,
    }).then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user); //
      console.log('User token', response.data.jwt);
      setErrorMessage("");
      localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_KEY, response.data.jwt);
      localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_APPUSER, JSON.stringify(response.data.user));
      
      history.push("/");
      userHasAuthenticated(true);
    })
    .catch(err => {
      // Handle error.
      if(err.response && err.response.status === "400"){
        var msg = err.response.data.message[0].messages[0].message;
        setErrorMessage(msg);
      } else {
        setErrorMessage(err);
      }
      
    });

  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" size="lg">
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" size="lg">
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block size="lg" disabled={!validateForm()} type="submit">
          Login
        </Button>
        <br />
        {errorMessage !== "" ? 
          <Alert key='error' variant='danger'> {errorMessage} </Alert> 
          : ""
        }
      </form>
    </div>
  );
}

export default Login;