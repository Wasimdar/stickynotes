import React, { useState, useRef, useCallback } from 'react';
import { Html } from 'react-konva-utils';
import 'font-awesome/css/font-awesome.min.css';

const stickyStyleContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  border: '2px solid black',
  borderRadius: '10px',
  gap: '10px',
  backgroundColor: 'gray',
  padding: '10px',
};

const StickyStyle = ({ x, y, onTextAlignChange, fontFamily, onFontWeight, onItalicChange, onTextDecoration }) => {
  const [selectedFont, setSelectedFont] = useState('');

  const getIconStyle = (iconName) => {
    return {
      fontSize: '20px',
      color: iconName ? 'white' : 'black',
      cursor: 'pointer',
    };
  };

  const groupRef = useRef(null);

  const handleFontChange = (event) => {
    const fontName = event.target.value;
    setSelectedFont(fontName);
    fontFamily(fontName);
  };

  // Use useCallback with dependencies
  const memoizedOnFontWeight = useCallback(onFontWeight, [onFontWeight]);
  const memoizedOnItalicChange = useCallback(onItalicChange, [onItalicChange]);
  const memoizedOnTextDecoration = useCallback(onTextDecoration, [onTextDecoration]);

  return (
    <Html groupRef={groupRef} groupProps={{ x, y }} divProps={stickyStyleContainer}>
      <div style={stickyStyleContainer}>
        <button onClick={memoizedOnFontWeight}>B</button>
        <button onClick={memoizedOnItalicChange}>I</button>
        <button onClick={memoizedOnTextDecoration}>U</button>
        <span>
          <i
            className="fa fa-align-left"
            style={getIconStyle('align-left')}
            onClick={() => onTextAlignChange('left')}
          ></i>
        </span>
        <span>
          <i
            className="fa fa-align-right"
            style={getIconStyle('align-right')}
            onClick={() => onTextAlignChange('right')}
          ></i>
        </span>
        <span>
          <i
            className="fa fa-align-center"
            style={getIconStyle('align-center')}
            onClick={() => onTextAlignChange('center')}
          ></i>
        </span>
        <select value={selectedFont} onChange={handleFontChange}>
          <option value="">Select Font</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>
    </Html>
  );
};

export default StickyStyle;
