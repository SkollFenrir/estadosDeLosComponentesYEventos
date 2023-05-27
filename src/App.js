import { useState } from 'react';
import './App.css';
import AlertBoostrap from './components/Alert/Alert';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

function App() {
  const [isValid, setIsValid] = useState();
  const handlerSubmitResult = (e) => {
    setIsValid(e);
    setIsDisable(true);
  };
  const [isDisabled,  setIsDisable] = useState (false);
  return (
    <div className="App">
      <Header title={"Estado de los Componentes y Eventos"} />
      <div className='content'>
        <Card img={'https://felinicidad.com/wp-content/uploads/2022/03/mininos-13.jpg'} cardTitle={'Gatitos'} description={'Monarcas del hogar'}/>
        <Card img={'https://felinicidad.com/wp-content/uploads/2022/03/Canela.jpg'} cardTitle={'Gatitos'} description={'Monarcas del hogar'}/>
        <Card img={'https://felinicidad.com/wp-content/uploads/2022/03/Apolo.jpeg'} cardTitle={'Gatitos'} description={'Monarcas del hogar'}/>
      </div>
      <Login title={'Log In'} onSubmitForm={(e) => handlerSubmitResult(e)}/>
      <AlertBoostrap show ={isDisabled} text={isValid ? '¡Los datos coinciden!' : '¡¡Los datos no coinciden!!'} variant={isValid ? 'success' : 'danger'}/> 
      <Footer description={'Todos los derechos reservados ©'} title={'Estado de los Componentes y Eventos'}/>
    </div>
  );
}

export default App;
