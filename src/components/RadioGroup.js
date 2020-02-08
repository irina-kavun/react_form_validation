import React from 'react';

import {Radio, RadioGroup, FormControlLabel, FormControl}  from '@material-ui/core';

export const RadioButtonsGroup = ({ gender, handleRadioSelect }) => {
  return (
    <div className="radio-group">
      <FormControl component="fieldset" >
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={gender}
          onChange={event => handleRadioSelect(event.target.value)}>
          <FormControlLabel
            value ='female'
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            value='male'
            control={<Radio />}
            label="Male"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
