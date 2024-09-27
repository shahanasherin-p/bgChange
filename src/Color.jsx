import React, { useState } from 'react';

const ColorChanger = () => {
  const [bgColor, setBgColor] = useState('#ffffff'); 

  const colors = [
    { name: 'Red', hex: '#FF5733' },
    { name: 'Green', hex: '#33FF57' },
    { name: 'Pink', hex: '#C054B1' },
    { name: 'Blue', hex: '#3357FF' },
    { name: 'Yellow', hex: '#F1C40F' },
    { name: 'Purple', hex: '#8E44AD' },
  ];

  const changeColor = (color) => {
    setBgColor(color);
  };

  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };

  const resetColor = () => {
    setBgColor('#ffffff'); 
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: '100vh',
        width:'100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        transition: 'background-color 0.5s ease', 
      }}
    >
      <h1 style={{ color: '#000' }}>Choose a Background Color</h1>
      <input
        type="color"
        onChange={handleColorChange}
        value={bgColor}
        style={{ marginBottom: '20px', cursor: 'pointer' }}
      />
      <div>
        {colors.map((color) => (
          <button
            key={color.hex}
            onClick={() => changeColor(color.hex)}
            style={{
              backgroundColor: color.hex,
              color: '#fff',
              padding: '10px 20px',
              margin: '10px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {color.name}
          </button>
        ))}
      </div>
      <button
        onClick={resetColor}
        style={{
          backgroundColor: '#ccc',
          color: '#000',
          padding: '10px 20px',
          marginTop: '20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Reset Color
      </button>
    </div>
  );
};

export default ColorChanger;
