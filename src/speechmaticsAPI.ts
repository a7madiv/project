import axios from "axios";

const API_URL = "https://api.speechmatics.com/v2/jobs"; // API endpoint
const API_KEY = "your-api-key"; // Use your actual API Key

export const transcribeAudio = async (audioFile: File) => {
  const formData = new FormData();
  formData.append("audio", audioFile);

  try {
    const response = await axios.post(
      `${API_URL}/asr/transcriptions?access_token=${API_KEY}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data; // Return the transcription data
  } catch (error) {
    console.error("Error with transcription API", error);
    throw new Error("Error while transcribing audio");
  }
};
