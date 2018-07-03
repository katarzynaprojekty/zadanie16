import React from 'react';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                    text: 'clean room'
                }, {
                id: 2,
                    text: 'wash the dishes'
                }, {
                id: 3,
                    text: 'feed my cat'
                }]
        };
        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
    }

    //zmienione
    onChangeHandle(value) {
        this.setState({text: value});
    }
	render() {
		return (
			<div className={style.TodoApp}>
				<Title title = "List" data={this.state.data}/>
                <TodoForm addTodo={this.addTodo}/>
                <TodoList dataList={this.state.data} removeTodo={this.removeTodo}/>
			</div>
		);
	}
}

export default hot(module)(App);