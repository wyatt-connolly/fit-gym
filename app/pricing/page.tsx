import React from "react";
import { pricing } from "@/data/pricing";
import PricingCard from "../components/PricingCard";

function Page() {
  return (
    <div className="lg:h-[calc(100vh_-_136px)] mx-auto max-w-screen-xl px-4 py-8">
      <div className="mx-auto max-w-screen-md text-center mb-4 md:mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
          Start Here
        </h2>
        <p className="font-light text-gray-500 sm:text-xl ">Choose your plan</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 gap-2 lg:gap-10 lg:space-y-0">
        {pricing.map((membership) => (
          <PricingCard key={membership.id} {...membership} />
        ))}
      </div>
    </div>
  );
}

export default Page;
