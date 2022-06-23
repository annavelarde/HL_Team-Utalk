/** @format */

import React, { useState } from "react";
// import { v4 as randomID } from "uuid";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, removeContact, shuffle }) => {
	// const [shuffledList, setShuffledList] = useState(contacts);
	// console.log("👉 👉 / shuffledList", shuffledList);

	const deleteContacHandler = (id) => {
		removeContact(id);
	};

	// const shuffleHandler = () => {
	// 	let newList = shuffle([...shuffledList]);
	// 	setShuffledList(newList);
	// 	console.log("👉 👉 / newList", shuffledList, newList);
	// };
	const renderContactList = contacts.map((contact, index) => {
		// console.log("👉 👉 / contact", contact);
		return <ContactCard contact={contact} deleteContact={deleteContacHandler} key={contact.name + index} />;
	});
	return (
		<>
			<div>
				<button className="ui button green" onClick={shuffle}>
					Shuffle Participants
				</button>
			</div>
			<div className="ui celled list">{renderContactList}</div>
		</>
	);
};

export default ContactList;
