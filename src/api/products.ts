import axios from "axios";

export function getProduct(token: string) {
  const headers = { Authorization: "Bearer "+token }
  return axios.get("/api/products", { headers });
}