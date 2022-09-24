import React, { useState} from 'react';
import './Todo.css';

import checkedBox from './assets/checked-20.png';
import uncheckedBox from './assets/unchecked-20.png';

function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  
  const updateInput = (e) => {
    setInputValue(e.target.value);
  }
  
  const addTodo = () => {
    if (inputValue) {
      const newTodoValue = {
        todo: inputValue, 
        done: false
      };
      const newTodoList = [...todoList, newTodoValue];
      setTodoList(newTodoList);
      setInputValue('');
    }
  }

  const updateTodo = (index) => {
    const toUpdate = {
      todo: todoList[index].todo,
      done: !todoList[index].done
    };
    const newList = [...todoList.slice(0, index), toUpdate, ...todoList.slice(index+1)];
    setTodoList(newList);
  }


  return (
    <div>
      <input onChange={updateInput} value={inputValue} />
      <button className="add-todo-button" onClick={addTodo}>Add</button>

      <ul>
        { todoList.map((todo, index) => {
          return (
            <div className="todo-row" key={index}>
              {todo.done ? 
                <img src={checkedBox} alt="checkedBox" onClick={() => updateTodo(index)} /> :
                <img src={uncheckedBox} alt="uncheckedBox" onClick={() => updateTodo(index)} />
              }
              <li>{todo.todo}</li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Todo;