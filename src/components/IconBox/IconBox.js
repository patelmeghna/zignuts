import React from 'react'
import { Link } from 'react-router-dom'

const IconBox = (props) => {
  return (
    <div className='icon-box-wrap'>
        <div className="icon">
            <img src={props.icon} />
        </div>

        <h5 className="icon-title"> {props.title} </h5>

        <p className="icon-content"> {props.desc} <span><Link to={props.Link}>READ MORE</Link></span> </p>
    </div>
  )
}

IconBox.defaultProps = {
    Link: "/"
}

export default IconBox