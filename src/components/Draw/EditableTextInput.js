import React, { useState } from "react";
import { Html } from "react-konva-utils";

export function EditableTextInput({
  x,
  y,
  width: stickyWidth,
  height: stickyHeight,
  value,
  onChange,
  isEditing,
  fontSize,
  italic,
  textAlign,
  fontWeight,
  fontFamily,
  textDecoration,
}) {
  const [inputWidth, setInputWidth] = useState(stickyWidth - 20);
  const [inputHeight, setInputHeight] = useState(stickyHeight - 20);

  const style = {
    width: "100%",
    height: "100%",
    border: "none",
    alignItems:"center",
    justifyContent:"center",
    
    height:"250px",
    padding:"1px",
    margin: "0px",
    background: "none",
    outline: "none",
    textDecoration: textDecoration ? "underline" : "none",
    color: "black",
    fontSize: `${fontSize}px`,
    fontFamily: fontFamily,
    textAlign: textAlign,
    fontStyle: italic ? "italic" : "normal",
    fontWeight: fontWeight ? "bold" : "normal",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    overflow:"none",
  };

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleEscapeKeys = (e) => {
    if (e.keyCode === 27) {
      // Handle ESC key
      e.preventDefault();
    }
  };

  return (
    <Html
      groupProps={{ x, y }}
      divProps={{
        backgroundColor: "red",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: isEditing ? "auto" : "none",
      }}
    >
      <textarea
        value={value}
        onChange={handleChange}
        onKeyDown={handleEscapeKeys}
        resize="none"
        style={style}
        onInput={(e) => {
          setInputWidth(e.target.scrollWidth + 2);
          setInputHeight(e.target.scrollHeight + 2);
        }}
      />
    </Html>
  );
}
