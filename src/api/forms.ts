import axios from "axios";

export function getForm(token: string, productId: string | undefined) {
  return axios.get("/api/forms?productId="+productId)
}