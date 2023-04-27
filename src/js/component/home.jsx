import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


let key = 0

const ToDoGen = () => {

	const [itemList, setItemList] = useState([]) 
	const [value, setValue] = useState('') 
	const [vis, setVisible] = useState({id: null}) 


	const removeItem = (entryId) => {
		let newList = itemList.map(a => ({...a})) 
		newList.splice((newList.findIndex(x => x.id === entryId)), 1) 
		setItemList(newList)
	}
	
	const valueChange = (event) => {
		setValue(event.target.value)
	}

	const taskCounter = () => {
		let mult = "s"
		let tasksLeft = "no"
		let yay = "- hooray!"

		if (itemList.length == 1) {tasksLeft = 1; mult = ""; yay = ""}
		if (itemList.length > 1) {tasksLeft = itemList.length; mult = "s"; yay = ""}

		return <li className="list-group-item d-flex w-100 align-middle justify-content-between">
			<small>{tasksLeft} task{mult} left {yay}</small>
		</li>
	}

	return (
		<div className="row justify-content-center">
			<div className="col-4">
			<h1>ToDo list</h1>
			<ul className="shadow list-group mt-3">
				<input 
					type="text"
					value={value} 
					className="list-group-item input-group"
					placeholder="What do I need to do today?"
					onChange={(event) => valueChange(event)} 
					onKeyUp={(event) => {
						if (event.key === "Enter" && event.target.value !== "") { 
							setItemList([...itemList, { id: key++, listItem: event.target.value }]);
							setValue('') 
						}
					}}
				/>
				{itemList.map(entry => 
	
					<li key={entry.id} 
					onMouseOver={() => setVisible({id:(entry.id)})}
					onMouseLeave={() => setVisible({id:null})} >
					<b>{entry.listItem}</b>
					<button 
						type="button" 
						className="custom-button" 
						onClick={() => {removeItem(entry.id)}}
						style={vis}
						>
						<FontAwesomeIcon className="custom-button" icon={faTrashCan} />
					</button>
				</li>
					)}
				{taskCounter()}
			</ul>
			</div>
		</div>
	);
};

export default ToDoGen;