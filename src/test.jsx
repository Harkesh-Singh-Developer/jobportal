import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";

const AIChatbot = () => {
  const [skill, setSkill] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async () => {
    setLoading(true);
    setQuestions([]);

    const prompt = `Generate 5 interview questions for a candidate with:
    - Skill: ${skill}
    - Education: ${education}
    - Experience: ${experience} years.
    The questions should be relevant to the job and difficulty level should match the experience.`;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [{ role: "system", content: prompt }],
          temperature: 0.7,
          max_tokens: 300,
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse = response.data.choices[0].message.content;
      setQuestions(aiResponse.split("\n").filter((q) => q.trim() !== ""));
    } catch (error) {
      console.error("Error fetching AI-generated questions:", error);
      setQuestions(["Failed to fetch questions. Please try again later."]);
    }

    setLoading(false);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 500, mx: "auto", textAlign: "center" }}>
      <Typography variant="h5">AI Interview Chatbot</Typography>

      <TextField
        label="Skill"
        fullWidth
        sx={{ my: 1 }}
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <TextField
        label="Education"
        fullWidth
        sx={{ my: 1 }}
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <TextField
        label="Experience (years)"
        fullWidth
        sx={{ my: 1 }}
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        sx={{ my: 2 }}
        onClick={fetchQuestions}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Get Questions"}
      </Button>

      {questions.length > 0 && (
        <Box sx={{ mt: 2, textAlign: "left" }}>
          <Typography variant="h6">AI-Generated Questions:</Typography>
          {questions.map((q, index) => (
            <Typography key={index} sx={{ mt: 1 }}>
              {index + 1}. {q}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AIChatbot;
