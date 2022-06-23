/** @format */
import teamDB from "../teamDB.json";
import React, { useState, useEffect } from "react";
import { v4 as randomID } from "uuid";
import "./App.css";
// import Header from "./Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
	const LOCAL_STORAGE_KEY = "contacts";

	const [contacts, setContacts] = useState([...teamDB.contacts]);
	const [updatedContacts, setUpdatedContacts] = useState(contacts);

	const addContactHandler = (contactObj) => {
		// console.log(contactObj);
		const updatedListContacts = [{ id: randomID(), ...contactObj }, ...contacts];
		// console.log("👉 👉 / updatedContacts", updatedContacts);
		setContacts(updatedListContacts);
		setUpdatedContacts(updatedListContacts);
	};

	const removeContactHandler = (id) => {
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});

		setContacts(newContactList);
		setUpdatedContacts(newContactList);
	};
	// https://codesandbox.io/s/exciting-mccarthy-pqo5c?file=/src/App.js
	// https://stackoverflow.com/questions/63540873/react-hooks-shuffle-array-immediately-on-load-and-onclick
	function shuffle(arra1) {
		var ctr = arra1.length,
			temp,
			index;
		while (ctr > 0) {
			index = Math.floor(Math.random() * ctr);
			ctr--;
			temp = arra1[ctr];
			arra1[ctr] = arra1[index];
			arra1[index] = temp;
		}

		return arra1;
	}
	const shuffleHandler = () => {
		let newList = shuffle([...updatedContacts]);
		setContacts(newList);
		setUpdatedContacts(newList);
		console.log("👉 👉 / newList", updatedContacts, newList);
	};
	// useEffect(() => {
	// 	const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
	// 	if (retriveContacts) setContacts(retriveContacts);
	// }, []);

	// useEffect(() => {
	// 	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	// }, [contacts]);

	return (
		<div className="ui container">
			{/* <Header /> */}
			<AddContact addContactHandler={addContactHandler} />
			<ContactList contacts={updatedContacts} removeContact={removeContactHandler} shuffle={shuffleHandler} />
		</div>
	);
}

export default App;
