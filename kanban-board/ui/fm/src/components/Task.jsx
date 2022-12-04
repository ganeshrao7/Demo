import React from "react";
import AddTask from "./AddTask"
import TasksContainer from "./TasksContainer";
import socketIO from "socket.io-client";
// import './HomeStyle.css'

const socket = socketIO.connect("http://localhost:4000");

const Task = () => {
	return (
		<div className="home">
			
			<AddTask socket={socket} />
			<TasksContainer socket={socket} />
		</div>
	);
};

export default Task;