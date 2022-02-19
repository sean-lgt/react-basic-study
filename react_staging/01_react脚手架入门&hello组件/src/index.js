//引入react核心库
import React from 'react';
// 引入react-dom
import ReactDOM from 'react-dom';

import './index.css';
// 引入App组件
import App from './App';

import reportWebVitals from './reportWebVitals';

// 渲染组件
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
