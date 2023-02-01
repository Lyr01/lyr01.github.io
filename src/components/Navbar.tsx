import React, { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="navbar">
			<div className="person">
				<img className="photo" src={"/images/me.svg"} alt="my img" />
				<p className="name">hamza khan</p>
			</div>
			<div className={`navbar ${isOpen ? "open" : "close"}`}>
				<a onClick={() => setIsOpen(false)} href="/">
					Home
				</a>
				<a onClick={() => setIsOpen(false)} href="/#about">
					About me
				</a>
				<a onClick={() => setIsOpen(false)} href="/#projects">
					Projects
				</a>
				<a onClick={() => setIsOpen(false)} href="/#contact">
					Contact
				</a>
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
