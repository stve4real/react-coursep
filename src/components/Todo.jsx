

function Todo ({task, description,tooglePopup}){

    function tooglPopup(){

        console.log("Delete", task[0])
    }

    return(

        <div className="todo-item">
        <h1 >{task}</h1>
        <p>{description}</p>
        <button onClick={tooglePopup}>
              Delete
        </button>
        </div>

    )
}

export default Todo;