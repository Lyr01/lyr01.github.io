import Navbar from "./Navbar";

const NotFound = () => {
	return (
		<>
			<div className="header-navbar">
				<Navbar />
			</div>
			<div className="header-content" id="home">
				<h1 className="header-title">Error 404! Page not Found</h1>
				<p className="header-paragraph">
					The page you were looking for is not here, Please check the URL for
					mistakes and try again in alternative use the navigation menu or the
					button to go back
				</p>
				<div className="btn-group">
					<button className="see-btn">
						<a href="/">GO BACK</a>
					</button>
				</div>
			</div>
		</>
	);
};

export default NotFound;
