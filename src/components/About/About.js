import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal';
import useNav from '../../Layout/Header/CustomHooks/useNav';
import about from '../../assets/img/about.png';
import IconBox from '../IconBox/IconBox';
import setting from "../../assets/icon/setting.png";
import communication from "../../assets/icon/comunication.png";

const About = () => {
  const aboutUs = useNav("#about");

  return (
    <div
      className="about-section"
      id="about"
      ref={aboutUs}
    >
      <Row className='gy-4'>
        {/* ===== begin::about img ===== */}
        <Col xl={6}>
          <Fade left>
            <img src={about} alt="About Us" />
          </Fade>
        </Col>
        {/* ===== end::about img ===== */}

        {/* ===== begin::about content ===== */}
        <Col xl={6}>
          <Fade right>
            <div className="title-wrap">
              <h3 className="title">About US</h3>
            </div>

            <p className="section-content">
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creativity,
              results and excepKonal levels of customer service and
              professionalism. We specialise in infrastructure development,
              energy and natural resources.
            </p>

            <Row>
              <Col md={6}>
                <IconBox
                  icon={setting}
                  title="Engagement"
                  desc="We are engagement specialists, who have led projects at all levels of the IAP2 spectrum."
                />
              </Col>

              <Col md={6}>
                <IconBox
                  icon={communication}
                  title="Communications"
                  desc="We are award-winning leaders in communications and campaign management."
                />
              </Col>
            </Row>
          </Fade>
        </Col>
        {/* ===== end::about content ===== */}
      </Row>
    </div>
  );
}

export default About