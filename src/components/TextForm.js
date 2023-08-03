import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick2 = (e) => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnClickdel = (e) => {
    let newText = "";
    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleFindWord = () => {
    let newText = text.replaceAll(word, "");
    setText(newText);
  };
  const handleFind = (e) => {
    setF(e.target.value);
  };

  const [word, setF] = useState("find word..");
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2 className="my-2 ">{props.heading}</h2>
        <div className=" mb-3">
          <label htmlFor="mybox"></label>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#3c3c3cf2",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-info ml-3 " onClick={handleOnClick2}>
          Convert to LowerCase
        </button>
        <button className="btn btn-warning ml-3 " onClick={handleOnClickdel}>
          Clear
        </button>
        <button onClick={speak} className="btn btn-success ml-3">
          {" "}
          <span id="speak" className="material-icons">
            record_voice_over
          </span>
        </button>
      </div>
      <div className="container my-3">
        <h3>Find & delete </h3>
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#3c3c3cf2",
            color: props.mode === "light" ? "black" : "white",
          }}
          className="form-control"
          value={word}
          onChange={handleFind}
          id="mybox"
          rows="1"
        ></textarea>
        <button className="btn btn-warning my-3" onClick={handleFindWord}>
          Go
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary:</h3>
        <p>
          {" "}
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview:</h3>
        <p>{text.length > 0 ? text : "--Enter text to preview--"}</p>
      </div>
    </>
  );
}
