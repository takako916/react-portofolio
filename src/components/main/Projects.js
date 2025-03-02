import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "project1_title",
      description: "project1_description",
      images: ["images/benoitreisscover.png", "images/benoitlivre.png", "images/benoitreisscover.png"],
      link: "https://www.benoitreiss.com",
      published: "published_october",
      technologies: {
        frontend: "React, Bootstrap, JavaScript",
        backend: "Symfony (PHP)",
        database: "MySQL",
      },
    },
    {
      id: 2,
      title: "project2_title",
      description: "project2_description",
      images: ["images/googlesearchconsole_1.png", "images/googlesearchconsole_2.png", "images/googlesearchconsole_3.png"],
      link: "#",
      published: "published_august",
      technologies: {
        frontend: "HTML, CSS, Bootstrap, JavaScript, Chart.js",
        backend: "PHP (MVC)",
        database: "MariaDB",
      },
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects[0].images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="d-flex flex-column align-items-center justify-content-center" id="projects">
      <Container className="mt-3">
        <h1 className="text-center text-secondary">{t("projects")}</h1>
        {projects.map((project) => (
          <Card key={project.id} className="my-5 shadow-lg project-card">
            <Card.Header className="fs-4 text-center bg-body-secondary text-secondary border border-white">
              {t(project.title)}
            </Card.Header>
            <Row className="g-0">
              <Col md={8} className="d-flex align-items-center overflow-hidden project-image">
                <img
                  src={project.images[currentImageIndex]}
                  className="img-fluid rounded-start"
                  alt={t(project.title)}
                />
              </Col>
              <Col md={4} className="align-items-center">
                <Card.Body>
                  <h4 className="card-title text-center project-title">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {t(project.title)}
                    </a>
                  </h4>
                  <p className="card-text fs-5">{t(project.description)}</p>
                  <ListGroup>
                    <ListGroup.Item className="fs-6 bg-body-secondary border border-primary-subtle">
                      {t("technologies")}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="fw-bold">Frontend: </span>
                      {project.technologies.frontend}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="fw-bold">Backend: </span>
                      {project.technologies.backend}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="fw-bold">Database: </span>
                      {project.technologies.database}
                    </ListGroup.Item>
                  </ListGroup>
                  <p className="card-text text mt-3 text-end">
                    <small className="text-body-secondary">{t(project.published)}</small>
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </main>
  );
};

export default Projects;


