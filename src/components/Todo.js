import {useDispatch, useSelector} from "react-redux";
import {checkTodo, removeTodo} from "../redux/action";

function Todo (props) {
    const user = props.users.find((u) => u.id=== props.todo.userId);
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(removeTodo(id));
    };
    const notUser = () => {
        alert("Нет он стесняется")
    };
    const handleCheck =(id, completed) => {
        dispatch(checkTodo(id, completed))
    };
    return (
        <div className={"col-2"}>

            <div className="todos">
                <h6>{props.todo.checking ? "-" : (
                    <input
                        type="checkbox" checked={props.todo.completed}
                        onChange={()=>handleCheck(props.todo.id, props.todo.completed)}/>
                )}</h6>
                {props.todo.title}{user.email}
                <div className="buttons"><button onClick={()=>{notUser()}}>Перейти</button>
                    <button disabled={props.todo.deleting} onClick={()=>handleDelete(props.todo.id)}>Удалить</button></div>
            </div>
        </div>
    );
}
export default Todo;