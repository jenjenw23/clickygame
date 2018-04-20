import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SpaceCard from "./components/SpaceCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cars to the cards json array
  state = {
    cards,
    score: 0
  };

  onClickHandler = id => {
    this.scoreHandler();
    console.log(this.state);
    // this.shuffleCards();
  }
 
  scoreHandler = () => {
    const newScore = this.state.score + 1;
    this.setState({score: newScore});
  }
 
  shuffleCards = () => {
    // shuffle the cards
  }

  // Render a SpaceCard component for each card object
  render() {
    return (
       <Wrapper>
        <Navbar />
        <Jumbotron />
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
