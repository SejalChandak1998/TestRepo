import jwt_decode from "jwt-decode";

export const getInfoFromToken = (): any => {
  const token = localStorage.getItem("token");
  if (token) {
    return jwt_decode(token);
  } else {
    return null;
  }
};
