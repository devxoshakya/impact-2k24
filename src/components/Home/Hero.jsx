"use client";
import React from "react";
import { Vortex } from "../ui/vortex";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/ui/cool.tsx";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <div className="min-w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        // baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-5xl md:text-6xl font-bold text-center">
          IMPACT @2024
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          The first inter-college Hackathon. Where Campuses Collide, Code Ignites, and Innovation Thrives. Ready to Spark Change?
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <CoolMode>
            <Button className="bg-blue-500 hover:bg-blue-700 text-white">
              Register Now!
            </Button>
          </CoolMode>
        </div>
        <div className="flex flex-col mt-8 items-center gap-4 mt-6">
          <h2 className="font-bold font-xs">Powered by</h2>
          <div className="flex gap-4">
            <Avatar className="w-16 h-16 bg-white">
              <AvatarImage src="/images/CSI.png" alt="@csi" className="object-contain"/>
            </Avatar>
            <Avatar className="w-16 h-16 bg-white">
              <AvatarImage src="/images/MIET.png" alt="@miet" className="object-contain p-2"/>
            </Avatar>
            <Avatar className="w-16 h-16 bg-cover bg-white">
              <AvatarImage src="/images/ACIC.png" alt="@acic" className="object-contain"   />
            </Avatar>
          </div>
        </div>
      </Vortex>
    </div>
  );
}
