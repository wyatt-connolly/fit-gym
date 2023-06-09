import React from "react";
import Image from "next/image";
import TrainerCard from "../components/TrainerCard";
import { faq } from "@/data/faq";
import { trainers } from "@/data/trainers";
import Faq from "../components/Faq";

import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Meet your Fit training staff.",
};

function Page() {
  return (
    <div className="px-4 py-8 mx-auto max-w-screen-2xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="p-8 bg-black md:p-12 lg:px-16 lg:py-24">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Meet Your Fit Training Staff
            </h2>

            <p className="mt-4 text-white/90 ">
              Working one-on-one creates an atmosphere of accountability between
              you and your personal trainer. Fit personal trainers are very
              serious about designing your individual workout program based on
              your fitness assessment and goals. They take time to listen to you
              and understand your needs before your sessions begin. Our trainers
              are experts at pushing you to your limit so you can reach your
              optimal fitness level in a healthy amount of time.
            </p>
          </div>
        </div>
        <div className="relative w-full h-40 sm:h-56 md:h-full">
          <Image
            alt="Student"
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            className="object-cover"
            fill
          />
        </div>
      </div>
      <div className="mt-16 ">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Trainers
          </h2>

          <p className="max-w-md mt-4 text-gray-500">
            Powered by positive energy, driven by member results.
          </p>
        </header>
        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} {...trainer} />
          ))}
        </ul>
      </div>
      <div className="mt-16">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-4">
          <Faq />
        </div>
      </div>
    </div>
  );
}

export default Page;
