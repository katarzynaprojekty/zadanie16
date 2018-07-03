import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js';

const TodoList = props => {
    let list = props.dataList.map(todo => {
        return <Todo item={todo} remove={props.removeTodo} key={todo.id}/>
    })
    
    return (
        <ol className={style.TodoList}>
            {list}
        </ol>
    );
};

export default TodoList;