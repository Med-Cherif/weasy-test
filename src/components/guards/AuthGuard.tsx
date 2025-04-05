import useAuthStore from "@/stores/auth-store";
import React, { use } from "react";

const AuthGuard = () => {
  const accessToken = useAuthStore((store) => store.accessToken);

  if (accessToken) {
    // return
  }

  return <div>AuthGuard</div>;
};

export default AuthGuard;
