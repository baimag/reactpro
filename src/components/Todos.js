import {checkTodo, load, loadUsers, removeTodo} from "../redux/action";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Todo from "./Todo";

function Todos () {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(load())
        dispatch(loadUsers())
    },[])
    const todos = useSelector(state=>state.todos)
    const loading = useSelector(state => state.loading);
    const users = useSelector(state => state.users);
    const usersLoading = useSelector(state => state.usersLoading)

    return (
        loading || usersLoading ? <h2>Идет загрузка</h2> :(
                <div className="container">
                    <h2>Информация о юзерах сайта.</h2>
                    <div className="row">
                        {todos.map(todo=>{
                            return(
                                <>
                                <Todo key={todo.id} todo={todo} users={users}/>
                                </>
                            )
                        })}
                    </div>
                </div>
         ))
}
export default Todos