/** @format */

import React, { useState } from "react";

function AddContact({ addContactHandler }) {
	const [newContact, setNewContact] = useState({
		name: "",
		surname: "",
		job: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNewContact({ ...newContact, [name]: value });
	};

	const handleContactSubmit = (e) => {
		e.preventDefault();
		// if (newContact.name === "" || newContact.surname === "" || newContact.job === "") {
		// 	alert("ALl the fields are mandatory!");
		// 	return;
		// }
		const { name, surname, job } = newContact;
		addContactHandler(newContact);
		setNewContact({ name: "", surname: "", job: "" });
	};
	return (
		<div className="ui main">
			<h2>Add Contact</h2>
			<form className="ui form" onSubmit={handleContactSubmit}>
				<div className="field">
					<label>Name</label>
					<input type="text" name="name" placeholder="Name" value={newContact.name} onChange={handleChange} required />
				</div>
				<div className="field">
					<label>Surname</label>
					<input
						type="text"
						name="surname"
						placeholder="Surname"
						value={newContact.surname}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="field">
					<label>Job</label>
					<input type="text" name="job" placeholder="Job" value={newContact.job} onChange={handleChange} required />
				</div>
				<button className="ui button blue">Add</button>
			</form>
		</div>
	);
}

export default AddContact;
