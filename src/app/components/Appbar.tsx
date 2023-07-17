import React from "react";
import SignInBtn from "./SignInBtn";

const Appbar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <SignInBtn />
    </header>
  );
};

export default Appbar;
