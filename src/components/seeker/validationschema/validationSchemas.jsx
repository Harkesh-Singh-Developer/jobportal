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
  experienceStatus: Yup.string().required("Required"),
  experienceYear: Yup.string().required("Year Required"),
  experienceMonth: Yup.string().required("Month Required"),
  jobTitle: Yup.string().required("Required"),
  jobRole: Yup.string().required("Required"),
  companyName: Yup.string().required("Required"),
  industry: Yup.string().required("Required"),
  monthlySalary: Yup.string().required("Required"),
  startCompanyMonth: Yup.string().required("Required"),
  startCompanyYear: Yup.string().required("Required"),
});
