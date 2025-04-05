import { create } from "zustand";
import { getCookie, setCookie, deleteCookie } from "cookies-next/client";

export interface AuthStore {
  accessToken: string | null;

  authSuccess: (accessToken: string) => void;

  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => {
  return {
    accessToken: getCookie("accessToken") || null,
    authSuccess(accessToken) {
      setCookie("accessToken", accessToken);
      set({ accessToken });
    },
    logout() {
      deleteCookie("accessToken");
      set({ accessToken: null });
    },
  };
});

export default useAuthStore;
