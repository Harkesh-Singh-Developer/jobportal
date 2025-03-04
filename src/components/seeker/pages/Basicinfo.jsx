import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../config/Config";
import AuthContext from "../../context/Auth";
import AppBarComponent from "../AppbarComponent";
import Step1 from "../pages/steps/Step1";
import Step2 from "../pages/steps/Step2";
import Step3 from "../pages/steps/Step3"; // Fixed path issue

function Basic_Info() {
  const { user, logout } = useContext(AuthContext);

  const [step, setStep] = useState(1);

  // Form Data
  const [formData, setFormData] = useState({
    uid: user?.uid || "",
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
    if (user?.uid) {
      setFormData((prevData) => ({
        ...prevData,
        uid: user.uid,
      }));
    }
  }, [user]);
  // Function to Handle Step Change
  const handleNext = async (data) => {
    const updatedData = { ...data, uid: user?.uid || formData.uid }; // Ensure uid is always included

    console.log("Submitting to API:", updatedData);
    try {
      const response = await api.post("/seeker-registration", data);
      console.log("API Response:", response.data);
      if (response.data.status) {
        setFormData(data);
        setStep((prevStep) => prevStep + 1);
      } else {
        toast.error(response.data.message);
      }
      // Save form data and move to next step
    } catch (error) {
      console.error("API Error:", error);
      toast.error(error);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => Math.max(1, prevStep - 1)); // Prevents going below step 1
  };

  return (
    <>
      <ToastContainer />
      <AppBarComponent logout={logout} uid={user?.uid || "Not Logged In"} />
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
