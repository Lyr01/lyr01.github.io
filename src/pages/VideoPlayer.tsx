import Navbar from "components/Navbar";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
	const { name } = useParams();

	return (
		<>
			<Navbar />
			<div className="video-player">
				<div></div>
				<div>
					<video controls muted autoPlay className="video-player">
						<source src={`/video/${name}`} type="video/webm" />
					</video>
				</div>
				<div></div>
			</div>
		</>
	);
};

export default VideoPlayer;
