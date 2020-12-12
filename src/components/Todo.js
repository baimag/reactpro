import {useDispatch, useSelector} from "react-redux";
import {checkTodo, removeTodo} from "../redux/action";

function Todo (props) {
    // Есть массив из чисел `[2, -2, 0.1, 0, 0, -10, -9.9, -0.5, 0.3, 0.003, 2]`.
    //     Напиши код, который все отрицательные значения элементов массива заменит на нолик.
    //
    //     В итоге должно получиться: `[2, 0, 0.1, 0, 0, 0, 0, 0, 0.3,`]
  //ЗАДАНИЕ 1
    const words =  {todo:[2, -2, 0.1, 0, 0, -10, -9.9, -0.5, 0.3, 0.003, 2]}
    console.log( words.todo.map(word => word < 0 ? 0 : word ) );
    const elements = [
        { a: 2, b: 12 },
        { a: 0.1, b: 0.1 },
        { a: 0, b: 1 },
        { a: 100, b: 1000 },
        { a: 4, b: 4 }
        ];
 // ЗАДАНИЕ 2
    console.log(elements.filter(word => word.a !== word.b))
    //Обработай массив так, чтобы в итоге остались только те элементы, у которых значения свойств a и b не совпадают.
 // ЗАДАНИЕ 3
    console.log(elements.map(word => word.a === word.b ? word.a + word.b: word))
        // Напиши код, который в массиве из предыдущего задания найдет какого-нибудь близнеца
    // (объекта, у которого значения обеих свойств равны) и вернет сумму этих значений.



















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