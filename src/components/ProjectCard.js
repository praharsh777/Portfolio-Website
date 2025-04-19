import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
          <img src={imgUrl} alt={title} className="project-image" />
          <div className="proj-txtx">
            <h3><b>{title}</b></h3>
            <span><b>{description}</b></span>
            {/* GitHub Button below description */}
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
              View
            </a>
          </div>
        </a>
      </div>
    </Col>
  );
};
