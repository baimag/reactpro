import {useDispatch, useSelector} from "react-redux";
import {load, removeTodo} from "./action";
import {useEffect} from "react";


function App(){
    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }
    const notUser = () => {
        alert("Нет он стесняется")
    }
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(load())
  },[])
  const todos = useSelector(state=>state.todos)
    const loading = useSelector(state => state.loading);
  return(
      <div className="container">
          {loading ? "идет загрузка" :(
              <div className="container">
                  <h2>Информация о юзерах сайта.</h2>
                  <div className="row">
                      {todos.map(todo=>{
                          return(
                              <div className={"col-2"}>
                                  <div className="todos">

                                      Имя: {todo.name},<br/>
                                      Никнейм: {todo.username},<br/>
                                      Место жительства: {todo.address.city}<br/>
                                      <div className="buttons"><button onClick={()=>{notUser()}}>Перейти к юзеру</button>
                                          <button onClick={()=>handleDelete(todo.id)}>Удалить юзера</button></div>
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
