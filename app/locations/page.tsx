import React from "react";
import LocationCard from "../components/LocationCard";
import { locations } from "@/data/locations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Choose your Fit location.",
};

function Page() {
  return (
    <div className="sm:h-[calc(100vh_-_136px)] mx-auto max-w-screen-2xl px-4 py-8 sm:space-y-32 ">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
          Start Here
        </h1>
        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          Choose your location.
        </p>
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
