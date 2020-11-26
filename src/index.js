import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./containers/App";
import client from "./utils/apolloClient";
import { BrowserRouter as Router } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import "./index.css";
import './bootstrap/bootstrap.min.css';

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}



ReactDOM.render(
	<Router>
		<ApolloProvider client={client}>
			<AlertProvider template={AlertTemplate} {...options}>
	  			<App />
	  		</AlertProvider>
		</ApolloProvider>
	</Router>,
	document.getElementById("root")
);