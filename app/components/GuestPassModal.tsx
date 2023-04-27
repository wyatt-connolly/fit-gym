"use client";
import { useState, Fragment, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import PricingCard from "./PricingCard";
import { Dialog, Transition, Menu } from "@headlessui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePrettyPrintedState } from "@/app/utils/usePrettyPrintedState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dispatch, SetStateAction } from "react";

type GuestPassModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  closeModal: (value: boolean) => void;
};

export interface IFormInput {
  fullName: string;
  email: string;
  phoneNumber: number;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function GuestPassModal({
  isOpen,
  setIsOpen,
  closeModal,
}: GuestPassModalProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data, e: any) => {
    await sleep(2000);
    toast.success("A team member will contact you shortly.");
    e.target.reset(); // reset after form submit
    setIsOpen(false);
  };

  useEffect(() => {
    reset();
  }, [isOpen, reset]);

  return (
    <>
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
                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white align-middle shadow-xl transition-all">
                  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg">
                      <h1 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
                        Guest Pass
                      </h1>
                      <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        Try us for 3 days free!
                      </p>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                      >
                        <div>
                          <input
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Full name"
                            {...register("fullName", {
                              required: true,
                              maxLength: 40,
                            })}
                          />
                          {errors.fullName && (
                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                              Full name is required
                            </span>
                          )}
                        </div>
                        <div>
                          <input
                            type="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Email"
                            {...register("email", {
                              required: true,
                            })}
                          />
                          {errors.email && (
                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                              Email is required
                            </span>
                          )}
                        </div>
                        <div>
                          <input
                            type="tel"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Phone number"
                            {...register("phoneNumber", {
                              required: true,
                            })}
                          />
                          {errors.phoneNumber && (
                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                              Phone number is required
                            </span>
                          )}
                        </div>

                        <input
                          type="submit"
                          className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium cursor-pointer text-gray-100 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                        />
                      </form>
                      <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to let our staff contact you
                        about enrollment options.
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default GuestPassModal;
