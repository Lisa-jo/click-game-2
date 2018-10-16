import React, { Component } from "react";
import "./App.css";
import band from "./bands.json";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import BandsCard from "./components/BandsCard";
console.log(band);
class App extends Component {
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    curScore: 0,
    band,
    selected: [],
    unselectedBand: band
  };

  componentDidMount() {
    console.log("component mounted, state is: ", this.state);
  }

  shuffleArray = array => {
    const newArray = [...array];
    console.log("shuffled", newArray);
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    this.setState({ band: newArray });
  };

  selectBand = band => {
    if (!this.state.selected.includes(band)) {
      this.setState({
        selected: this.state.selected.concat(band),
        message: "You guessed correctly!",
        curScore: this.state.curScore + 1,
      });
    } else {
      this.setState({
        message: "You guessed incorrectly!",
        topScore:
          this.state.curScore > this.state.topScore
            ? this.state.curScore
            : this.state.topScore,
        curScore: 0,
        band: band,
        unselectedBand: band
      });
    }
    console.log("selected band is: ", band, " state is: ", this.state);
    

    this.shuffleArray(this.state.band);
  };

  render() {
    return (
      <Wrapper>
        <Nav
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Title />
        {console.log(this.state)}
        {this.state.band.map(band => (
          <BandsCard
            band={band.band}
            image={band.image}
            selectBand={this.selectBand}
            curScore={this.state.curScore}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
