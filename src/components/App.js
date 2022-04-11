import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import "./App.css";

import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

import CardList from "./CardList";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users);
      });
    console.log(count);
  }, [count]);

  const onsearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  {
    const filteredbooks = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <Button onClick={() => setCount(count + 1)} variant="contained">
            Click Me!
          </Button>
          <SearchBox searchChange={onsearchChange} />
          <Scroll>
            <CardList robots={filteredbooks} />
          </Scroll>
        </div>
      );
    }
  }
};

export default App;
