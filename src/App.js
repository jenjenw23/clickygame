import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SpaceCard from "./components/SpaceCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
       <Wrapper>
        <Navbar />
        <Jumbotron />
        <div className="container">
        {this.state.cards.map(card => (
          <SpaceCard
            // removeFriend={this.removeFriend}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
