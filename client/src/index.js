import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import configureStore from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";
import "./index.css";
const store = createStore(reducers, compose(applyMiddleware(thunk))); // this line is targeted in console

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
//47:45
// export default store;
