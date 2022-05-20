import React from 'react'
import { Fade } from 'react-reveal';
import shape4 from "../../assets/shape/shape-4.png";
import Title from '../Title/Title';
import ProjectCard from './ProjectCard';
import project1 from '../../assets/img/project1.jpg';
import project2 from '../../assets/img/project2.png';
import project3 from '../../assets/img/project3.png';
import { Col, Row } from 'react-bootstrap';

const Project = () => {
  return (
    <div id="project">
      <div className="project-section position-relative">
        <Fade bottom>
          <img src={shape4} className="shape-right" />
        </Fade>

        <Fade>
          <div className="d-flex justify-content-center mb-4">
            <Title title="OUR PROJECTS" />
          </div>
        </Fade>

        <Fade bottom>
          <Row className='gy-4'>
            <Col md={6}>
              <ProjectCard projectName="Project Name" projectImg={project1} />
            </Col>

            <Col md={6}>
              <Row className="gy-4">
                <Col md={12}>
                  <ProjectCard
                    projectName="Project Name"
                    projectImg={project2}
                  />
                </Col>

                <Col md={12}>
                  <ProjectCard
                    projectName="Project Name"
                    projectImg={project3}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Fade>
      </div>
    </div>
  );
}

export default Project
