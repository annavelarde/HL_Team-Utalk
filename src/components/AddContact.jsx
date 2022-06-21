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

// class AddContact extends React.Component {
// 	state = {
// 		name: "",
// 		surname: "",
// 		job: "",
// 	};

// 	add = (e) => {
// 		e.preventDefault();
// 		if (this.state.name === "" || this.state.email === "") {
// 			alert("ALl the fields are mandatory!");
// 			return;
// 		}
// 		this.props.addContactHandler(this.state);
// 		this.setState({ name: "", email: "" });
// 	};
// 	render() {
// 		return (
// 			<div className="ui main">
// 				<h2>Add Contact</h2>
// 				<form className="ui form" onSubmit={this.add}>
// 					<div className="field">
// 						<label>Name</label>
// 						<input
// 							type="text"
// 							name="name"
// 							placeholder="Name"
// 							value={this.state.name}
// 							onChange={(e) => this.setState({ name: e.target.value })}
// 						/>
// 					</div>
// 					<div className="field">
// 						<label>Surname</label>
// 						<input
// 							type="text"
// 							name="surname"
// 							placeholder="Surname"
// 							value={this.state.email}
// 							onChange={(e) => this.setState({ email: e.target.value })}
// 						/>
// 					</div>
// 					<div className="field">
// 						<label>Job</label>
// 						<input
// 							type="text"
// 							name="job"
// 							placeholder="Job"
// 							value={this.state.email}
// 							onChange={(e) => this.setState({ email: e.target.value })}
// 						/>
// 					</div>
// 					<button className="ui button blue">Add</button>
// 				</form>
// 			</div>
// 		);
// 	}
// }

export default AddContact;
