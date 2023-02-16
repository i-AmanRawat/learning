import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

export default function TextForm(props) {
  const eliminate = [
    "with",
    "between",
    "from",
    "and",
    "as",
    "but",
    "if",
    "nor",
    "or",
    "so",
    "yet",
    "a",
    "an",
    "the",
    "as",
    "at",
    "by",
    "for",
    "in",
    "of",
    "off",
    "on",
    "per",
    "to",
    "up",
    "via",
    "is",
  ];
  const [text, setText] = useState("");
  //   text = "new text";     wrong way to change the text
  //   setText("new text");   correct way to change the text
  const [show, setShow] = useState(false);

  const UpCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to upper case!", "Success");
  };

  const LoCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lower case!", "Success");
  };

  const Clear = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "Success");
  };

  const Capitalize = () => {
    const newText = text
      .split(" ")
      .map((el) => {
        return el[0].toUpperCase() + el.slice(1);
      })
      .join(" ");
    setText(newText);
    props.showAlert("Text capitalized!", "Success");
  };

  const TitleCase = () => {
    const newText = text
      .split(" ")
      .map((el) => {
        if (
          eliminate.find((currEl) => {
            if (currEl.toLowerCase() === el.toLowerCase()) return currEl;
          })
        )
          return el.toLowerCase();
        return el[0].toUpperCase() + el.slice(1);
      })
      .join(" ");
    setText(newText);
    props.showAlert("Text converted to title case!", "Success");
  };

  const CopyText = () => {
    const copyText = document.getElementById("textBox");
    copyText.select();
    document.execCommand("copy");
    props.showAlert("Text copied!", "Success");
  };

  const RemoveExtraSpaces = () => {
    const newText = text.split(/[ ]+/); //here we are using regular Expression to select places where we have more than 1 space inorder to replace it with 1 space
    setText(newText.join(" "));
    props.showAlert("Extra spaced removed!", "Success");
  };

  const handleOnChange = (event) => {
    // console.log("handling onchange");
    setText(event.target.value); //this way we are constantly udating the text variable as soon as the use is enter text in the textBox
  };

  const showPreview = () => {
    setShow(!show);
    props.showAlert("Displaying preview!", "Success");
  };

  return (
    <>
      <div
        className={`container my-5 text-${
          props.mode === "light" ? "#000000" : "light"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
          <textarea
            placeholder="Enter Text Here"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="textBox"
            rows="10"
          ></textarea>
        </div>

        <button type="button" onClick={UpCase} className="btn btn-primary mx-1">
          Upper Case
        </button>

        <button type="button" onClick={LoCase} className="btn btn-primary mx-1">
          Lower Case
        </button>

        <button
          type="button"
          onClick={Capitalize}
          className="btn btn-primary mx-1"
        >
          Capitalisation
        </button>

        <button
          type="button"
          onClick={TitleCase}
          className="btn btn-primary mx-1"
        >
          Title Case
        </button>

        <button
          type="button"
          onClick={RemoveExtraSpaces}
          className="btn btn-primary mx-1"
        >
          Remove Extra Spaces
        </button>

        <button
          type="button"
          onClick={CopyText}
          className="btn btn-primary mx-1"
        >
          Copy Text
        </button>

        <button type="button" onClick={Clear} className="btn btn-primary mx-1">
          Clear
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "#000000" : "light"
        }`}
      >
        <h2>Your text summary</h2>
        <p>
          {text.trim().length === 0 ? 0 : text.trim().split(" ").length} words
          and {text.length} characters
        </p>
        <p>{0.008 * 60 * text.split(" ").length} Second read</p>
        <h2>Preview</h2>
        {show ? (
          <p className="" id="preview">
            {text}
          </p>
        ) : null}

        <button className="btn btn-primary" onClick={showPreview}>
          Show Preview
        </button>
      </div>
    </>
  );
}
