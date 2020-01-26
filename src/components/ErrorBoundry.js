import React, { Component } from 'react';


class ErrorBoundry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

componentDidCatch(error, info) {
    this.setState({ hasError: true }) // this referes to the object it is in atm.

}


    render() {
        if (this.state.hasError) {
            return <h1>Oops. That's not good.</h1>
        }
        return this.props.children
    }

}



export default ErrorBoundry;

// Line 13 is a new lifecycle hook in react.
// props in line 6 and 7 is so we have access to the properties.
// remember props is the state being used in the child component of the parent component containing the state.
// line 9 is a property with a value.
// what we doing here is creating a ErrorBoundry component to wrap around the CardList component to catch errors from the CardList.
// line 19 is the default render. You got to render the code you just created. line 20 is a check to see if a condition is met or not.
// line 23 says otherwisde just render the children of the ErrorBoundry component.
// how we going to change hasError in line 9? React 16 has new lifecycle method. This cathces the error.