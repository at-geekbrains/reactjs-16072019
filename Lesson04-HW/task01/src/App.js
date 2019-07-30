import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Blog from './components/Blog/Blog';
import WelcomeModal from './components/WelcomeModal/WelcomeModal';

import './App.css';



function App() {
  return (
    <Container>
      <Blog/>
      <WelcomeModal/>
    </Container>
  );
}

export default App;