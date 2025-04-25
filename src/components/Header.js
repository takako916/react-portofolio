import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import ThemeToggle from './ThemeToggle';

const Header = ({ bgColor, textColor, dropdownStyle, changeLanguage }) => {
  const { t } = useTranslation();
  const resumeLink = t("resume_link");
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={`navbar-custom ${isScrolled ? 'scrolled' : ''}`}
        style={{
          backgroundColor: isScrolled ? `${bgColor}dd` : bgColor,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          padding: isScrolled ? "0.5rem 1rem" : "1rem",
          boxShadow: isScrolled ? "0 2px 15px rgba(0,0,0,0.1)" : "none",
          backdropFilter: isScrolled ? "blur(10px)" : "none"
        }}
        expanded={expanded}
        onToggle={(expanded) => setExpanded(expanded)}
      >
        <Container>
          <Navbar.Brand 
            href="#home"
            className="brand-text"
            style={{
              color: textColor,
              transform: isScrolled ? 'scale(0.9)' : 'scale(1)',
            }}
            onClick={handleNavClick}
          >
            {t("home")}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" style={{ borderColor: textColor }}>
            <span className="navbar-toggler-icon" style={{ backgroundColor: textColor }}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto nav-links">
              {[
                { href: resumeLink, text: t("resume"), target: "_blank", rel: "noopener noreferrer" },
                { href: "#projects", text: t("projects") },
                { href: "#skills", text: t("skills") },
                { href: "#footer", text: t("contact") }
              ].map((link, index) => (
                <Nav.Link
                  key={index}
                  href={link.href}
                  target={link.target}
                  rel={link.rel}
                  style={{ color: textColor }}
                  className="nav-link-animated"
                  onClick={handleNavClick}
                >
                  {link.text}
                </Nav.Link>
              ))}
            </Nav>
            <NavDropdown 
              align="end" 
              title={
                <span className="globe-icon">
                  <i className="bi bi-globe" style={{ color: textColor }}></i>
                </span>
              } 
              id="language-dropdown"
              className="custom-dropdown"
            >
              <div 
                className="dropdown-menu-wrapper"
                style={{
                  backgroundColor: dropdownStyle.backgroundColor,
                  boxShadow: dropdownStyle.boxShadow
                }}
              >
                {[
                  { lang: "en", text: "English", icon: "🇬🇧" },
                  { lang: "ja", text: "日本語", icon: "🇯🇵" },
                  { lang: "fr", text: "Français", icon: "🇫🇷" }
                ].map((item, index) => (
                  <NavDropdown.Item 
                    key={index}
                    onClick={() => {
                      changeLanguage(item.lang);
                      handleNavClick();
                    }}
                    className="fw-bold dropdown-item-animated"
                    style={{
                      color: dropdownStyle.textColor,
                      backgroundColor: 'transparent'
                    }}
                  >
                    <span className="language-item">
                      <span className="language-icon">{item.icon}</span>
                      <span className="language-text">{item.text}</span>
                    </span>
                  </NavDropdown.Item>
                ))}
              </div>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ThemeToggle />
    </>
  );
};

export default Header;





