import React from "react";
import { ResizableText } from "./ResizableText";
import { EditableTextInput } from "./EditableTextInput";

export function EditableText({
  x,
  y,
  isEditing,
  isTransforming,
  onToggleEdit,
  onToggleTransform,
  onChange,
  onResize,
  text,
  width,
  height,
  onKeyDown,
  fontSize,
  italic,
  textAlign,
  fontWeight,
  fontFamily,
  onTextDecoration,
}) {
  if (isEditing) {
    return (
      <EditableTextInput
        x={x + 10}
        y={y + 10} // Adjusted the y-coordinate to align with the top of the sticky note
        width={width - 20}
        height={height - 20} // Adjusted the height to fit inside the sticky note
        value={text}
        onChange={onChange}
        fontSize={fontSize}
        italic={italic}
        textAlign={textAlign}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        textDecoration={onTextDecoration}
        onResize={onResize} // Pass onResize to handle resizing of the sticky note
      />
    );
  }
  return (
    <ResizableText
      x={x}
      y={y}
      isSelected={isTransforming}
      onClick={onToggleTransform}
      onDoubleClick={onToggleEdit}
      onResize={onResize}
      text={text}
      width={width}
    />
  );
}
