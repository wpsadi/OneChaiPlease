"use client";
import DefaultCommonLayout from "@/my-comps/defaultCommonLayout";
import Form_main from "@/my-comps/onBoardingForm/Form_main";
import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "react-toastify";

function OnBoardingPage() {
  const [LockstatusStateForm1, setLockStatusStateForm1] = useState(false);

  return (
    <DefaultCommonLayout>
      <h1 className="text-4xl font-bold text-center">Onboarding</h1>
      <p className="text-center font-mono">
        {" "}
        ( Click the accordion to reveal the form )
      </p>
      <Accordion className="text-xl" type="single" collapsible hidden={false}>
        <AccordionItem value="item-1">
          <AccordionTrigger>1. Tell us about yourself? </AccordionTrigger>
          <AccordionContent className="ml-8 mb-3">
            <Form_main statusState={[LockstatusStateForm1, setLockStatusStateForm1]}/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="text-xl" type="single"  
      disabled={!LockstatusStateForm1}
  
       collapsible  hidden={false}>
        <AccordionItem value="item-1">
          <AccordionTrigger>2. Choose your Username? </AccordionTrigger>
          <AccordionContent className="ml-8 mb-3">
          <Form_main statusState={[LockstatusStateForm1, setLockStatusStateForm1]}/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    
    </DefaultCommonLayout>
  );
}

export default OnBoardingPage;
