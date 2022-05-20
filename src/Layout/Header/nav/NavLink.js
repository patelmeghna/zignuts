import React, { useContext } from "react";
import { NavContext } from "../Context/NavContext";

const NavLink = ({ navLinkId, scrollToId }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav-item">
      <span
        id={navLinkId}
        className={
          activeNavLinkId === navLinkId ? "activeClass nav-link" : "nav-link"
        }
        onClick={handleClick}
      >
        {navLinkId}
      </span>
    </div>
  );
};

export default NavLink;
