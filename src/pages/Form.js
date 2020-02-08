import React, {Fragment} from 'react';
import {useForm} from '../useForm';
import {TextField, Checkbox, Button} from '@material-ui/core/index';
import {RadioButtonsGroup} from '../components/RadioGroup';
import {validate} from '../validateForm';

export const Form = () => {
  const {
    values,
    gender,
    checked,
    errors,
    handleChange,
    handleCheck,
    handleSubmit,
    handleRadioSelect
  } = useForm(submitted, validate);

  function submitted() {
    console.log(values, gender, checked);
  }

  return (
    <Fragment>
      <h1 className="page-title">Basic React Form Validation</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form">
          <TextField
            required
            name="name"
            label="Name"
            autoComplete="off"
            {...errors.name && {helperText: errors.name, error: true}}
            variant="outlined"
            value={values.name}
            onChange={handleChange}
          />
          <RadioButtonsGroup
            gender={gender}
            handleRadioSelect={handleRadioSelect}
          />
          <TextField
            required
            name="email"
            label="Email"
            autoComplete="off"
            {...errors.email && {helperText: errors.email, error: true}}
            variant="outlined"
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            required
            name="password"
            label="Password"
            autoComplete="off"
            {...errors.password && {helperText: errors.password, error: true}}
            type="password"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
          />
          <div className="form-checkbox">
            <Checkbox
              checked={checked}
              onChange={handleCheck}
              value="secondary"
              color="primary"
            />
            <p>A checkbox is a GUI widget that permits the user to make a binary choice</p>
          </div>
          <Button type="submit" variant="contained">SUBMIT</Button>
        </div>
      </form>
    </Fragment>
  );
};