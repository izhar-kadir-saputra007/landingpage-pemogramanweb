import api from "./axios";

export const loginUser = async (credentials) => {
  const res = await api.post("/user/login", credentials);
  return res.data;
};

export const registerUser = async (userData) => {
  const res = await api.post("/user/register", userData);
  return res.data;
};

export const logoutUser = async () => {
  const res = await api.post("/user/logout");
  return res.data;
};