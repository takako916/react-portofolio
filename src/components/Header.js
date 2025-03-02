import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

const Header = ({ bgColor, changeLanguage }) => {
  const { t } = useTranslation();
  const resumeLink = t("resume_link"); //

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="navbar-custom"
      style={{
        backgroundColor: bgColor, 
        transition: "background 1s ease-in-out",
        position: "fixed",  
        top: "0",
        width: "100%",
        zIndex: "1000"
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#home">{t("home")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
          <Nav.Link href={resumeLink} target="_blank" rel="noopener noreferrer">
              {t("resume")}
            </Nav.Link>
            <Nav.Link href="#projects">{t("projects")}</Nav.Link>
            <Nav.Link href="#skills">{t("skills")}</Nav.Link>
            <Nav.Link href="#footer">{t("contact")}</Nav.Link>
          </Nav>
          <Nav>
            {/* 言語切り替え用のドロップダウン */}
            <NavDropdown align="end" title={<i className="bi bi-globe"></i>} id="language-dropdown">
              <NavDropdown.Item className="fw-bold" onClick={() => changeLanguage("en")}>English</NavDropdown.Item>
              <NavDropdown.Item className="fw-bold" onClick={() => changeLanguage("ja")}>日本語</NavDropdown.Item>
              <NavDropdown.Item className="fw-bold" onClick={() => changeLanguage("fr")}>Français</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;





