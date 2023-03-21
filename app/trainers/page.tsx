import React from "react";
import Image from "next/image";
import TrainerCTA from "../components/TrainerCTA";
import TrainerCard from "../components/TrainerCard";
import FAQ from "../components/FAQ";
import { trainers } from "@/data/trainers";

function Page() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-8">
      <TrainerCTA />
      <div className="mt-16 ">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Trainers
          </h2>

          <p className="mt-4 max-w-md text-gray-500">
            Powered by positive energy, driven by member results.
          </p>
        </header>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <TrainerCard
              src={trainer.src}
              name={trainer.name}
              profession={trainer.profession}
            />
          ))}
        </ul>
      </div>
      <FAQ />
    </div>
  );
}

export default Page;
