"use client";
import { useState, Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import PricingCard from "./PricingCard";
import { Dialog, Transition } from "@headlessui/react";
import { pricing } from "@/data/pricing";

function DayModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        className="w-full sm:w-auto mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
        onClick={openModal}
      >
        SHOP NOW
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>

                  <PricingCard
                    title="10 Day Membership"
                    price="120"
                    listItems={pricing[0].listItems}
                    onClick={closeModal}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default DayModal;
