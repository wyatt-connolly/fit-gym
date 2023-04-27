import React from "react";
import { pricing } from "@/data/pricing";
import PricingCard from "../components/PricingCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Choose your Fit membership.",
};

function Page() {
  return (
    <div className="xl:h-[calc(100vh_-_136px)] mx-auto max-w-screen-xl px-4 py-8">
      <div className="max-w-screen-md mx-auto mb-4 text-center md:mb-8 xl:mb-12">
        <h2 className="mb-4 text-3xl font-bold sm:text-5xl">Start Here</h2>
        <p className="font-light text-gray-500 sm:text-xl ">Choose your plan</p>
      </div>
      <div className="gap-2 space-y-4 xl:grid xl:grid-cols-3 xl:gap-10 xl:space-y-0">
        {pricing.map((membership) => (
          <PricingCard key={membership.id} {...membership} />
        ))}
      </div>
    </div>
  );
}

export default Page;
