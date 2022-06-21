/** @format */

import React from "react";
import { v4 as randomID } from "uuid";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, removeContact }) => {
	// console.log(props);

	const deleteContacHandler = (id) => {
		console.log("👉 👉 / id", id);
		removeContact(id);
	};
	const renderContactList = contacts.map((contact) => {
		return <ContactCard contact={contact} deleteContact={deleteContacHandler} key={randomID()} />;
	});
	return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
