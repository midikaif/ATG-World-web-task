import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';
// import logo from './images/whole.svg'

function App() {
  const [showModal, setModal] = useState(false);
  return (
    <>
      <Navbar setModal={setModal}/> 
      {!showModal&& <Home setModal={setModal} />}
      {showModal && <Modal setModal={setModal}/>}
      {/* <Modal /> */}
    </>
  );
}

export default App;
