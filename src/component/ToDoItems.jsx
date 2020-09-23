import React from "react";

const ToDoItems = (props) => {
    return (<>
        <div className="item_div">
            <button className="todo_button"
                onClick={()=>{props.deleteItem(props.item)}}
        >Delete</button>
        <li>{props.item}</li>
    </div>
    </>)
}

export default ToDoItems;