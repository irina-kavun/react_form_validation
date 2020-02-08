import React from 'react';

import {Radio, RadioGroup, FormControlLabel, FormControl}  from '@material-ui/core';

export const RadioButtonsGroup = ({ gender, handleRadioSelect }) => {
  return (
    <div className="radio-group">
      <FormControl component="fieldset" >
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={gender}
          onChange={event => handleRadioSelect(event.target.value)}>
          <FormControlLabel
            name='female'
            value ='female'
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            name='female'
            value='male'
            control={<Radio />}
            label="Male"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
