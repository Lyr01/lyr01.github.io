const Footer = () => {
	return (
		<footer id="contact">
			<div className="footer-content">
				<h3>Hamza Khan</h3>
				<p>
					That's enough about me, let's talk about you! If you like what you see
					and want to chat please contact me!
				</p>
				<a href="mailto: khanhamza8895@gmail.com">khanhamza8895@gmail.com</a>

				<div className="socials">
					<a href="https://www.linkedin.com/in/hamza-khan01/">
						<img src={"/images/linkedin-ico.png"} alt="github icon" />
					</a>

					<a href="https://github.com/Lyr01">
						<img src={"/images/github-ico.png"} alt="github icon" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
