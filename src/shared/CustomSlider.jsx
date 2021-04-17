import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const CustomSlider = ({ value, setValue, text, id }) => {

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ margin: '15px 5px' }}>
      <Typography id={id} align='center' gutterBottom>
        {text}
      </Typography>
      <Slider
        min={1}
        max={100}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby={id}
      />
    </div>
  );
}

export default CustomSlider