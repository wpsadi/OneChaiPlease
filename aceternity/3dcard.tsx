"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

interface cardDet {
  bigHeading: string;
  description: string;
  imageURL: string;
  buttons: {
    buttonLeft: {
      text: string;
      link: string;
    };
    buttonRight: {
      text: string;
      link: string;
    };
  };
}

export function ThreeDCardDemo({ CardDetails }: { CardDetails: cardDet }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {CardDetails.bigHeading}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {CardDetails.description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={CardDetails.imageURL}
            height="1000"
            priority={true}
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <Link href={CardDetails.buttons.buttonLeft.link}>
            <CardItem
              translateZ={20}
              translateX={-40}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              {CardDetails.buttons.buttonLeft.text}
            </CardItem>
          </Link>
          <Link href={CardDetails.buttons.buttonRight.link}>
            <CardItem
              translateZ={20}
              translateX={40}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              {CardDetails.buttons.buttonRight.text}
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
