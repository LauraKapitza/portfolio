import Project from './Project/Project';
import PROJECTS from '../../assets/projects.json';
import './Work.css';

function Work() {
  return (
    <div className="Work">
      <h3>Recent Work</h3>

      {PROJECTS.map((project, index) => (
        <Project key={index} project={project} />
      ))}

    </div>
  );
}

export default Work;