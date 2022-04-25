import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './tests/reportWebVitals';
import UserProvider from "./context/userContext"
import './styles/App.scss';
import './styles/index.css';


ReactDOM.render(
  <UserProvider>
    <App/>
  </UserProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
