"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function People() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  const jury = [{
    id: 1,
    name: "Dr. Prasenjit Das ",
    designation: "Cyber Security Lead",
    image:"/jury/prasenjit-das.png"
  },
  {
    id: 2,
    name: "Dr. Ankur Agarwal ",
    designation: "Associate General Manager",
    image: "/jury/ankur-agarwal.png"
  },
  {
    id: 3,
    name: "Mr. Ashok Bhatt",
    designation: "Executive Director",
    image: "/jury/ashok-bhatt.png"
  },
  ]

const technicalTeam = [
    {
        id: 1,
        name: "Dev Shakya",
        designation: "FullStack Developer",
        image:"/team/devv.jpg"
      },
      {
        id: 2,
        name: "Suryansh Patwal",
        designation: "Frontend Developer",
        image: "/team/suryaaa.png"
      },
]

const organizingTeam = [
    {
        id: 1,
        name: "Yagyansh Singh",
        image:"/team/Yagyansh-Singh.jpg"
      },
      {
        id: 2,
        name: "Vaibhav Gupta ",
        image: "/team/Vaibhav-Gupta.jpg"
      },
      {
        id: 3,
        name: "Shreya Arora",
        image:"/team/Shreya-Arora.jpg"
      },
      {
        id: 4,
        name: "Mayank Tamta",
        image: "/team/Mayank-Tamta.jpeg"
      },{
        id: 5,
        name: "Kriti",
        image:"/team/Kriti.jpg"
      },]

const organizingTeam2 = [
      {
        id: 6,
        name: "Jatin Prakash",
        image: "/team/Jatin-Prakash.jpg"
      },{
        id: 7,
        name: "Himanshu",
        image:"/team/Himanshu.jpg"
      },
      {
        id: 8,
        name: "Divyanshi Goel",
        image: "/team/Divyanshi-Goel.jpg"
      },
      {
        id: 9,
        name: "Ankit Bansal",
        image:"/team/Ankit-Bansal.jpg"
      },
]

  return (
    <>
        <div className="h-screen flex flex-col justify-center items-center px-8 w-full bg-black  bg-grid-white/[0.2] relative flex items-center justify-center">
          <div className="flex flex-col justify-center items-center mb-8">
            <h2 className="text-4xl  mb-8 ">Our Judges</h2>
            {/* Add content for our judges here */}

            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip items={jury} />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mb-8">
            <h2 className="text-4xl  mb-8">Technical Team</h2>
            {/* Add content for the technical team here */}
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip items={technicalTeam} />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl mb-8">Organizing Team</h2>
            {/* Add content for the organizing team here */}
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip className="gap-4" items={organizingTeam} />

            </div>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip className="gap-4" items={organizingTeam2} />

            </div>
          </div>
        </div>
    </>
  );
}
