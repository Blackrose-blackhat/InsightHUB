import React from "react";

const Features = () => {
  return (
    <main className="h-screen flex flex-col justify-start items-center align-middle w-full">
        <div className="w-1/2 h-[2px] bg-neutral-500/40" />

      <div className="flex flex-row justify-between w-1/2">
        <div className="w-[2px] h-4 bg-neutral-500/40" />
        <div className="w-[2px] h-4 bg-neutral-500/40" />
      </div>
      <h1 className="text-4xl text font-semibold">Features</h1>
    </main>
  );
};

export default Features;
