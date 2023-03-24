"use client";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Disclosure } from "@headlessui/react";
import { faq } from "@/data/faq";

function FAQ() {
  return (
    <div className="mt-8 space-y-4">
      {faq.map((index) => (
        <Disclosure>
          {({ open }) => (
            <>
              {" "}
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

export default FAQ;
