"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { faq } from "@/data/faq";

function Faq() {
  return (
    <div>
      {faq.map((index) => (
        <Disclosure key={index.id}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg p-4 font-medium text-gray-900  cursor-pointer bg-gray-50">
                {index.question}
                <ChevronUpIcon
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 mt-4 leading-relaxed text-gray-700 whitespace-pre-wrap">
                {index.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}

export default Faq;
