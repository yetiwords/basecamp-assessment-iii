import React, { Component } from 'react';
import './App.css';
var bg1 = require('./images/bg1.jpg');
var logo = require('./images/logo.png');

class App extends Component {

  render() {
    return (
    <div>  
    <MainContent />
    <Bg1 />
    <Ptags />
    <Img />
    <Footer />
</div>

    );
  }
}

class Ptags extends Component{
  render() {
    return (
      <div>
      <p>Established developers, alumni, and industry experts all get involved in your education. That makes for a perfect combination of mentors who know where you are starting, where you are at, and where you are going.</p>
    
      <p>Free housing is included for all full-time students at every DevMountain location. Our fully-furnished housing is conveniently located within walking distance of each campus.</p>
    
      <p>Our locations have everything you will need close by. All of your basic necessities will be within reach while you stay at DevMountain.</p>
      </div>
    );
  }
}

class Bg1 extends Component {
  render(){
    return(
      <div className="picBackdrop" src={bg1}>
      <h1>Learn HTML & CSS</h1>
  </div>
    );
  }
}

class MainContent extends Component {
  render() {
    return(
      <div>  
      <ul>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="index.html" className="active">Home</a></li>
  </ul>
  </div>
  
    );
  }
}
class Img extends Component {
  render() {
    return (
      <div>
          <img src={logo} alt="DevMountain logo" />
      </ div>
    );
  }
}
class Footer extends Component {
  render() {
    return (
<div>
  <footer>  
  <p id="footText">Copyright Austin Callaghan</p>
  </footer>
  </div>
    );
  }
}

export default App;
