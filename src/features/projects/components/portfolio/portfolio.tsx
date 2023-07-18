import { Project } from '../project';
import './portfolio.css';

interface Project {
  id: string;
  title: string;
  description: string;
  websiteLink: string;
  imgLink: string;
  githubLink: string;
}

async function getProjects() {
  try {
    const projectsResponse = await fetch('http://localhost:3000/api/github');
    if (!projectsResponse.ok) throw new Error('Failed to fetch data');
    return projectsResponse.json();
  } catch (error) {
    throw error;
  }
}

export async function Portfolio() {
  const projects = await getProjects();

  return (
    <main className="portfolio">
      <h1 className="portfolio__title">Personal Projects</h1>

      <ul className="portfolio__projects">
        {projects.map((project: Project) => (
          <li key={project.id}>
            <Project
              id={project.id}
              title={project.title}
              description={project.description}
              imgLink={project.imgLink}
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Portfolio;
