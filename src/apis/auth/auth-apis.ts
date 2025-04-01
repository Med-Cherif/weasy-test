import { useMutation } from "@tanstack/react-query";
import authClient from "./auth-client";
import { LoginRequestBody } from "./auth-types";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginRequestBody) => authClient.login(data),
    onSuccess(data, variables, context) {
      console.log({ data });
    },
    onError(error, variables, context) {
      console.log({ error });
    },
  });
};
