import React, { Component } from "react";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import Navbar from "../components/Navbar";
import "../index.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
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

    if (!robots.length) {
      return <h1 className="tc">Loading...</h1>;
    } else {
      return (
        <div className="mv7 tc">
          <Navbar onChange={this.onSearchChange} />
            <ErrorBoundary>
              <CardList  robots={filteredRobots} />
            </ErrorBoundary>
        </div>
      );
    }
  }
}

export default App;
