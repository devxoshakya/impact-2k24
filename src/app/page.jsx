import Image from "next/image";
import Header from "@/components/Navigation/Header";
import { Hero } from "@/components/Home/Hero";
import { Prizes } from "@/components/Home/Prizes";
import { TimelineDemo } from "@/components/Home/Timeline";
import { FAQ } from "@/components/Home/FAQ";
import { People } from "@/components/Home/People";
import { Events } from "@/components/Home/Events";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Prizes />
      <TimelineDemo />
      <FAQ />
      <People />
      <Events />
    </div>
  );
}
