import React from 'react'

const SideContent = (props) => {
  return (
    <>
        <h5 className="content-title">
            {props.title}
        </h5>

        <p className="content-desc">
            {props.desc}
        </p>
    </>
  )
}

export default SideContent