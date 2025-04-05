import React from "react";

const LoginImage = () => {
  return (
    <div className="hidden md:flex bg-zinc-900 py-10 px-10 lg:px-20 items-center text-white">
      <div className="space-y-4">
        <h2 className="font-semibold text-4xl">Weasydoo</h2>
        <p className="text-lg font-light">
          Weasydoo ERP Integrator Specialized in Free and Open Source
          Technologies.
        </p>
        {/* <Link className="text-primary font-medium text-xl underline" href={"/"}>
          Visit Our Home Page
        </Link> */}
      </div>
    </div>
  );
};

export default LoginImage;
