import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';


const firebaseConfig = {
  apiKey: "AIzaSyD1iwxrsJi0MdLi8Pinu-xNTIS-b1P_06c",
  authDomain: "react-coderhouse-2444c.firebaseapp.com",
  projectId: "react-coderhouse-2444c",
  storageBucket: "react-coderhouse-2444c.appspot.com",
  messagingSenderId: "13663597478",
  appId: "1:13663597478:web:22a1ae904feea626695567"
};

const app = initializeApp(firebaseConfig);

console.log("APP",app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
