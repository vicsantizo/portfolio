import Link from 'next/link';
import Image from 'next/image';
import { shortenParagraph, shortenTitle } from '../../utils/text-format';
import './project.css';

type ProjectProps = {
  title: string;
  description: string;
  imgLink: string;
  githubLink?: string;
  websiteLink?: string;
};

export function Project(props: ProjectProps) {
  const { title, description, websiteLink, imgLink, githubLink } = props;
  const shortenedDescription = shortenParagraph(description, 100);
  const shortenedTitle = shortenTitle(title);
  const isGithubLinkAvailable = Boolean(githubLink);
  const isWebsiteLinkAvailable = Boolean(websiteLink);

  return (
    <div className="project" data-testid="project">
      <div className="project__display">
        <Image src={imgLink} width={60} height={60} alt={`${shortenedTitle} logo`} className="project__img" />
      </div>

      <div className="project__info">
        <h2 className="project__title">{shortenedTitle}</h2>
        <p className="project__desc">{shortenedDescription}</p>
      </div>

      <div className="project__links">
        {isGithubLinkAvailable && (
          <Link href={githubLink!} target="_blank" className="project__link" title="Check GitHub repo">
            <Image src="/assets/icons/github.png" alt="" width={20} height={20} className="project__icon" />
          </Link>
        )}
        {isWebsiteLinkAvailable && (
          <Link href={websiteLink!} target="_blank" className="project__link" title="Go to website">
            <Image src="/assets/icons/website.png" alt="" width={20} height={20} className="project__icon" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Project;
