import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SingleProject from "./pages/SingleProject";

function App() {
	return (
		<div className="portfolio">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="project/:id" element={<SingleProject />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}
export default App;
