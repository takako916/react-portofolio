import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const HomePage = ({ bgColor }) => {
  const { t } = useTranslation();

  return (
    <main
      className="d-flex flex-column align-items-center justify-content-center vh-100"
      style={{
        backgroundColor: bgColor, // ナビバーと統一
        transition: "background 1s ease-in-out"
      }}
    >
      {/* メインタイトル */}
      <Container fluid className="text-center mb-3 mainTitle">
        <h1>{t("maintitle")}</h1>
        <h3>{t("myname")}</h3>
        <h2 className="mt-5">
          <a href="#about" className="text-decoration-none">
           <Badge className="about-badge bg-light bg-opacity-10">{t("about_me")}</Badge>
          </a>
        </h2>
      </Container>

      {/* ソーシャルリンク */}
      <Container className="text-center mt-5 socialLinks">
        <Row className="justify-content-md-center">
          <Col lg={2} className="fs-3">
            <a href="#" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
          </Col>
          <Col lg={2} className="fs-3">
            <a href="https://www.linkedin.com/in/takako-o-17a8b6300/" target="_blank" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </Col>
          <Col lg={2} className="fs-3">
            <a href="#contact" aria-label="Email">
              <i className="bi bi-envelope-arrow-up"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default HomePage;


