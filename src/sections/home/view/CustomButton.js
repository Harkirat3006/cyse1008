// src/components/CustomButton.js
import React from 'react';
import Button from '@mui/material/Button';

// CustomButton component accepts props like 'onClick', 'text', 'variant', 'color', etc.
const CustomButton = ({ onClick, text, variant, color, sx,handleClick,clicked }) => {
  return (
    <Button
    variant="contained"
    color="primary" // Primary color theme applied
    sx={{ mt: 2 }} // Optional margin-top for spacing
    onClick={handleClick} // Trigger handleClick on button click
  >
    {clicked ? 'You Clicked Me!' : 'Hi I am a Button'}
    </Button>
  );
};

export default CustomButton;
