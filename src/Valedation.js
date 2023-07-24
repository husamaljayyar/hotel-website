import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  password: yup.string().min(6).max(32).required("Please enter a password"),
});

export const registerSchema = yup.object({
  name: yup.string().required("Please enter a name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  password: yup.string().min(6).max(32).required("Please enter a password"),
  confirmPassword: yup
    .string()
    .min(6)
    .required("Please enter password confirmation")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const bookingSchema = yup.object({
  name: yup.string(),
  email: yup.string().email("Please Enter A Valid Email"),

  phone: yup.string().min(10).max(32).required("Please Enter Phone"),
  nationality: yup.string().required("Please Enter Nationality"),
  arrivalTime: yup.string().required("Please Enter Arrival Time"),
});
