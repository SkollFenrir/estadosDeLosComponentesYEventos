import React from 'react'
import Badge from 'react-bootstrap/Badge';

const Footer = ({title, description}) => {
  return (
    <div className='Footer'>
        <h4>{title}</h4>
        <Badge>{description}</Badge>
    </div>
  )
};

export default Footer