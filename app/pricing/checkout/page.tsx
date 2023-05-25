"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IFormInput {
  firstName: string;
  lastName: string;
  zipCode: any;
  phoneNumber: number;
  email: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data, e: any) => {
    await sleep(2000);
    if (data) {
      console.log(data);
      e.target.reset(); // reset after form submit
      await toast.success("Please check your email to confirm membership.");
    } else {
      alert("There is an error");
    }
    data;
  };

  return (
    <div className="h-[calc(100vh_-_68px)] relative flex flex-wrap lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Tell us about yourself!
          </h1>

          <p className="mt-4 text-gray-500">
            Please complete the following information.
          </p>
        </div>

        <form
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col sm:flex-row sm:space-x-4 lg:space-x-0 lg:flex-col">
            <div className="w-full ">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className={
                  `w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm` +
                  `${errors.firstName && "border-red-500  "}`
                }
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: true, maxLength: 20 })}
              />
              {errors.firstName && (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  First name is required
                </span>
              )}
            </div>
            <div className="w-full mt-2 sm:mt-0 lg:mt-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className={
                  `w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm` +
                  `${errors.lastName && "border-red-500  "}`
                }
                type="text"
                placeholder="Last Name"
                {...register("lastName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.lastName && (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  Last name is required
                </span>
              )}
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row sm:space-x-4 justify-center  ">
            <div className="w-full sm:w-2/5 mt-2 ">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="zipCode"
              >
                Zip Code
              </label>
              <input
                className={
                  `w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm` +
                  `${errors.zipCode && "border-red-500  "}`
                }
                type="text"
                placeholder="Zip Code"
                {...register("zipCode", { required: true, maxLength: 5 })}
              />
              {errors.zipCode && (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  Zip Code is required
                </span>
              )}
            </div>
            <div className="w-full sm:w-3/5 mt-2 ">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className={
                  `w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm` +
                  `${errors.phoneNumber && "border-red-500  "}`
                }
                type="tel"
                placeholder="Phone Number"
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  Phone number is required
                </span>
              )}
            </div>
          </div>
          <div className="mt-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={
                `w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm` +
                `${errors.email && "border-red-500"}`
              }
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                Email address is required
              </span>
            )}
          </div>

          <div className="my-6 text-center">
            <button
              className="inline-block rounded-lg bg-black px-5 py-3 text-center text-sm font-medium text-gray-100 transition hover:bg-black/90 focus:outline-none focus:bg-black/90"
              type="submit"
            >
              Checkout
            </button>
          </div>
        </form>
      </div>
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <Image
          alt="Welcome"
          src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          className="absolute inset-0  object-cover"
          fill
        />
      </div>
    </div>
  );
}

export default Page;
