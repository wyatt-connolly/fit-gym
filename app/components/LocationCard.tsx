"use client";
import { locations } from "@/data/locations";
import Link from "next/link";

import { ArrowLongRightIcon, StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

type LocationCardProps = {
  src: string;
  city: string;
  state: string;
  rating: string;
};
function LocationCard({ src, city, state, rating }: LocationCardProps) {
  return (
    <Link
      href="/pricing"
      className="relative block overflow-hidden rounded-xl hover:brightness-125"
    >
      <Image src={src} className="object-cover brightness-50" alt="" fill />
      <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8 ">
        <div className="pt-12 text-white sm:pt-18 lg:pt-24">
          <h3 className="text-xl font-bold sm:text-2xl">{city}</h3>

          <p className="text-sm">{state}</p>
        </div>

        <span className="inline-flex items-center space-x-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
          {rating}
          <StarIcon className="w-4 h-4 text-yellow-300" />
        </span>
      </div>
    </Link>
  );
}

export default LocationCard;
