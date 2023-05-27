import React from 'react'

const Card = ({img, cardTitle, description }) => {
  return (
    <div className='Card'>
        <img className='CardImg' src={img} />
        <h3 className='Padding'>{cardTitle}</h3>
        <p className='Padding'>{description}</p>
    </div>
  )
}

export default Card