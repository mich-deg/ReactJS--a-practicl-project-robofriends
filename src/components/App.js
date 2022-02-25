import React, {Component} from "react";

import "./App.css"


import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

import CardList from './CardList'


class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => { return response.json();})
        .then(users => { this.setState({robots:users})})
    }

    onsearchChange = (event) => {

        this.setState({searchfield:event.target.value})
        
    } 

   render () {

    const filteredbooks = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    if(this.state.robots.length === 0){
        return <h1>Loading</h1>
    }
    else{
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange = {this.onsearchChange} />
                <Scroll>
                <CardList robots = {filteredbooks}/>
                </Scroll>
                
            </div>
        );
    }

   }
    
}

export default App;