import React from 'react';
import {Formik, Field, Form, useField} from 'formik';
import {Button, TextField, Checkbox, FormControlLabel, Radio} from "@material-ui/core";
import {validationSchema} from '../utils/validation/validationSchema';

const CustomRadio = ({label, ...props}) => {
  const [field] = useField(props);
  return (
    <FormControlLabel {...field} control={<Radio/>} label={label}/>
  )
};

const CustomTextField = ({variant, label, autoComplete, ...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      {...field}
      variant="outlined"
      label={label}
      autoComplete="off"
      helperText={errorText}
      error={!!errorText}
    />
  )
};

export const FormikForm = () => {
  return (
    <div>
      <h1 className="page-title">Form Validation with Formik</h1>
      <Formik initialValues={{
        name: "",
        email: "",
        password: "",
        consent: true,
        auth: "authorized",
      }} validationSchema={validationSchema}
              onSubmit={(data, {setSubmitting}) => {
        setSubmitting(true);

        console.log(data);
        setSubmitting(false);
      }}
      >
        {({values, errors }) => (
          <Form className="form">
            <CustomTextField
              name="name"
              type="input"
              label="Name"
            />
            <CustomTextField
              name="email"
              type="input"
              label="Email"
            />
            <CustomTextField
              name="password"
              type="password"
              label="Password"
            />
            <div className="single-checkbox-wrap">
              <Field name="consent" type="checkbox" as={Checkbox}/>
              <p>Your consent is required here</p>
            </div>
              {errors.consent && <p className="form-field-error">{errors.consent}</p>}
            <div className="radio-group">
              <CustomRadio name="auth" type="radio" value="authorized" label="authorised"/>
              <CustomRadio name="auth" type="radio" value="unauthorized" label="unauthorised"/>
            </div>
            <Button type="submit" variant="contained">SUBMIT</Button>
            <pre>
              {/*{JSON.stringify(values, null, 2)}*/}
              {/*{JSON.stringify(errors, null, 2)}*/}
            </pre>
          </Form>
        )}
      </Formik>
    </div>
  )
};