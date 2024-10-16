import Image from "next/image";
import Header from "@/components/Navigation/Header";
import { Hero } from "@/components/Home/Hero";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
    </div>
  );
}
