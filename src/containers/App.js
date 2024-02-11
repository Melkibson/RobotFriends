import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import Navbar from "../components/Navbar";
import "../index.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <div className="mv7 tc">
      <Navbar onChange={onSearchChange} />
      <ErrorBoundary>
        {!robots.length ? (
          <h1 className="tc">Loading...</h1>
        ) : (
          <CardList robots={filteredRobots} />
        )}
      </ErrorBoundary>
    </div>
  );
};

export default App;
