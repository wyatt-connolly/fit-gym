import React from "react";
import LocationCard from "../components/LocationCard";
import { locations } from "@/data/locations";

function Page() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">Start Here</h1>
        <p className="mt-2 sm:text-xl sm:leading-relaxed">
          Choose your location.
        </p>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {locations.map((location) => (
          <LocationCard {...location} />
        ))}
      </div>
    </div>
  );
}

export default Page;
