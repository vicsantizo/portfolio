import { Project } from '../project';
import Link from 'next/link';
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
  // const projects = await getProjects();
  const projects = [
    {
      id: 'read',
      title: 'Read',
      description: 'Personal tool for easily logging the reading progress of the books I am currently reading',
      websiteLink: 'www.google.com',
      githubLink: 'www.google.com',
      imgLink: 'https://raw.githubusercontent.com/vicsantizo/read/main/read-logo.png',
    },
    {
      id: 'cashew',
      title: 'Cashew',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      websiteLink: 'www.google.com',
      githubLink: 'www.google.com',
      imgLink: 'https://raw.githubusercontent.com/vicsantizo/read/main/read-logo.png',
    },
    {
      id: 'dashboard',
      title: 'Dashboard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      websiteLink: 'www.google.com',
      githubLink: 'www.google.com',
      imgLink: 'https://raw.githubusercontent.com/vicsantizo/read/main/read-logo.png',
    },
    {
      id: 'bubble',
      title: 'Bubble',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      websiteLink: 'www.google.com',
      githubLink: 'www.google.com',
      imgLink: 'https://raw.githubusercontent.com/vicsantizo/read/main/read-logo.png',
    },
    {
      id: 'project5',
      title: 'Project 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      websiteLink: 'www.google.com',
      githubLink: 'www.google.com',
      imgLink: 'https://raw.githubusercontent.com/vicsantizo/read/main/read-logo.png',
    },
  ];

  return (
    <>
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

      <div className="portfolio__more">
        <Link href="/projects" className="portfolio__link">
          View all
        </Link>
      </div>
    </>
  );
}

export default Portfolio;
