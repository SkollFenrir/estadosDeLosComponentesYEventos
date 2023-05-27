import React from 'react';
import {Alert as AlertBoostrap}  from 'react-bootstrap';

const Alert = ({text, variant, show}) => {
  return (
    <AlertBoostrap className='Alert' show = {show} variant={variant}>{text}</AlertBoostrap>
  )
};

export default Alert