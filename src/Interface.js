import React from "react";

export const Interface = props => {
  return (
    <>
      <img id="dice"
        alt="choose"
        onClick={props.startGame}
        style={{ cursor: "pointer" }}
        width="08%"
        src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-random.svg"
      />
      <div class="display-container">
        <div className="table" style={{ fontSize: "30px" }}>
            You: {props.yourChoice}  &nbsp; AI: {props.AIChoice}
        </div>
        <span style={{ cursor: "pointer",fontSize:"30px" }} onClick={props.clearState}>
            Clear
        </span>
      </div>
      <div>
        <h2>No.of Games: {props.games}</h2>
      </div>
      
    </>
  );
};