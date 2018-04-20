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
    topScore: 0
  };

  onClickHandler = id => {
    if (this.state.score > 12) {
      this.resetHandler();
    }else{
      this.scoreHandler();
      this.shuffleCards();
      console.log(this.state);  
    }
  };
 
  scoreHandler = () => {
    const newScore = this.state.score + 1;
    this.setState({score: newScore});
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
      topScore: this.state.topScore
    });
    this.shuffleCards();
  };
  

  // Render a SpaceCard component for each card object
  render() {
    return (
       <Wrapper>
        <Navbar />
        <Jumbotron />
        <div className="row">
          <h3>Score: {this.state.score} | Top Score: {this.state.topScore}</h3> 
        </div>
        <div className="container">
          {this.state.cards.map(card => (
            <SpaceCard
            onClickHandler={this.onClickHandler}
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
              selected={card.selected}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
