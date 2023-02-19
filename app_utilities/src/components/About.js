import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "light" ? "rgb(26, 27, 34)" : "white",
    backgroundColor: props.mode === "light" ? "white" : "rgb(26, 27, 34)",
  };
  let btnStyle = {
    color: props.mode === "light" ? "rgb(26, 27, 34)" : "white",
    backgroundColor: props.mode === "light" ? "white" : "#212529",
  };
  return (
    <div className="container" style={myStyle}>
      <div className="accordion my-4" id="accordionExample" style={myStyle}>
        <h1 className="mb-3"> Features offered by Textutils</h1>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              style={btnStyle}
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              style={btnStyle}
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutil is a free character counter tool that provides instant
              character count and word count statistics for a given text.
              Textutil reports the number of words and characters. Thus it is
              suitabel for writting text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={btnStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browser such as chrome
              , safari , mozilla, opera, Microsoft edge. It suits to count
              characters in facebook, blog, books, excel document, pdf document,
              essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
