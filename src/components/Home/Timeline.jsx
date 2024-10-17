import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "October 20th",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
            Registerations open for the IMPACT '24 Hackathon
          </h1>
          <h1>
            Make a Team of 2-4 members and register for the Hackathon. Then
            You'll need to submit a Idea Presentation from the given problem
            statements and need to implement it. The best idea will be selected
            and you will be given a chance to present it in front of the judges.
          </h1>
          <h2>
            NOTE: You need to use this{" "}
            <a className="text-blue-500 font-bold" href="/template.pptx">
              Template
            </a>{" "}
            for the presentation. Be fast as the registerations will close on
            25th October.
          </h2>
        </div>
      ),
    },
    {
      title: "November 1st",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
            Intimation of selected ideas.
          </h1>
          <h1>
            Teams will get eliminated and the selected teams will be intimated
            about the same.
          </h1>
        </div>
      ),
    },
    {
      title: "November 16th",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
            Development Phase I : Prototype Submission with 70% completion.
          </h1>
          <h1>
            Teams will get evaluated on the basis of the prototype submitted.
            The teams with the best prototype will be selected for the next
            phase.
          </h1>
        </div>
      ),
    },
    {
      title: "December 3rd",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
            Development Phase II : Prototype Submission with full completion.
          </h1>
          <h1>
            After this round 4 teams will be selected for the final round.
          </h1>
          <h2>
            Note: Every college i.e. MIET, MIT, IPEC can send exactly 4 teams
            for the final round.
          </h2>
        </div>
      ),
    },
    {
      title: "December 10th",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-8">
            Final Round at Institutional Level.
          </h1>
          <h1>
            After this the winning teams will be selected and will be awarded
            with cash prizes.
          </h1>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
