import React from 'react'
import { Fade } from 'react-reveal'
import Title from '../Title/Title';
import shape1 from "../../assets/shape/shape-1.png";
import { Col, Row } from 'react-bootstrap';
import useNav from '../../Layout/Header/CustomHooks/useNav';
import TeamMember from './TeamMember';
import team1 from '../../assets/img/team-1.png';
import team2 from '../../assets/img/team-2.png';
import team3 from "../../assets/img/team-3.png";

const Team = () => {
  const teamRef = useNav("#team")

  return (
    <div id="team" ref={teamRef}>
      <Fade bottom>
        <img src={shape1} className="shape-left" />
      </Fade>

      <Fade>
        <div className="d-flex justify-content-center">
          <Title title="Our Team" />
        </div>
      </Fade>

      <Fade bottom>
        <Row>
          <Col md={4}>
            <TeamMember img={team1} name="Jessica D’suza" />
          </Col>

          <Col md={4}>
            <TeamMember img={team2} name="Johny Williams" />
          </Col>

          <Col md={4}>
            <TeamMember img={team3} name="Sanya R," />
          </Col>
        </Row>
      </Fade>
    </div>
  );
}

export default Team