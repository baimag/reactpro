import {useDispatch, useSelector} from "react-redux";
import {checkTodo, load, removeTodo} from "./action";
import {useEffect} from "react";


function App(){
    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }
    const notUser = () => {
        alert("Нет он стесняется")
    }
    const handleCheck =(id, completed) => {
dispatch(checkTodo(id, completed))
    }
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(load())
  },[])
  const todos = useSelector(state=>state.todos)
    const loading = useSelector(state => state.loading);
  return(
      <div className="container">
          {loading ? <h2>Идет загрузка</h2> :(
              <div className="container">
                  <h2>Информация о юзерах сайта.</h2>
                  <div className="row">
                      {todos.map(todo=>{
                          return(
                              <div className={"col-2"}>

                                  <div className="todos">
                                      <h6>{todo.checking ? "-" : (
                                          <input
                                              type="checkbox" checked={todo.completed}
                                              onChange={()=>handleCheck(todo.id, todo.completed)}/>
                                      )}</h6>
                                      {todo.title}
                                      <div className="buttons"><button onClick={()=>{notUser()}}>Перейти</button>
                                          <button disabled={todo.deleting} onClick={()=>handleDelete(todo.id)}>Удалить</button></div>
                                  </div>
                              </div>

                          )
                      })}
                  </div>
                  <div className="footer">
                      <h6>ооо "интукод" 2017-2020</h6><h6>@Copywriting</h6>
                  </div>
              </div>)}
      </div>
  )
}
export default App
