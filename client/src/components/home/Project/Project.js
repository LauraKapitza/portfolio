import './Project.css';

function Project(props) {
  return (
    <article className="Project">
        <img src={process.env.PUBLIC_URL + `/img/${props.project.picture}`} alt={props.project.title} />
        <div className="project-info">
            <h4>{props.project.title}</h4>
            <p>{props.project.technologies}</p>
            <p>{props.project.description}</p>
        </div>
    </article>
  );
}

export default Project;