import React from 'react'
import { Fade } from 'react-reveal';
import shape from "../../assets/shape/shape-5.png";
import Title from '../Title/Title';
import useNav from '../../Layout/Header/CustomHooks/useNav';
import logo1 from "../../assets/logos/logo1.png";
import logo2 from "../../assets/logos/logo2.png";
import logo3 from "../../assets/logos/logo3.png";
import logo4 from "../../assets/logos/logo4.png";
import logo5 from "../../assets/logos/logo5.png";
import logo6 from "../../assets/logos/logo6.png";
import logo7 from "../../assets/logos/logo7.png";
import logo8 from "../../assets/logos/logo8.png";
import logo9 from "../../assets/logos/logo9.png";

const Client = () => {
  const client = useNav("#clients")

  return (
    <div id="clients" ref={client}>
      <div className="client-section position-relative">
        <Fade bottom>
          <img src={shape} className="shape-left" />
        </Fade>

        <Fade>
          <div className="d-flex justify-content-center mb-4">
            <Title title="OUR CLIENTS" />
          </div>
        </Fade>

        <Fade bottom>
          <div className="client-logo-wrap">
            <div className="logo">
              <img src={logo3} alt="" />
            </div>

            <div className="logo">
              <img src={logo4} alt="" />
            </div>

            <div className="logo">
              <img src={logo1} alt="" />
            </div>

            <div className="logo">
              <img src={logo6} alt="" />
            </div>

            <div className="logo">
              <img src={logo2} alt="" />
            </div>
          </div>

          <div className="client-logo-wrap">
            <div className="logo">
              <img src={logo5} alt="" />
            </div>

            <div className="logo">
              <img src={logo7} alt="" />
            </div>

            <div className="logo">
              <img src={logo8} alt="" />
            </div>

            <div className="logo">
              <img src={logo9} alt="" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Client
