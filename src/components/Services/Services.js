import React from "react";
import { Fade } from "react-reveal";
import Title from "../Title/Title";
import shape1 from "../../assets/shape/shape-1.png";
import shape2 from "../../assets/shape/shape-2.png";
import shape3 from "../../assets/shape/shape-3.png";
import shape4 from "../../assets/shape/shape-4.png";
import { Col, Row } from "react-bootstrap";
import SideContent from "../SideContent/SideContent";
import service1 from "../../assets/img/service-1.png";
import service2 from "../../assets/img/service-2.png";
import service3 from "../../assets/img/service-3.png";
import service4 from "../../assets/img/service-4.png";
import service5 from "../../assets/img/service-5.png";
import useNav from "../../Layout/Header/CustomHooks/useNav";

const Services = () => {
  const services = useNav("#services");

  return (
    <div id="services" ref={services}>
      <Fade>
        <div className="d-flex justify-content-center">
          <Title title="SERVICES" />
        </div>
      </Fade>

      {/* ===== begin::service detail ===== */}
      <div className="service-detail">
        <Fade bottom>
          <img src={shape1} className="shape-left" />
        </Fade>

        <Row className="align-items-center gy-5 flex-column-reverse-md">
          <Col md={1} className="display-mid"></Col>

          <Col lg={6} xl={5}>
            <Fade left>
              <div className="text-lg-end text-center w-90">
                <SideContent
                  title="Engagement"
                  desc="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
                />
              </div>
            </Fade>
          </Col>

          <Col lg={6} xl={6} className="d-flex justify-content-center">
            <Fade right>
              <img src={service1} className="service-img" alt="" />
            </Fade>
          </Col>
        </Row>
      </div>
      {/* ===== begin::service detail ===== */}

      {/* ===== begin::service detail ===== */}
      <div className="service-detail">
        <Fade bottom>
          <img src={shape2} className="shape-right" />
        </Fade>

        <Row className="align-items-center gy-5">
          <Col md={1} className="display-mid"></Col>

          <Col lg={6} xl={6}>
            <Fade left>
              <img src={service2} className="service-img" alt="" />
            </Fade>
          </Col>

          <Col lg={6} xl={5}>
            <Fade right>
              <div className="text-lg-start text-center w-70">
                <SideContent
                  title="Communications"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. "
                />
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
      {/* ===== begin::service detail ===== */}

      {/* ===== begin::service detail ===== */}
      <div className="service-detail">
        <Row className="align-items-center gy-5 flex-column-reverse-md">
          <Col md={1} className="display-mid"></Col>

          <Col lg={6} xl={5}>
            <Fade left>
              <div className="text-lg-end text-center w-90">
                <SideContent
                  title="facilitation"
                  desc="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
                />
              </div>
            </Fade>
          </Col>

          <Col lg={6} xl={6} className="d-flex justify-content-center">
            <Fade right>
              <img src={service3} className="service-img" alt="" />
            </Fade>
          </Col>
        </Row>
      </div>
      {/* ===== begin::service detail ===== */}

      {/* ===== begin::service detail ===== */}
      <div className="service-detail">
        <Fade bottom>
          <img src={shape3} className="shape-left" />
        </Fade>

        <Row className="align-items-center gy-5">
          <Col md={1} className="display-mid"></Col>

          <Col lg={6} xl={6}>
            <Fade left>
              <img src={service4} className="service-img" alt="" />
            </Fade>
          </Col>

          <Col lg={6} xl={5}>
            <Fade right>
              <div className="text-lg-start text-center w-70">
                <SideContent
                  title="Consultation and Research"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. "
                />
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
      {/* ===== begin::service detail ===== */}

      {/* ===== begin::service detail ===== */}
      <div className="service-detail">
        <Fade bottom>
          <img src={shape4} className="shape-right" />
        </Fade>

        <Row className="align-items-center gy-5 flex-column-reverse-md">
          <Col md={1} className="display-mid"></Col>

          <Col lg={6} xl={5}>
            <Fade left>
              <div className="text-lg-end text-center w-90">
                <SideContent
                  title="Traning & Mentoring"
                  desc="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
                />
              </div>
            </Fade>
          </Col>

          <Col lg={6} xl={6} className="d-flex justify-content-center">
            <Fade right>
              <img src={service5} className="service-img" alt="" />
            </Fade>
          </Col>
        </Row>
      </div>
      {/* ===== begin::service detail ===== */}
    </div>
  );
};

export default Services;
