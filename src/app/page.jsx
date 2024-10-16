import Image from "next/image";
import Header from "@/components/Navigation/Header";
import { Hero } from "@/components/Home/Hero";
import { Prizes } from "@/components/Home/Prizes";
import { TimelineDemo } from "@/components/Home/Timeline";  

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Prizes/>
      <TimelineDemo/>
    </div>
  );
}
