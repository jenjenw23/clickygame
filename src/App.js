import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SpaceCard from "./components/SpaceCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    topScore: 0,
    feedback:"Click on an image to begin", 
    clicked: []
  };

  onClickHandler = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.state.clicked.push(id);   
      this.scoreHandler();
      this.shuffleCards();
    } else if (this.state.score === 12) {
        this.scoreHandler();
        this.resetHandler();
    } else {
        this.setState({feedback: "You guessed incorrectly! Play again!"}); 
        this.resetHandler();
    }
  };
 
  scoreHandler = () => {
    const newScore = this.state.score + 1;
    this.setState({score: newScore});    
    if (this.state.score === 12) {
      this.setState({feedback: "You win! Play again!"}); 
    }  else {
      this.setState({feedback: "You guessed correctly!"});      
    }
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } 
  }
 
  shuffleCards = () => {
    let array = this.state.cards;
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  resetHandler = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    this.shuffleCards();
  };

  // Render a SpaceCard component for each card object
  render() {
    return (
       <Wrapper>
        <Navbar />
        <Jumbotron />
        
        <div className="container">
          <div className="row" >
            <div className="col-lg-6 text-center">
              <h3>{this.state.feedback}</h3> 
            </div>
            <div className="col-lg-6 text-center">
              <h3>Score: {this.state.score} | Top Score: {this.state.topScore}</h3> 
            </div>
          </div>
            <div className="row">
              {this.state.cards.map(card => (
                <SpaceCard
                onClickHandler={this.onClickHandler}
                  id={card.id}
                  key={card.id}
                  name={card.name}
                  image={card.image}
                  clicked={card.clicked}
                />
              ))}
            </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
