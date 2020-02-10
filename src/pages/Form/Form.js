import React, {Fragment} from 'react';
import {useForm} from '../../useForm';
import {TextField, Checkbox, Button} from '@material-ui/core';
import {validate} from '../../utils/validation/validate';

export const Form = () => {
const {
  values,
  errors,
  handleChange,
  handleSubmit,
} = useForm(submit, validate);

  function submit() {
    console.log(values);
  }
  return (
    <Fragment>
      <h1 className="page-title">Basic React Form Validation</h1>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          required
          name="name"
          label="Name"
          autoComplete="off"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          {...errors.name && {helperText: errors.name, error: true}}
        />
        <TextField
          required
          name="email"
          label="Email"
          type="email"
          autoComplete="off"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          {...errors.email && {helperText: errors.email, error: true}}
        />
        <TextField
          required
          name="password"
          label="Password"
          type="password"
          autoComplete="off"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          {...errors.password && {helperText: errors.password, error: true}}
        />
        <div className="form-checkbox">
          <Checkbox
            onChange={handleChange}
            type="checkbox"
            name="isCheckbox"
            value={values.consent}
            color="primary"
          />
          <p>A checkbox is a GUI widget that permits the user to make a binary choice</p>
        </div>
        <Button type="submit" variant="contained">SUBMIT</Button>
      </form>
    </Fragment>
  );
};