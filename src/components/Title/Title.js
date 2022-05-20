import React from 'react'

const Title = (props) => {
  return (
    <div className="title-wrap">
      <h3 className="title">{props.title}</h3>
    </div>
  );
}

export default Title