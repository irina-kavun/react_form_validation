import { useState, useEffect } from 'react';

export const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [checked, setChecked] = useState(true);
  const [gender, setGender] = useState('female');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    const {name, value} = event.target;
    setValues({
      ...values,
      [name]: value
    })
  };

  const handleCheck = () => setChecked(!checked);
  const handleRadioSelect = value => setGender(value);

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(()=> {
    if(Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    values,
    gender,
    checked,
    errors,
    handleChange,
    handleCheck,
    handleSubmit,
    handleRadioSelect
  }
};