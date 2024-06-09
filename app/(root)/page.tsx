import Model from "@/components/Model";
import Features from "@/components/landing/features";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Splash } from "next/font/google";

export default function Home() {
  return (
    <main className="  flex flex-col items-center align-middle justify-between w-full ">
      <Header />
      <Features />
    </main>
  );
}
