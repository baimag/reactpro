import {checkTodo, load, removeTodo} from "../redux/action";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Todo from "./Todo";


function Todos () {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(load())
    },[])
    const todos = useSelector(state=>state.todos)
    const loading = useSelector(state => state.loading);

    return (
        loading ? <h2>Идет загрузка</h2> :(
                <div className="container">
                    <h2>Информация о юзерах сайта.</h2>
                    <div className="row">
                        {todos.map(todo=>{
                            return(
                                <>
                                <Todo todo={todo}/>
                                </>
                            )
                        })}
                    </div>
                </div>)
    )
}
export default Todos