import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav.js"
import Header from "./components/Header.js"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Img from "./components/img.json"
import Image from "./components/Img"

import stark from "./components/img/stark.jpg"
import lannister from "./components/img/lannister.jpg"
import arryn from "./components/img/arryn.jpg"
import targaryen from "./components/img/targaryen.jpg"
import greyjoy from "./components/img/greyjoy.jpg"
import baratheon from "./components/img/baratheon.jpg"
import martell from "./components/img/martell.jpg"
import tully from "./components/img/tully.jpg"
import tyrell from "./components/img/tyrell.jpg"
import mormont from "./components/img/mormont.jpg"
import hornwood from "./components/img/hornwood.jpg"
import frey from "./components/img/frey.jpg"


class App extends Component {

  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  }

  //Shuffle Array
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Already Selected, Game Over! Would you like to play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "stark":
        return `${stark}`
      case "lannister":
        return `${lannister}`
      case "arryn":
        return `${arryn}`
      case "targaryen":
        return `${targaryen}`
      case "greyjoy":
        return `${greyjoy}`
      case "baratheon":
        return `${baratheon}`
      case "martell":
        return `${martell}`
      case "tully":
        return `${tully}`
      case "tyrell":
        return `${tyrell}`
      case "mormont":
        return `${mormont}`
      case "hornwood":
        return `${hornwood}`
      case "frey":
        return `${frey}`
      default:
        return `${stark}`
    }
  }

  render() {
    return (
      <div className="App">
        <Nav 
          correct={this.state.correct} 
          topscore={this.state.topscore} 
          message={this.state.message}
        />
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image 
              src={this.imgSwitch(image.name)} 
              name={image.name} key={image.name} 
              pickImg={this.pickImg}  
            />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
