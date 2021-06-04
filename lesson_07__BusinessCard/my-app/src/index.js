import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';


ReactDOM.render(
  <React.StrictMode>
    <App fullName={store.getState().header.fullName} avatar={store.getState().sideBar.avatar} 
    description={store.getState().content.description} content={store.getState().content}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
