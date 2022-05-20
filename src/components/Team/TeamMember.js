import React from 'react'
import { Link } from 'react-router-dom'

const TeamMember = (props) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="team-img">
        <img src={props.img} />
      </div>

      <div className="position-relative">
        <Link to={props.linkedIn} target="_blank" className="name">
          {props.name}
        </Link>
      </div>
    </div>
  );
}

TeamMember.defaultProps = {
  linkedIn: "https://www.linkedin.com/feed/",
};

export default TeamMember