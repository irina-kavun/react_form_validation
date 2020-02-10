import {useState, useEffect} from 'react';

export const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    consent: true
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    const {name, value, checked} = event.target;
    setValues({
      ...values,
      [name]: isCheckbox
      ? checked
        : value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

  };


  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  }
};