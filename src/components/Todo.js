import React from 'react';
//import style from './Todo.css';

const Todo = ({item, remove}) => {
    return (
        <li className={style.Todo} onClick={() => remove(item.id)}>{item.text}</li>
    );
};

export default Todo;