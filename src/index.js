import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider, useStore} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const initialState = []
const reducer = (state = initialState, action)=>{
    switch (action.type){
        case "load": return action.payload
        default:return state
        case "delete":
            return state.filter((todo)=>{
                if (todo.id === action.payload){
                    return false
                }
                return true
            })
    }
}
const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
