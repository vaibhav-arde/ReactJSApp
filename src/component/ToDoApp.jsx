import React, { useState } from "react";
import ToDoItems from "./ToDoItems";

const ToDoApp = () => {

    const [addItem, setAddItem] = useState('');
    const [itemList, setItemList] = useState([])

    const handleInput = (e) => {
        setAddItem(e.target.value)
    }

    const addToList = (e) => {
        setItemList((prevState) => {
            return ([
                ...prevState,
                addItem
            ])
        })
        setAddItem('')
    }

    const deleteItem = (delItem) => {
        const filteredItems = itemList.filter((item) => {
            return item !== delItem
        })
        setItemList(filteredItems);
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1 className="todo_h1">
                        To Do List
                    </h1>
                    <input className="todo_input" placeholder='Enter todo item'
                        value={addItem}
                        onChange={handleInput}
                    />
                    <button className="todo_button"
                        type='text'
                        onClick={addToList}
                    > + </button>
                    <ol>
                        {itemList.map((item, i) => {
                            return (
                                <>
                                    < ToDoItems
                                        item={item}
                                        key={i}
                                        id={i}
                                        deleteItem={deleteItem}
                                    />
                                </>
                            )
                        })}


                    </ol>

                </div>
            </div>

        </>
    )
}

export default ToDoApp;