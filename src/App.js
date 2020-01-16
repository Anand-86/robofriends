import React, { Component } from 'react';
import CardList from './CardList';      
import SearchBox from './SearchBox';
import { robots } from './robots';


class App extends Component {       // Declaring a class 
    constructor() {
        super()
        this.state = {              // This is the way to use our state. Here the state is describing the app.
            robots: robots,
            searchfield: ''
    }
}

    onSearchChange = (event) => {
            this.setState({ searchfield: event.target.value })
            
    };

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        
        return (
        
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots} />
        </div>
            );
        }
    }

    
export default App;

// h1 was easy and there was no need to creat a component for it but you eant to create a component for the input box.

/* Line 2 and 3 are sibling components that need to communicate 
with each other. So the comms takes place through the parent which is App. 
Use State to do this. */

// Up untill now we just learnt about props that we just keep passing down.
// React just reads the props and just renders something.

// Now CardList accesses robots from line 20.

// At this stage we can comms with the parent.

// Now that I have the value of the search input in the Parent component I can communicate that to the other child components.
// to be used in the other child components.



















