import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Blog from './components/Blog/Blog';
import WelcomeModal from './components/WelcomeModal/WelcomeModal';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:true
    }
    this.toggleModal = this.toggleModal.bind(this); 
  }
  toggleModal() {
    this.setState({modal: !this.state.modal});
  }
  render() {
    return (
      <div>
        <Container>
          <p className="text-center"><strong>Blogs</strong></p>          
          <Blog/>
          {this.state.modal ? <WelcomeModal toggleModal={this.toggleModal} /> : null}                    
        </Container>
      </div>
    );
  }
}

export default App;