"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export interface IFormInput {
  firstName: string;
  lastName: string;
  zipCode: any;
  phoneNumber: number;
  email: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function Page() {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data, e: any) => {
    await sleep(2000);
    if (data) {
      console.log(data);
      e.target.reset(); // reset after form submit
      await router.push("/");
      await toast.success("Please check your email to confirm membership.");
    } else {
      alert("There is an error");
    }
    data;
  };

  return (
    <div className="lg:h-[calc(100vh_-_136px)] mx-auto max-w-screen-xl px-4 py-8 flex justify-center items-center">
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
        theme="colored"
      />
      <div className=" w-full xl:w-3/4 lg:w-11/12 flex justify-center gap-16">
        <div className=" relative w-full rounded-l-lg hidden lg:block">
          <Image
            className="object-cover"
            alt=""
            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            fill
          />
        </div>

        <div className="w-full lg:w-7/12 bg-white  rounded-lg lg:rounded-l-none">
          <h3 className="text-2xl text-center">Review & Confirm Membership</h3>
          <form
            className="bg-white rounded pt-6 px-6 lg:px-0"
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
                    `w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none ` +
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
                    `w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none ` +
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
                    `w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none ` +
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
                    `w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none ` +
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
                  `w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none ` +
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
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Checkout
              </button>
            </div>
            <hr className="mb-6 border-t" />

            <div className="text-center">
              <a
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="#"
              >
                Having trouble?
                <br /> Contact customer support
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
