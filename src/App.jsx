import React, {useState, useEffect} from "react";
import Header from "./components/Header.jsx";
import Tabs from "./components/Tabs.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoInput from "./components/TodoInput.jsx";


function App() {
    //Task Array in list, fill in [] for default values. Fields: Input, Complete,
    const [todos, setTodos] = useState([])

    //Default open Tab on opening of page.
    const [selectedTab, setSelectedTab] = useState('Open');

    function handleAddTodo(newTodo){
        const newTodoList = [...todos, {input: newTodo, complete: false}]
        setTodos(newTodoList);
        handleSaveData(newTodoList)
    }
    function handleCompleteTodo(index){
        //update/edit/modify
        let newTodoList = [...todos]
        let completedTodo = todos[index]
        completedTodo['complete'] = true
        newTodoList[index] = completedTodo
        setTodos(newTodoList)
        handleSaveData(newTodoList)
    }
    function handleDeleteTodo(index){
        let newTodoList = todos.filter((val,valIndex) => {
            return valIndex !== index
        })
        setTodos(newTodoList)
        handleSaveData(newTodoList)

    }

    //save to local-db on edit
    function handleSaveData(currTodos){
        localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }));
    }

    //when page is loaded, load array from localstorage if there is something, otherwise: empty array.
    useEffect(() => {
        if (!localStorage || !localStorage.getItem('todo-app')) {
            return
        }
        let db = JSON.parse(localStorage.getItem('todo-app'))
        setTodos(db.todos)
    },[])

    return (
        <>
                <Header
                    todos={todos}
                />

                <Tabs
                    todos={todos}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />

                <TodoList
                    todos={todos}
                    selectedTab={selectedTab}
                    handleDeleteTodo={handleDeleteTodo}
                    handleCompleteTodo={handleCompleteTodo}
                />

                <TodoInput
                    handleAddTodo={handleAddTodo}
                />
        </>

    )
}

export default App
