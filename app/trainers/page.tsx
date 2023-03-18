import React from "react";
import Dropdown from "../components/Dropdown";
import Image from "next/image";
import TrainerCTA from "../components/TrainerCTA";
import TrainerCollection from "../components/TrainerCollection";
import FAQ from "../components/FAQ";

function Page() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-32 lg:px-8">
      <TrainerCTA />
      <TrainerCollection />
      <FAQ />
    </section>
  );
}

export default Page;
