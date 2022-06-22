/** @format */

import React from "react";
// import { v4 as randomID } from "uuid";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, removeContact }) => {
	const deleteContacHandler = (id) => {
		removeContact(id);
	};
	const renderContactList = contacts.map((contact, index) => {
		// console.log("👉 👉 / contact", contact);
		return <ContactCard contact={contact} deleteContact={deleteContacHandler} key={index} />;
	});
	return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
