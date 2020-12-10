const initialState = {
    todos: [],
    loading: false,


    users: [],
    usersLoading: false
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
        case "check/todo/success":
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
        case "load/todo/success":
            return {
                todos: action.payload
            }
        case "load/todo/start":
            return {
                loading: true
            }
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
        case "todo/delete/success":
            return {
                ...state, todos: state.todos.filter((todo)=>{
                    if (todo.id===action.payload){
                        return false
                    }
                    return true
                })
            }
        case "users/load/start":
            return {
                ...state,
                usersLoading: true
            }
        case "users/load/success":
            return {
                ...state,
                usersLoading: false,
                users: action.payload
            }
        default:return state
    }
}
export default reducer