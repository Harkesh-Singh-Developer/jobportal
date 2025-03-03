import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../config/Config";
import AuthContext from "../../context/Auth";
import AppBarComponent from "../AppbarComponent";
import Step1 from "../pages/steps/Step1";
import Step2 from "../pages/steps/Step2";
import Step3 from "./steps/Step3";

function Basic_Info() {
  const { user, logout } = useContext(AuthContext);
  const [uid, setUid] = useState(null);
  const [step, setStep] = useState(1);
  // Form Data
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    selectedGender: "",
    email: "",
    selectedEducation: "",
    selectedEducationLevel: "",
    degree: "",
    college: "",
    completionMonth: "",
    completionYear: "",
    experience: "",
    expMonth: "",
    expYear: "",
  });

  useEffect(() => {
    setUid(user?.uid);
  }, [user]);

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    console.log(formData);
    toast("Sending Data...");
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <>
      <ToastContainer />
      <AppBarComponent logout={logout} uid={uid} />
      {step === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
    </>
  );
}

export default Basic_Info;
// TODO formik, yup validation
// TODO layout adjustment. so that image will not rerender
