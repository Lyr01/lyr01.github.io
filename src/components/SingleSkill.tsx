interface Props {
	skill: string;
}

const SingleSkill = ({ skill }: Props) => {
	return <div className="single-skill">{skill}</div>;
};

export default SingleSkill;
