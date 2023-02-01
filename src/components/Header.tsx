import Navbar from "./Navbar";

const Header = () => {
	return (
		<>
			<div className="header-navbar">
				<Navbar />
			</div>
			<div className="header-content" id="home">
				<h1 className="header-title">hey, i'm hamza khan</h1>
				<p className="header-paragraph">
					I am a positive, enthusiastic and competent Web Developer who, over
					the past year, has built up a diverse range of skills and attributes
					that guarantee I will perform highly in this role.
				</p>
				<div className="btn-group">
					<button className="see-btn">
						<a
							href={"/pdf/hamza-khan-cv-frontend-developer.pdf"}
							target="_blank"
							rel="noreferrer"
						>
							See my CV
						</a>
					</button>
					<button className="see-btn">
						<a
							href={"/images/certificato-developer.jpeg"}
							target="_blank"
							rel="noreferrer"
						>
							See certificate
						</a>
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
