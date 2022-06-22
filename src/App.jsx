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
		const updatedContacts = [{ id: randomID(), ...contactObj }, ...contacts];
		// console.log("👉 👉 / updatedContacts", updatedContacts);
		setContacts(updatedContacts);
		setUpdatedContacts(updatedContacts);
	};

	const removeContactHandler = (id) => {
		const newContactList = updatedContacts.filter((contact) => {
			return contact.id !== id;
		});

		setContacts(newContactList);
		setUpdatedContacts(newContactList);
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
			<ContactList contacts={contacts} removeContact={removeContactHandler} />
		</div>
	);
}

export default App;
