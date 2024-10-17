"use client";
import Header from "@/components/Navigation/Header";
import { Hero } from "@/components/Home/Hero";
import { Prizes } from "@/components/Home/Prizes";
import { TimelineDemo } from "@/components/Home/Timeline";
import { FAQ } from "@/components/Home/FAQ";
import { People } from "@/components/Home/People";
import Footer from "@/components/Navigation/DevFooter";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Prizes />
      <TimelineDemo />
      <FAQ />
      <People />
      <Footer />
    </div>
  );
}
