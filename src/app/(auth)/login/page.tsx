import React from "react";
import LoginForm from "./_components/LoginForm";
import LoginImage from "./_components/LoginImage";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <LoginForm />
      <LoginImage />
    </div>
  );
};

export default LoginPage;
