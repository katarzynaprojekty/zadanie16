import React from 'react';
import style from './Title.css';

//function Title(props) {
//    return (
//        <h1>{props.title}</h1>
//		  <h2> Tasks to do: {props.data.length} </h2>
//    )
//}

const Title = props => 
	<div className={style.Title}>
		<h1>{props.title}</h1>
		<h2> Tasks to do: {props.data.length} </h2>
	</div>


export default Title;