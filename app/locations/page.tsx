import React from "react";
import LocationCard from "../components/LocationCard";
import { locations } from "@/data/locations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Choose your Fit location.",
};

function Page() {
  return (
    <div className="h-[calc(100vh_-_68px)] mx-auto max-w-screen-2xl px-4 py-8 sm:space-y-32 ">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold sm:text-5xl">Start Here</h1>
        <p className="mb-5 text-xl text-gray-600">Choose your location.</p>
      </div>
      <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {locations.map((location) => (
          <LocationCard key={location.id} {...location} />
        ))}
      </div>
    </div>
  );
}

export default Page;
