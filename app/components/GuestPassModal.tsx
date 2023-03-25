"use client";
import { useState, Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import PricingCard from "./PricingCard";
import { Dialog, Transition, Menu } from "@headlessui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePrettyPrintedState } from "@/app/utils/usePrettyPrintedState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export interface IFormInput {
  fullName: string;
  email: string;
  phoneNumber: number;
}

type GuestPassModalProps = {
  mobile?: boolean;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function GuestPassModal({ mobile }: GuestPassModalProps) {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false);
  const [submitValue, setSubmitValue] = usePrettyPrintedState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data, e) => {
    await sleep(2000);
    if (data) {
      console.log(data);
      toast.success("A team member will contact you shortly.");
      setIsOpen(false);
    } else {
      alert("There is an error");
    }
    setSubmitValue(data);
  };

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
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        className="pb-4 block border border-grey-light w-full p-3 rounded"
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
                        type="text"
                        className="pb-4 block border border-grey-light w-full p-3 rounded"
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
                        className="pb-4 block border border-grey-light w-full p-3 rounded"
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

                    <button
                      type="submit"
                      className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                    >
                      Submit
                    </button>
                  </form>
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
