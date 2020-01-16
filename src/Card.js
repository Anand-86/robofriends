import React from 'react';      // We need to import React here so that our program understands JSX.

// Code Change 1 (Destructuring).

const Card = ({ name, email, id }) => {  // Destructuring.
    return (
        <div className='tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2 className='ma1'>{name}</h2>
                <p className='ma1'>{email}</p>
            </div>
        </div>
    );
}

export default Card;


// More can be done to the robots at "https://robohash.org/"
// Make sure you returning one element only. Here it's the <dive> element.

// grow is the imagination
// Template string used above.
// {} -> Javascript expression.

//-----------------------
// Code Change 1 (Destructuring).

// const Card = (props) => {
//     return (
//         <div className='tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5'>
//             <img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`} />
//             <div>
//                 <h2 className='ma1'>{props.name}</h2>
//                 <p className='ma1'>{props.email}</p>
//             </div>
//         </div>
//     );
// }

// export default Card;

//-----------------------
// Origanal Code

// const Card = (props) => {
//     const {name, email, id} = props;
//     return (
//         <div className='tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5'>
//             <img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`} />
//             <div>
//                 <h2 className='ma1'>{name}</h2>
//                 <p className='ma1'>{email}</p>
//             </div>
//         </div>
//     );
// }

// export default Card;


























