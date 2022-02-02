import React from "react";


const  Form=( {setInputText, todos, setTodos, inputText} )=>{
    
    const inputTextHandler=(e)=>{
        console.log(e.target.value);  
        setInputText(e.target.value);
         
    };

    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed:false,id: Math.random()*1000}]);


        setInputText("");

    }; 
    return(
        <form>
            <input value={ inputText} onChange={inputTextHandler} type="text" className="todo-app"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit"> 
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" > 
                    <option value="all">ALL</option>
                    <option value="completed">COMPLETED</option>
                    <option value="uncompleted">UNCOMPLETED</option>
                </select>
            </div>
        </form>
    );
}

export default Form;