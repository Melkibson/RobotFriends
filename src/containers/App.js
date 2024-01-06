import React, { Component } from "react";
import { robots } from "../constants/robots"; // Ensure this is the correct import path
import CardList from "../components/CardList";
import MainTitle from "../components/MainTitle";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
    }).then(users => {
      this.setState({robots: users});
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
};

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if(!robots.length) {
      return <h1 className="tc">Loading...</h1>
    } else {
    return (
      <div className="tc">
        <MainTitle label="RobotFriends" />
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
);
    }
    
  }
}

export default App;
