import * as Yup from "yup";

export const step1Schema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  dob: Yup.date().required("Date of Birth is required"),
  selectedGender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Invalid email"),
});

export const step2Schema = Yup.object().shape({
  selectedEducation: Yup.string().required("Required"),
  selectedEducationLevel: Yup.string().required("Required"),
  degree: Yup.string().required("Required"),
  college: Yup.string().required("Required"),
  completionMonth: Yup.string().required("Required"),
  completionYear: Yup.string().required("Required"),
});

export const step3Schema = Yup.object().shape({
  experienceStatus: Yup.number().required("Required"), // Ensures experienceStatus is always required
  experienceYear: Yup.string().when("experienceStatus", {
    is: 1, // Only required if experienceStatus is 1 (Yes)
    then: (schema) => schema.required("Year Required"),
    otherwise: (schema) => schema.nullable(),
  }),
  experienceMonth: Yup.string().when("experienceStatus", {
    is: 1,
    then: (schema) => schema.required("Month Required"),
    otherwise: (schema) => schema.nullable(),
  }),
  jobTitle: Yup.string().when("experienceStatus", {
    is: 1,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.nullable(),
  }),
  jobRole: Yup.string().when("experienceStatus", {
    is: 1,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.nullable(),
  }),
  companyName: Yup.string().when("experienceStatus", {
    is: 1,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.nullable(),
  }),
  industry: Yup.string().when("experienceStatus", {
    is: 1,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.nullable(),
  }),
  monthlySalary: Yup.string().when("experienceStatus", {
    is: 1,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.nullable(),
  }),
  startCompanyMonth: Yup.string().when("experienceStatus", {
    is: 1,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.nullable(),
  }),
  startCompanyYear: Yup.string().when("experienceStatus", {
    is: 1,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.nullable(),
  }),
  jobType: Yup.string().when("experienceStatus", {
    is: 1,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.nullable(),
  }),
});
