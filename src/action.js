export const load = () =>{
    return function (dispatch){
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>
        response.json()).then((json=>{
            dispatch({
                type:"load",
                payload: json
            })
        }))
    }
}
export const removeTodo = (id) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
        }).then((response)=> response.json()).then((json) => {
            dispatch({
                type:"delete",
                payload: id
            })
        })
    }


}