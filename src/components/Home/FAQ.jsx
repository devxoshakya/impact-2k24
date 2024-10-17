import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-2xl px-8 py-8">
        <h1 className="text-xl font-semibold items-center justify-center mb-4">
          <span className="text-4xl">F</span>REQUENTLY {" "}
          <span  className="text-4xl">A</span>SKED { " "}
          <span  className="text-4xl">Q</span>UESTIONS { " "}
         
        </h1>
        <Accordion type="single" id="faq" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do I need to submit an application?</AccordionTrigger>
            <AccordionContent>
              Yes, submitting your application for review is mandatory. We won't be able to review your project without a proper application.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>I’ve submitted wrong details in the registration form, how can I correct them?
            </AccordionTrigger>
            <AccordionContent>
            So, you have to re-register from a new id.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do I need to pay money to register for the Hackathon?
            </AccordionTrigger>
            <AccordionContent>
            No, it's completely free!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Do I need to be in Meerut to take part in the Hackathon?
            </AccordionTrigger>
            <AccordionContent>
            You can apply, if you live in India but you have to be present onsite in MIET, Meerut on the day of hackathon.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Can I participate in a team?
            </AccordionTrigger>
            <AccordionContent>
            Yes, you can participate in a team of 2-4 members.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}