import React from "react";
import ReactDOM from "react-dom";

function PhotoPicker() {
  // Define onChange handler
  const onChange = (event) => {
    console.log("File selected:", event.target.files[0]);
  };

  // Define the component for the file picker input
  const component = (
    <input type="file" hidden id="photo-picker" onChange={onChange} />
  );

  return ReactDOM.createPortal(
    component,
    document.getElementById("photo-picker-element")
  );
}

export default PhotoPicker;
