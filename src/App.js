import React, { useState, createRef } from "react";
import "./Attachment.css";

export default function App() {
  const [isHighlete, setHighlated] = useState(false);
  const [files, setFiles] = useState([]);
  let inputElement = createRef();

  const dragEnter = (e) => {
    e.preventDefault();
    setHighlated(true);
  };

  const dragleave = (e) => {
    setHighlated(true);
  };
  const drop = (e) => {
    e.preventDefault();
    setHighlated(false);
    setFiles(e.dataTransfer.files);
  };
  const handleDrag = (event) => {
    setFiles(event.target.files);
  };

  return (
    <div className="drag-main">
      <div
        className="drag-main-droper"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDragEnter={dragEnter}
        onDrop={drop}
        onDragLeave={dragleave}
      >
        Drag here <br />
        <button
          onClick={() => {
            inputElement.click();
          }}
        >
          Your text here
        </button>
        <input
          type="file"
          ref={(el) => (inputElement = el)}
          style={{ display: `none` }}
          onChange={handleDrag}
        ></input>
      </div>
    </div>
  );
}
