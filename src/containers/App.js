import React, { Component } from 'react';
import CardList from '../components/CardList';      
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {       // Declaring a class 
    constructor() {
        super()
        this.state = {              // This is the way to use our state. Here the state is describing the app.
            robots: [],
            searchfield: ''
    }
}

    componentDidMount() {       // understand later.
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => { 
            return response.json();

        })
        
        .then(users => { 
            this.setState({ robots: users })
        
        });

    }

    onSearchChange = (event) => {
            this.setState({ searchfield: event.target.value })
            
    };

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        
        return !robots.length ?
            <h1>Loading</h1> :
        
            (
        
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
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

// App component has state, a piece of data that describes the App. Because they have state we call them smart components.



















