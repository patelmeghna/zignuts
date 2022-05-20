import React from 'react'
import facebook from "../../assets/icon/facebook.png";
import linkedin from '../../assets/icon/linkedin.png'
import google from "../../assets/icon/google.png";
import useNav from '../Header/CustomHooks/useNav';

const Footer = () => {
  const contact = useNav("#contact")

  return (
    <div className="footer" id='contact' ref={contact}>
      <div className="footer-link-wrap">
        {/* ===== begin::footer links ===== */}
        <div className="footer-links">
          <h5 className="footer-title">Social</h5>

          {/* begin::footer item */}
          <div className="social-wrap d-flex align-items-center position-relative">
            <img src={facebook} alt="facebook" />
            <a href="/" target="_blank">
              Facebook
            </a>
          </div>
          {/* end::footer item */}

          {/* begin::footer item */}
          <div className="social-wrap d-flex align-items-center position-relative">
            <img src={linkedin} alt="facebook" />
            <a href="/" target="_blank">
              LinkedIn
            </a>
          </div>
          {/* end::footer item */}

          {/* begin::footer item */}
          <div className="social-wrap d-flex align-items-center position-relative">
            <img src={google} alt="facebook" />
            <a href="/" target="_blank">
              Google+
            </a>
          </div>
          {/* end::footer item */}
        </div>
        {/* ===== end::footer links ===== */}

        {/* ===== begin::footer links ===== */}
        <div className="footer-links">
          <h5 className="footer-title">Explore</h5>

          {/* begin::footer item */}
          <div className="social-wrap d-flex align-items-center position-relative">
            <a href="/" target="_blank">
              Services
            </a>
          </div>
          {/* end::footer item */}

          {/* begin::footer item */}
          <div className="social-wrap d-flex align-items-center position-relative">
            <a href="/" target="_blank">
              Team
            </a>
          </div>
          {/* end::footer item */}

          {/* begin::footer item */}
          <div className="social-wrap d-flex align-items-center position-relative">
            <a href="/" target="_blank">
              Clients
            </a>
          </div>
          {/* end::footer item */}
        </div>
        {/* ===== end::footer links ===== */}

        {/* ===== begin::footer links ===== */}
        <div className="footer-links">
          <h5 className="footer-title">Contact</h5>

          {/* begin::footer item */}
          <div className="social-wrap d-flex align-items-center position-relative w-50">
            <a href="/" target="_blank">
              Lorem Ipsum dummy address used for display
            </a>
          </div>
          {/* end::footer item */}

          {/* begin::footer item */}
          <div className="social-wrap d-flex align-items-center position-relative">
            <a href="tel:1234567890">
              123 456 7890
            </a>
          </div>
          {/* end::footer item */}
        </div>
        {/* ===== end::footer links ===== */}

        {/* ===== begin::footer links ===== */}
        <div className="footer-links">
          <h5 className="footer-title">Email</h5>

          {/* begin::footer item */}
          <div className="social-wrap d-flex align-items-center position-relative">
            <a href="mailto:mendlesoncommunication@email.com" target="_blank" className='mail-link'>
              mendlesoncommunication@email.com
            </a>
          </div>
          {/* end::footer item */}
        </div>
        {/* ===== end::footer links =====◘ */}
      </div>

      <div className="copyright-wrap">
        <p className="copyright">
          © Copyright 2018 Mendleson Communication Pty Ltd{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer
