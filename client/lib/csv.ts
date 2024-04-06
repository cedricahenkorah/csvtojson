import axios from "axios";

const uri = process.env.NEXT_PUBLIC_SERVER_URL;

export async function uploadCSV(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${uri}/upload/`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
}
