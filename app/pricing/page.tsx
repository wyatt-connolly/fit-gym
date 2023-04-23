import React from "react";
import { pricing } from "@/data/pricing";
import PricingCard from "../components/PricingCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Choose your Fit membership.",
};

function Page() {
  return (
    <div className="lg:h-[calc(100vh_-_136px)] mx-auto max-w-screen-xl px-4 py-8">
      <div className="max-w-screen-md mx-auto mb-4 text-center md:mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 ">
          Start Here
        </h2>
        <p className="font-light text-gray-500 sm:text-xl ">Choose your plan</p>
      </div>
      <div className="gap-2 space-y-4 lg:grid lg:grid-cols-3 lg:gap-10 lg:space-y-0">
        {pricing.map((membership) => (
          <PricingCard key={membership.id} {...membership} />
        ))}
      </div>
    </div>
  );
}

export default Page;
