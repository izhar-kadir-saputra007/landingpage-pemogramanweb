import api from "./axios";

export const getStatistikWarga = async () => {
  const res = await api.get("/warga/statistik");
  return res.data.data; // langsung ambil "data"
};
