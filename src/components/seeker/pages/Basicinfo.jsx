import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../config/Config";
import AuthContext from "../../context/Auth";
import AppBarComponent from "../AppbarComponent";
import banner1 from "../../../assets/images/banner1.png";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import Step6 from "./steps/Step6";
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
      <Grid container spacing={2} justifyContent="center" mt={5}>
        <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img src={banner1} alt="Banner1" />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          {step === 11 && (
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
          {step === 1 && (
            <Step4
              formData={formData}
              setFormData={setFormData}
              onBack={handleBack}
              onNext={handleNext}
            />
          )}
          {step === 5 && (
            <Step5
              formData={formData}
              setFormData={setFormData}
              onBack={handleBack}
              onNext={handleNext}
            />
          )}
          {step === 6 && (
            <Step6
              formData={formData}
              setFormData={setFormData}
              onBack={handleBack}
              onNext={handleNext}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Basic_Info;
