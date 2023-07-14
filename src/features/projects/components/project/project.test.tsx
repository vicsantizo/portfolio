import { render, screen } from '@testing-library/react';
import Project from './Project';

describe('Project', () => {
  const mockProject = {
    title: 'Sample Project',
    description: 'This is a sample project description.',
    websiteLink: 'https://example.com',
    imgLink: 'https://example.com/image.jpg',
    githubLink: 'https://github.com/example',
  };

  const mockProjectNoLinks = {
    title: 'Sample Project',
    description: 'This is a sample project description.',
    imgLink: 'https://example.com/image.jpg',
  };

  it('renders project title and description', () => {
    render(<Project {...mockProject} />);
    const titleElement = screen.getByText('Sample Project');
    const descriptionElement = screen.getByText('This is a sample project description.');
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders GitHub link if available', () => {
    render(<Project {...mockProject} />);
    const githubLinkElement = screen.getByTitle('Check GitHub repo');
    expect(githubLinkElement).toBeInTheDocument();
    expect(githubLinkElement).toHaveAttribute('href', 'https://github.com/example');
  });

  it('renders website link if available', () => {
    render(<Project {...mockProject} />);
    const websiteLinkElement = screen.getByTitle('Go to website');
    expect(websiteLinkElement).toBeInTheDocument();
    expect(websiteLinkElement).toHaveAttribute('href', 'https://example.com');
  });

  it('does not render Github link when it is not available', () => {
    render(<Project {...mockProjectNoLinks} />);
    const githubLinkElement = screen.queryByTitle('Check GitHub repo');
    expect(githubLinkElement).not.toBeInTheDocument();
  });

  it('does not render Website link when it is not available', () => {
    render(<Project {...mockProjectNoLinks} />);
    const githubLinkElement = screen.queryByTitle('Go to website');
    expect(githubLinkElement).not.toBeInTheDocument();
  });
});
