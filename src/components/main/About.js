import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Figure from 'react-bootstrap/Figure';

const About = () => {
  const { t } = useTranslation();  
  return (
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
                <Col className="" lg="6">
                    <p className="fs-4">{t("about_me")}:<br></br> <span className="fs-6">{t("about_me_description")}</span></p>
                    <p className="fs-4">{t("about_portofolio")}: <br></br><span className="fs-6">{t("portofolio_description")}</span></p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About