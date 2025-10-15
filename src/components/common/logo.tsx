import Image from "next/image";
import React from "react";
import logo from "@assets/logo.svg";
function Logo() {
  return <Image src={logo} alt="logo" className="cursor-pointer" />;
}

export default Logo;
