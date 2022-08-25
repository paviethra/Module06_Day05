import React from "react";

export const AIresult = props => {
  const { one, two, three, four, five, six, AIChoice } = props.allstates;
  if (AIChoice === 1) {
    return (
        <div className="result">
        <div> <h3>Robot: </h3> </div>
        <div><img alt="dice" width="20%" src={one} /></div>
      </div>
    );
  } else if (AIChoice === 2) {
    return (
      <div className="result">
      <div> <h3>Robot: </h3> </div>
        <div><img alt="dice" width="20%" src={two} /></div>
      </div>
    );
  } else if (AIChoice === 3) {
    return (
        <div className="result">
       <div> <h3>Robot: </h3> </div>
        <div><img alt="dice" width="20%" src={three} /></div>
      </div>
    );
  } else if (AIChoice === 4) {
    return (
        <div className="result">
        <div> <h3>Robot: </h3> </div>
        <div><img alt="dice" width="20%" src={four} /></div>
      </div>
    );
  } else if (AIChoice === 5) {
    return (
        <div className="result">
        <div> <h3>Robot: </h3> </div>
        <div><img alt="dice" width="20%" src={five} /></div>
      </div>
    );
  } else if (AIChoice === 6) {
    return (
        <div className="result">
        <div> <h3>Robot: </h3> </div> 
        <div><img alt="dice" width="20%" src={six} /></div>
      </div>
    );
  } else {
    return null;
  }
};