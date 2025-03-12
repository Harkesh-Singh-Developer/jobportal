import * as Yup from "yup";

export const step1Schema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  dob: Yup.date().required("Date of Birth is required"),
  selectedGender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Invalid email"),
});

export const step2Schema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  dob: Yup.date().required("Date of Birth is required"),
  selectedGender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Invalid email"),
});
