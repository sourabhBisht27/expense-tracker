import instance from "./instance";

export const register = (registerUser) => {
  return instance.post("/api/v1/auth/register", registerUser);
};

export const login = (loginUser) => {
  return instance.post("/api/v1/auth/login", loginUser);
};
