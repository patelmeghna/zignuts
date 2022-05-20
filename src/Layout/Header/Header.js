import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import logo from "../../assets/logos/logo.png";
import NavLink from "./nav/NavLink";
import { navLinks } from "./nav/navLinks";

const Header = () => {
  const [navbar, setNavbar] = useState("navbar");
  const [toggle, setToggle] = useState(false);

  function toggleClass() {
    setToggle(!toggle);
  }

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setNavbar("navbar");
    } else if (window.scrollY > 70) {
      return setNavbar("navbar active");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <Fade>
      <div className={navbar}>
        {/* ===== begin::logo ===== */}
        <div className="nav-logo">
          <a href="#">
            <img src={logo} alt="Mendleson Communication" />
          </a>
        </div>
        {/* ===== end::logo ===== */}

        <div
          class={toggle ? "button_container active" : "button_container"}
          onClick={toggleClass}
        >
          <span class="top"></span>
          <span class="middle"></span>
          <span class="bottom"></span>
        </div>

        {/* ===== begin::menu links ===== */}
        <div className={toggle ? "nav-list active" : "nav-list"}>
          {navLinks.map(({ navLinkId, scrollToId }, idx) => (
            <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
          ))}
        </div>
        {/* ===== end::menu links ===== */}
      </div>
    </Fade>
  );
};

export default Header;
