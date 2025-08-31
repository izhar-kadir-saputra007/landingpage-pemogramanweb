import api from "./axios";

export const uploadWargaData = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  
  const res = await api.post("/warga/process-data", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};