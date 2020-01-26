import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    return (
        <div>
            {
            robots.map((user, i) => {
            return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
            })  
            }
        </div>
    )
};



export default CardList;

// Always use .map instead of forEach.
// For loops always use a key. Video 208 explains why.
// above function is a pure function. its deterministic. It recieves an input and sends the same type of output at all times.
// These components are therefore pure components. Props never change, they're just inputs you get that you never modified before.
// State is something that describes your app. State is simply an object that describes your application. 
// The state describes the robots and whatever is entered in the searchbox.
// Able to change the state. Able to change the searchbox and the robots that gets displayed.
// Props are simply things that come out of state. Parent component (with State) feeds
// state into a child component and in the child component it becomes a property (prop). Child cannot change the prop. 


    // The below error is sorted by using the robots as parameter in line 4
// ./src/CardList.js
//   Line 7:15:  'robots' is not defined  no-undef
//   Line 7:35:  'robots' is not defined  no-undef
//   Line 7:58:  'robots' is not defined  no-undef
//   Line 8:15:  'robots' is not defined  no-undef
//   Line 8:35:  'robots' is not defined  no-undef
//   Line 8:58:  'robots' is not defined  no-undef
//   Line 9:15:  'robots' is not defined  no-undef
//   Line 9:35:  'robots' is not defined  no-undef
//   Line 9:58:  'robots' is not defined  no-undef


// the below code will now be looped above.
/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/> */