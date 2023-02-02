import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SingleSkill from "../components/SingleSkill";
import projects from "../projects.json";
import NotFound from "./NotFound";

interface IProject {
	id: string;
	title: string;
	image: string;
	live?: string;
	repostoryGithub: string;
	video?: string;
	description?: string[];
	toolUsed: string[];
}

const SingleProject = () => {
	const [data, setData] = useState<IProject>();

	const { id } = useParams();

	useEffect(() => {
		projects.filter((project) => (project.id === id ? setData(project) : null));
		window.scrollTo(0, 0);
	}, [id]);

	return (
		<>
			{!data ? (
				<NotFound />
			) : (
				<>
					<div className="header-navbar">
						<Navbar />
					</div>
					<div className="header-content" id="home">
						<h1 className="header-title">{data?.title}</h1>
						<p className="header-paragraph">
							This page contains the case study of {data?.title} Website which
							includes the Project Overview, Tools Used and Live Links to the
							official product.
						</p>
						<div className="btn-group">
							<button className="see-btn">
								{data?.live ? (
									<a href={data?.live}>See Live</a>
								) : (
									<a href={`#/project/video/${data.video}`}>See Video</a>
								)}
							</button>
							<button className="see-btn">
								<a href={data?.repostoryGithub}>See Github </a>
							</button>
						</div>
					</div>

					<div className="project-overview">
						<div className="image">
							{data.live ? (
								<a href={data.live}>
									<img
										className="img-case-study"
										src={data?.image}
										alt={"image of " + data?.title}
									/>
								</a>
							) : (
								<a href={`#/project/video/${data.video}`}>
									<img
										className="img-case-study"
										src={data?.image}
										alt={"image of " + data?.title}
									/>
								</a>
							)}
						</div>
						<div className="content">
							<div>
								<h1>Project Overview</h1>
								{data.description?.map((desc) => (
									<p className="project-description" key={desc}>
										{desc}
									</p>
								))}
							</div>
							<div className="tool-used">
								<h1>Tool Used</h1>
								<div className="skills-container">
									{data?.toolUsed.map((tool) => (
										<SingleSkill skill={tool} key={tool} />
									))}
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default SingleProject;
