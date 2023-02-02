import SingleSkill from "./SingleSkill";

const About = () => {
	return (
		<section className="about-me-section" id="about">
			<div className="main-container">
				<div className="about-me">
					<div className="about-top">
						<h1>about me</h1>
						<p>
							Here you will find more information about me, what I do, and my
							current skills mostly in terms of programming and technology
						</p>
					</div>
					<div className="two-col">
						<div className="know-me">
							<h2>Get to know me!</h2>
							<p>
								Meticulous web developer with passion for responsive website
								design. Obtained
								<strong> Junior Full Stack Developer Certification</strong> from
								start2impact University.
								<br />
								<br />
								Almost 2 years of experience working on personal projects wich
								you can see down on the project section. Capable of self
								learning and updating myself. Looking to deliver excellent web
								development skills to help grow your business.
								<br />
								<br />
								I'm open to Job opportunities where I can contribute, learn and
								grow. If you have a good opportunity that matches my skills and
								experience then don't hesitate to contact me.
							</p>
							<button className="see-btn">
								<a href="mailto: khanhamza8895@gmail.com">Contact</a>
							</button>
						</div>
						<div className="skills">
							<h2>My Skills</h2>
							<div className="skills-container">
								<SingleSkill skill={"HTML"} />
								<SingleSkill skill={"CSS"} />
								<SingleSkill skill={"JavaScript"} />
								<SingleSkill skill={"TypeScript "} />
								<SingleSkill skill={"Bootstrap"} />
								<SingleSkill skill={"MySQL"} />
								<SingleSkill skill={"ReactJS"} />
								<SingleSkill skill={"WordPress"} />
								<SingleSkill skill={"Git"} />
								<SingleSkill skill={"SQL"} />
								<SingleSkill skill={"PHP"} />
								<SingleSkill skill={"NodeJS"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
