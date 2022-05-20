import React from 'react'
import About from '../About/About';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import Project from '../Project/Project';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
  return (
    <>
      {/* ===== begin::header ===== */}
      <Banner />
      {/* ===== end::header ===== */}

      {/* ===== begin::about ===== */}
      <About />
      {/* ===== end::about ===== */}

      {/* ===== begin::Services ===== */}
      <Services />
      {/* ===== end::Services ===== */}

      {/* ===== begin::Team ===== */}
      <Team />
      {/* ===== end::Team ===== */}

      {/* ===== begin::Project ===== */}
      <Project />
      {/* ===== end::Project ===== */}

      {/* ===== begin::Client ===== */}
      <Client />
      {/* ===== end::Client ===== */}
    </>
  );
}

export default Home