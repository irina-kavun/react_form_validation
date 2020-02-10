import React from 'react';
import {Field, reduxForm} from "redux-form";
import {TextField, Button, InputLabel, FormControl, Select, FormHelperText} from '@material-ui/core/index';
import {validate} from '../../utils/validation/validate';


const renderField = ({input, label, type, meta }) => {
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <div className="text-field-wrap">
      <TextField
        {...input}
        label={label}
        type={type}
        variant="outlined"
        autoComplete="off"
        helperText={errorText}
        error={!!errorText}
      />
    </div>
  );
};

const renderSelect = ({input, meta}) => {
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <FormControl error={!!errorText}>
      <InputLabel htmlFor="age-native-simple">
        Age
      </InputLabel>
      <Select
        native
        {...input}
        inputProps={{
          name: 'age',
          id: 'age-native-simple',
        }}
      >
        <option value=""/>
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
      {errorText && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  )
};

const onSubmit = values => console.log(values);

export const ReduxForm = reduxForm({
  form: 'registration',
  onSubmit,
  validate
})(props => {
  const {handleSubmit, pristine, reset, submitting} = props;

  return (
    <div>
      <h1 className="page-title">Redux Form Validation</h1>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <Field
          name="name"
          label="Name"
          type="text"
          component={renderField}
        />
        <Field
          name="email"
          label="Email"
          type="email"
          component={renderField}
        />
        <Field
          name="password"
          label="Password"
          type="password"
          component={renderField}
        />

        <Field
          className="select-age"
          name="age"
          component={renderSelect}/>

        <div className="button-block">
          <Button
            type="submit"
            variant="contained"
            disabled={submitting}>
            Submit
          </Button>
          <Button
            type="button"
            variant="contained"
            disabled={pristine || submitting}
            onClick={reset}>
            Clear Values
          </Button>
        </div>
      </form>
    </div>
  )
});