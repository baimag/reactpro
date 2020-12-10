import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider, useStore} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const initialState = {
    todos: [],
    loading: false

}
const reducer = (state = initialState, action)=>{
    switch (action.type){
        case "check/todo/start" :
            return {
                ...state,todos: state.todos.map((todo) => {
                    if (todo.id===action.payload)
                    {
                        return {
                            ...todo,
                            checking: true
                        }
                    }
                    return todo;
                })
            }
        case "check":
            return {
                ...state,
                todos: state.todos.map((todo)=>{
                    if (todo.id===action.payload)
                        return {
                        ...todo,completed: !todo.completed,
                            checking: false
                        }
                    return todo;

                })
            }
        case "load":
            return {
                todos: action.payload
            }
        case "start":
            return {
                loading: true
            }
        default:return state
        case "todo/delete/start":
            return {
                ...state,todos: state.todos.map((todo) => {
                   if (todo.id===action.payload)
                   {
                       return {
                           ...todo,
                           deleting: true
                       }
                   }
                   return todo;
                })
            }
        case "delete":
            return {
                ...state, todos: state.todos.filter((todo)=>{
                    if (todo.id===action.payload){
                        return false
                    }
                    return true
                })
            }
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
