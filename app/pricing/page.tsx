import React from "react";
import { memberships } from "@/data/pricing";
import PricingCard from "../components/PricingCard";

function Page() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
          Start Here
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl ">
          Choose your plan
        </p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 lg:gap-10 lg:space-y-0">
        <PricingCard
          membership="10 Day Membership"
          price="120"
          listItems={memberships.dayMembership}
        />
        <PricingCard
          membership="All Club - Results"
          price="170"
          monthly
          listItems={memberships.allClubMembership}
        />
        <PricingCard
          membership="One Club - Results"
          price="140"
          monthly
          listItems={memberships.oneClubMembership}
        />
      </div>
    </div>
  );
}

export default Page;
