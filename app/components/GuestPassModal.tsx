"use client";
import { useState, Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import PricingCard from "./PricingCard";
import { Dialog, Transition, Menu } from "@headlessui/react";

type GuestPassModalProps = {
  mobile?: boolean;
};
function GuestPassModal({ mobile }: GuestPassModalProps) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      {mobile ? (
        <button
          className="text-left bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500 cursor-pointer"
          onClick={openModal}
        >
          Guest Pass
        </button>
      ) : (
        <button
          className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500 cursor-pointer"
          onClick={openModal}
        >
          Guest Pass
        </button>
      )}
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
                  <h1 className="mb-8 text-3xl text-center">Guest Pass</h1>
                  <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fullname"
                    placeholder="Full name"
                  />

                  <input
                    type="text"
                    className=" block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    type="tel"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="phone"
                    placeholder="Phone number"
                  />

                  <button
                    type="submit"
                    className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                  >
                    Submit
                  </button>

                  <div className="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to let our staff contact you about
                    enrollment options.
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default GuestPassModal;
