import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Button, TextField, Checkbox, FormControlLabel} from "@material-ui/core/index";

const textFields = [
  {name: "name", label: "Name"},
  {name: "email", label: "Email", type: "email"},
  {name: "password", label: "Password", type: "password"}
];

export const ReactHookForm = () => {
  const {register, control, handleSubmit, errors, reset} = useForm();

  const onSubmit = data => {
    console.log(data);
    reset()
  };
  const hasError = inputName => !!(errors && errors[inputName]);

  return (
    <div>
      <h1 className="page-title">Form Validation with React Hook Form</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="fields-wrap">
          {textFields.map(field => (
            <TextField
              key={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              inputRef={register({required: true})}
              error={hasError(field.name)}
              helperText={hasError(field.name) && `${field.label} is mandatory`}
              autoComplete="off"
              variant="outlined"
            />
          ))}
        </div>
        <Controller
          as={<FormControlLabel
            control={<Checkbox/>}
            label="Your consent is required here"
          />}
          inputRef={register({required: true})}
          name="consent"
          control={control}
          mode="onChange"
          defaultValue={true}
        />
        {hasError("consent") && <p className="form-field-error">your consent is mandatory</p>}
        <div className="button-block">
          <Button type="submit" variant="contained">
            Submit
          </Button>
          <Button type="button" variant="contained" onClick={reset}>
            Clear Values
          </Button>
        </div>
      </form>
    </div>
  )
};