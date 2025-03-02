import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav, ProgressBar } from "react-bootstrap";
import { useTranslation } from "react-i18next";

// ✅ スキルデータ（technical はそのまま、soft は翻訳を適用）
const skills = {
  technical: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "Bootstrap", level: 90 },
    { name: "React", level: 70 },
    { name: "PHP", level: 80 },
    { name: "Symfony", level: 70 },
    { name: "Laravel", level: 60 },
    { name: "Python", level: 60 },
  ],
  soft: [
    { name: "goal_oriented", level: 80 },
    { name: "collaboration", level: 80 },
    { name: "positivity", level: 75 },
    { name: "adaptability", level: 75 },
    { name: "problem_solving", level: 90 },
    { name: "empathy", level: 80 },
    { name: "organization", level: 85 },
    { name: "creativity", level: 65 },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");
  const { t } = useTranslation();

  return (
    <Container className="skills-section mt-3" id="skills">
      <h1 className="text-center text-secondary mb-5">{t("skills")}</h1>
      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        {/* タブのナビゲーション */}
        <Nav variant="tabs" className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link eventKey="technical" className="fw-bold">{t("techskills")}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="soft" className="fw-bold">{t("softskills")}</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* タブのコンテンツ */}
        <Tab.Content>
          <Tab.Pane eventKey="technical">
            <SkillList skills={skills.technical} />
          </Tab.Pane>
          <Tab.Pane eventKey="soft">
            <SkillList skills={skills.soft} isSoftSkills={true} />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

// ✅ スキルリストのコンポーネント（アニメーション追加）
const SkillList = ({ skills, isSoftSkills = false }) => {
  const [animatedSkills, setAnimatedSkills] = useState(skills.map(() => 0));
  const { t } = useTranslation(); // ✅ 翻訳を取得

  useEffect(() => {
    // 遅延アニメーション（0% → 実際の値）
    const timeout = setTimeout(() => {
      setAnimatedSkills(skills.map(skill => skill.level));
    }, 300); // 300ms の遅延

    return () => clearTimeout(timeout);
  }, [skills]);

  return (
    <Row>
      {skills.map((skill, index) => (
        <Col md={6} key={index} className="mb-3">
          {/* ✅ `isSoftSkills` の場合は `t()` を適用 */}
          <h5 className="text-body-secondary">{isSoftSkills ? t(skill.name) : skill.name}</h5>
          <ProgressBar 
            now={animatedSkills[index]} 
            label={`${animatedSkills[index]}%`} 
            className="custom-progress"
            animated 
          />
        </Col>
      ))}
    </Row>
  );
};

export default Skills;

