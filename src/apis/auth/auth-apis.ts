import { useMutation } from "@tanstack/react-query";
import authClient from "./auth-client";
import { LoginRequestBody } from "./auth-types";
import useAuthStore from "@/stores/auth-store";

export const useLoginMutation = () => {
  const authSuccess = useAuthStore((store) => store.authSuccess);

  return useMutation({
    mutationFn: (data: LoginRequestBody) => authClient.login(data),
    onSuccess(data) {
      const accessToken = data.token;
      authSuccess(accessToken);
    },
  });
};

export const useLogoutMutation = () => {
  const logout = useAuthStore((store) => store.logout);

  return useMutation({
    mutationFn: () => Promise.resolve(),
    onSuccess() {
      logout();
    },
  });
};
