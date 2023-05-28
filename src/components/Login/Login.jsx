import React, { useState } from 'react';
import { Button, Form} from 'react-bootstrap';

const Login = ({onSubmitForm, title}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisable] = useState(true);
  const emailVAl = 'admin@ad.com';
  const passwordVal = '69admin';
  const handlerOnSubmit = (e) => {
    e.preventDefault();
    if (email === emailVAl && password === passwordVal) {
      return onSubmitForm (true);
    }
    return onSubmitForm (false);
  };

  const handlerInputs = (e) => {
    setPassword (e.target.value);
    if (email !== '' && password !== ''){
      setIsDisable(false);
    }
  };

  return (
    <div className='Form'>
      <h3>{title}</h3>
      <form className='Form'onSubmit={handlerOnSubmit}>
        <Form.Label>Email</Form.Label>
        <Form.Control type='text' id='email'autoComplete='off' onChange={(e) => setEmail(e.target.value)}></Form.Control>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' id='password'autoComplete='off' onChange={(e) => handlerInputs(e)}></Form.Control>
        <Button className='Btn' type='submit' variant='dark' disabled={isDisabled}>Enviar</Button>
      </form>
    </div>
  )
};

export default Login