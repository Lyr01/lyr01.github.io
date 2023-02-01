import { useNavigate } from "react-router-dom";
import projects from "../projects.json";

const Projects = () => {
	const navigateTo = useNavigate();

	const handleClick = (id: string) => {
		navigateTo(`project/${id}`);
	};

	return (
		<section className="project-section" id="projects">
			<h1 className="project-heading">some of my projects</h1>
			<div className="project-container">
				{projects.map((project) => (
					<div
						className="project-card"
						key={project.id}
						onClick={() => handleClick(project.id)}
					>
						<h1 className="project-title">{project.title}</h1>
						<img
							src={project.image}
							className="project-img"
							alt={project.title}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
