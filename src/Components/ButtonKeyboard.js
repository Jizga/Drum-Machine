import React from "react";
import "./ButtonKeyboard.css";

export default function ButtonKeyboard(props) {
  const start = (url) => {
    let audio = new Audio(url);
    audio.play();
  };

  return (
    <div>
    <button
      className='drum-pad'
      id={props.id}
      onClick={() => start(props.url)}
    >
      {props.keyTrigger}
    </button>
    <audio className='clip' id={props.keyTrigger} src={props.clip}></audio>
    </div>
  );
}
