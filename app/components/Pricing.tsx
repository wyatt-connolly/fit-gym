import React from "react";
import PricingCard from "./PricingCard";

export const dayMembership = [
  { value: "One Location" },
  { value: "Cardio Equipment" },
  { value: "Strength Equipment" },
  { value: "Free WiFi" },
  { value: "Open 24 Hours" },
];

export const allClubMembership = [
  { value: "All Locations" },
  { value: "Super Sport Cardio Equipment" },
  { value: "Super Sport Strength Equipment" },
  { value: "Free WiFi" },
  { value: "Open 24 Hours" },
];
export const oneClubMembership = [
  { value: "2 PT sessions" },
  { value: "Cardio Equipment" },
  { value: "Strength Equipment" },
  { value: "Free WiFi" },
  { value: "Open 24 Hours" },
];

function Pricing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Start Here
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Choose your plan
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <PricingCard
            membership="10 Day Membership"
            price="120"
            listItems={dayMembership}
          />
          <PricingCard
            membership="All Club - Results"
            price="170"
            monthly
            listItems={allClubMembership}
          />
          <PricingCard
            membership="One Club - Results"
            price="140"
            monthly
            listItems={oneClubMembership}
          />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
