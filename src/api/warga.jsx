import api from "./axios";

export const getDataWarga = async () => {
  const res = await api.get("/warga");
  console.log(res.data);
  return res.data.data; // langsung ambil "data" array
};