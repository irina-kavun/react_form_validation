import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  consent: Yup.bool()
    .test(
      'consent',
      'You have to agree with our Terms and Conditions!',
      value => value === true
    )
    .required(
      'You have to agree with our Terms and Conditions!'
    ),
});
