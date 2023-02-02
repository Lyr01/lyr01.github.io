import React, { useState } from "react";

import { HashLink } from "react-router-hash-link";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="navbar">
			<div className="person">
				<img className="photo" src={"/images/me.svg"} alt="my img" />
				<p className="name">hamza khan</p>
			</div>
			<div className={`navbar ${isOpen ? "open" : "close"}`}>
				<HashLink onClick={() => setIsOpen(false)} to="/#home">
					Home
				</HashLink>
				<HashLink onClick={() => setIsOpen(false)} to="/#about">
					About me
				</HashLink>
				<HashLink onClick={() => setIsOpen(false)} to="/#projects">
					Projects
				</HashLink>
				<HashLink onClick={() => setIsOpen(false)} to="/#contact">
					Contact
				</HashLink>
			</div>
			<div
				onClick={() => setIsOpen(false)}
				className={`outside-navbar ${isOpen ? "open" : "close"}`}
			></div>
			<div
				className={`nav-toggle ${isOpen ? "open" : "close"}`}
				onClick={() => setIsOpen(!isOpen)}
			></div>
		</div>
	);
};

export default Navbar;
