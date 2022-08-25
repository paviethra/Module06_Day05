import React from "react";

export const YourResult = props => {
  const { one, two, three, four, five, six, yourChoice } = props.allstates;
  if (yourChoice === 1) {
    return (
        <div className="result">
        <div> <h3>You:</h3> </div> 
        <div><img alt="dice" width="20%" src={one} /></div>
      </div>
    );
  } else if (yourChoice === 2) {
    return (
        <div className="result">
        <div> <h3>You:</h3> </div> 
        <div><img alt="dice" width="20%" src={two} /></div>
      </div>
    );
  } else if (yourChoice === 3) {
    return (
        <div className="result">
        <div> <h3>You:</h3> </div>
        <div><img alt="dice" width="20%" src={three} /></div>
      </div>
    );
  } else if (yourChoice === 4) {
    return (
        <div className="result">
        <div> <h3>You:</h3> </div>
        <div><img alt="dice" width="20%" src={four} /></div>
      </div>
    );
  } else if (yourChoice === 5) {
    return (
        <div className="result">
        <div> <h3>You:</h3></div> 
        <div><img alt="dice" width="20%" src={five} /></div>
      </div>
    );
  } else if (yourChoice === 6) {
    return (
        <div className="result">
       <div> <h3>You:</h3> </div>
        <div><img alt="dice" width="20%" src={six} /></div>
      </div>
    );
  } else {
    return null;
  }
};