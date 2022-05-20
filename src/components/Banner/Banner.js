import React from 'react';
import { Fade } from 'react-reveal';
import shape1 from '../../assets/shape/header-shape1.png';
import shape2 from '../../assets/shape/header-shape2.png';
import shape3 from '../../assets/shape/header-shape3.png';
import shape4 from "../../assets/shape/header-shape4.png";
import bannerBg from "../../assets/shape/header-bg-shape.png";
import bannerImg from "../../assets/img/header-img.png";

const Banner = () => {
  return (
    <div className="banner-wrap">
      {/* ===== begin::shapes ===== */}
      <div className="banner-shape-wrap">
        <img src={shape1} className="position-absolute shape1" />
        <img src={shape2} className="position-absolute shape2" />
        <img src={shape3} className="position-absolute shape3" />
        <img src={shape4} className="position-absolute shape4" />
      </div>
      {/* ===== end::shapes ===== */}

      {/* ===== begin::banner bg ===== */}
      <img src={bannerBg} className="banner-bg position-absolute" />
      {/* ===== end::banner bg ===== */}

      {/* ===== begin::banner content ===== */}
      <Fade bottom>
        <div className="d-flex banner-content justify-content-between h-100">
          <img
            src={bannerImg}
            className="banner-img justify-self-start align-self-end"
          />

          <div className="banner-text align-self-start justify-self-end">
            <h4 className="banner-title">
              Mendleson Communication and Engagement
            </h4>
            <p className="banner-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              sed ipsum, ut quam volutpat, tortor.
            </p>
          </div>
        </div>
      </Fade>
      {/* ===== end::banner content ===== */}
    </div>
  );
}

export default Banner