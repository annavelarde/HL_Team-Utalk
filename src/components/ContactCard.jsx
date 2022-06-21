/** @format */

import React from "react";
import user from "../images/user.png";

const ContactCard = ({ contact, deleteContact }) => {
	const { id, name, surname, job } = contact;

	return (
		<div className="item">
			<img className="ui avatar image" src={user} alt="user" />
			<div className="content">
				<div className="header">
					{name} {surname}
				</div>
				<div>
					<i style={{ color: "#A9A9A9" }}>{job}</i>
				</div>
			</div>
			<i
				className="trash alternate outline icon"
				style={{ color: "red", marginTop: "7px" }}
				onClick={() => deleteContact(id)}
			></i>
		</div>
	);
};

export default ContactCard;
