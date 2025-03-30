import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Figure from 'react-bootstrap/Figure';
import { Helmet } from 'react-helmet-async';



const About = () => {
  const { t } = useTranslation();  

  return (
    <>
      {/* ✅ ここに Helmet を追加 */}
      <Helmet>
        <title>About | My Portfolio</title>
        <meta
            name="description"
            content="This is a personal portfolio website built with React. It showcases my web development skills and project experience. Recommended for those looking for examples of React-based portfolios."
        />
      </Helmet>

      <div className="about_me-section mt-2" id="about">
          <h1 className="text-secondary text-center">{t("about_me")}</h1>
    
          <Container className="d-flex justify-content-center my-5 aboutMe">
              <Row className="d-flex">
                  <Col className="mx-auto" lg="2">
                      <Figure>
                          <Figure.Image
                              width={171}
                              height={171}
                              alt="My Avatar"
                              src="images/myavatar.png"
                              className="rounded-circle border border-white"
                          />
                      </Figure>    
                  </Col>
                  <Col lg="6">
                      <p className="fs-4">{t("about_me")}:</p>
                      {t("about_me_description").split('\n').map((line, index) => (
                          <p className="fs-6 mb-2" key={index}>{line}</p>
                      ))}

                      <p className="fs-4 mt-4">{t("about_portofolio")}:</p>
                      <p className="fs-6">{t("portofolio_description")}</p>
                  </Col>
              </Row>
          </Container>
      </div>
    </>
  )
}

export default About
