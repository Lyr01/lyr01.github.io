import VideoPlayer from "pages/VideoPlayer";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SingleProject from "./pages/SingleProject";

function App() {
	return (
		<div className="portfolio">
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="project/:id" element={<SingleProject />} />
					<Route path="project/video/:name" element={<VideoPlayer />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</HashRouter>
			<Footer />
		</div>
	);
}
export default App;
