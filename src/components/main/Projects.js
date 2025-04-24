import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import OptimizedImage from '../common/OptimizedImage';

const Projects = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        database: "MySQL"
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects[0].images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 文字列をリストに変換する関数
  const splitTechnologies = (techString) => {
    return techString.split(', ').map(tech => tech.replace(/ \([^)]*\)/g, ''));
  };

  return (
    <main className="projects-section" id="projects">
      <Container className="py-5">
        <h1 className="text-center mb-5 fade-up">{t("projects")}</h1>
        {projects.map((project, index) => (
          <Card 
            key={project.id} 
            className="project-card mb-5 border-0 fade-up"
            style={{ 
              transitionDelay: `${index * 0.2}s`,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '16px',
              overflow: 'hidden'
            }}
          >
            <Row className="g-0">
              <Col md={8} className="position-relative project-image-container">
                <div className="project-image-overlay"></div>
                <OptimizedImage
                  src={project.images[currentImageIndex]}
                  className="project-image"
                  alt={t(project.title)}
                />
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="visit-site-button"
                >
                  {t("visit_site")}
                </a>
              </Col>
              <Col md={4}>
                <Card.Body className="p-4">
                  <h3 className="card-title mb-4">
                    {t(project.title)}
                  </h3>
                  <p className="card-description mb-4">
                    {t(project.description)}
                  </p>
                  
                  <div className="technologies-section">
                    <h4 className="tech-title mb-3">
                      {t("technologies")}
                    </h4>
                    
                    <div className="tech-category mb-3">
                      <h5 className="tech-subtitle">Frontend</h5>
                      <div className="d-flex flex-wrap gap-2">
                        {splitTechnologies(project.technologies.frontend).map((tech, i) => (
                          <Badge 
                            key={i} 
                            className="tech-badge frontend"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="tech-category mb-3">
                      <h5 className="tech-subtitle">Backend</h5>
                      <div className="d-flex flex-wrap gap-2">
                        {splitTechnologies(project.technologies.backend).map((tech, i) => (
                          <Badge 
                            key={i} 
                            className="tech-badge backend"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="tech-category">
                      <h5 className="tech-subtitle">Database</h5>
                      <div className="d-flex flex-wrap gap-2">
                        <Badge className="tech-badge database">
                          {project.technologies.database}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="published-date mt-4 mb-0">
                    {t(project.published)}
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


