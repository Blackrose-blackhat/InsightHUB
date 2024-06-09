import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center align-middle items-center w-full p-5 px-10 fixed top-0 z-50 ">
      <div className="flex-1">
        <h1>Logo</h1>
      </div>

      <div className="flex-1 flex flex-row  items-center space-x-10 text-neutral-100/80">
        <Button variant="ghost">About US</Button>
        <Button variant="ghost">Contact US</Button>
      </div>

      <div className="flex-1 flex flex-row justify-end items-center space-x-10">
        <Button variant="outline">Sign In</Button>
        <Button variant="default">Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
