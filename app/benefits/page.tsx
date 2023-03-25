"use client";
import Image from "next/image";
import Benefits from "../components/Benefits";
import { benefits } from "@/data/benefits";
import Particles from "react-particles";
import Link from "next/link";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import ParticlesBackground from "../components/Particles";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePrettyPrintedState } from "@/app/utils/usePrettyPrintedState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IFormInput {
  fullName: string;
  email: string;
  phoneNumber: number;
  message: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
function Page() {
  const [submitValue, setSubmitValue] = usePrettyPrintedState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data, e) => {
    await sleep(2000);
    if (data) {
      console.log(data);
      toast.success("Your message has been recieved.");
      e.target.reset(); // reset after form submit
    } else {
      alert("There is an error");
    }
    setSubmitValue(data);
  };

  return (
    <div className="text-black">
      <ParticlesBackground />

      <div className="h-[calc(100vh_-_200px)] sm:h-[calc(100vh_-_136px)] grid place-content-center mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 ">
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
        <div className="lg:py-24 ">
          <h2 className="font-bold text-3xl lg:text-5xl ">
            JOIN THE COLLECTIVE. POWER YOUR PURSUIT.
          </h2>
          <p className="mt-4 lg:text-lg ">
            Stream live and on-demand classes from the unrivaled collective, and
            be transported to the front row of className—wherever you are,
            whenever you’re ready. Unlimited access is included with your Fit
            membership.
          </p>
          <Link
            className="mt-4 inline-block rounded border border-white bg-black px-12 py-3 text-sm font-medium text-white hover:bg-gray-700  focus:ring-4 focus:ring-primary-200  focus:outline-none"
            href="/pricing"
          >
            Join Fit
          </Link>
        </div>
      </div>
      <section>
        <div className=" pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 ">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold ">MEMBERSHIP WITH BENEFITS</h2>

            <p className="mt-4 lg:text-lg">
              Fit is available however, whenever, and wherever you want it with
              seamlessly integrated physical and digital offerings. Explore the
              benefits you get with a Fit membership below.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Benefits key={benefit.id} {...benefit} />
            ))}
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-screen-xl  px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 ">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              For more information or to schedule a complimentary tour, email
              our Sales team at info@fit.com.
            </p>

            <div className="mt-8">
              <a className="text-2xl font-bold text-rose-600 cursor-pointer">
                619 475 4450
              </a>

              <address className="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                type="text"
                className={
                  `block border  w-full p-3 rounded mb-4` +
                  `${errors.fullName && "border-red-500"}`
                }
                placeholder="Full name"
                {...register("fullName", { required: true, maxLength: 40 })}
              />
              {errors.fullName && (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  Full name is required
                </span>
              )}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  className={
                    `block border  w-full p-3 rounded mb-4` +
                    `${errors.email && "border-red-500"}`
                  }
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    Email is required
                  </span>
                )}

                <input
                  type="tel"
                  className={
                    `block border  w-full p-3 rounded mb-4` +
                    `${errors.phoneNumber && "border-red-500"}`
                  }
                  placeholder="Phone number"
                  {...register("phoneNumber", { required: true })}
                />
              </div>
              {errors.phoneNumber && (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  Phone number is required
                </span>
              )}

              <div>
                <textarea
                  className={
                    `w-full block rounded border p-3 text-sm` +
                    `${errors.message && "border-red-500"}`
                  }
                  placeholder="Message"
                  rows="8"
                  type="text"
                  {...register("message", { required: true, maxLength: 500 })}
                ></textarea>
                {errors.message && (
                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    Message is required
                  </span>
                )}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto hover:bg-gray-700"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
