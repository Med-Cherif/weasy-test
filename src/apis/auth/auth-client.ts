import { httpClient } from "../http-client";
import { LoginRequestBody } from "./auth-types";

const authClient = {
  login(data: LoginRequestBody) {
    return httpClient.post("/auth/login", data).then((res) => res.data);
  },
};

export default authClient;
