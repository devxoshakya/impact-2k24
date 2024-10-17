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
        <h1 className="text-xl font-semibold items-center justify-center my-8">
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
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components' aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Ads labs?</AccordionTrigger>
            <AccordionContent>
              sabke baap daddy team dev bhaiya op af
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}