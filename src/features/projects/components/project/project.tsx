import Link from 'next/link';
import Image from 'next/image';
import { shortenParagraph, shortenTitle } from '../../utils/text-format';
import './project.css';

export type ProjectProps = {
  id: string;
  title: string;
  description: string;
  imgLink?: string;
  githubLink?: string;
  websiteLink?: string;
};

export function Project(props: ProjectProps) {
  const { id, title, description, websiteLink, imgLink, githubLink } = props;
  const shortenedDescription = shortenParagraph(description, 100);
  const shortenedTitle = shortenTitle(title);

  return (
    <div className="project" data-testid="project">
      <Link href={`/projects/${id}`}>
        <div className="project__display">
          {imgLink && (
            <Image src={imgLink} width={60} height={60} alt={`${shortenedTitle} logo`} className="project__img" />
          )}
        </div>
      </Link>

      <div className="project__info">
        <Link href={`/projects/${id}`} className="project__go">
          <h2 className="project__title">{shortenedTitle}</h2>
        </Link>
        <p className="project__desc">{shortenedDescription}</p>
      </div>

      <div className="project__links">
        {githubLink && (
          <Link href={githubLink!} target="_blank" className="project__link" title="Check GitHub repo">
            <Image src="/assets/icons/github.png" alt="" width={20} height={20} className="project__icon" />
          </Link>
        )}
        {websiteLink && (
          <Link href={websiteLink} target="_blank" className="project__link" title="Go to website">
            <Image src="/assets/icons/website.png" alt="" width={20} height={20} className="project__icon" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Project;
