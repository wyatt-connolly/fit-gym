"use client";
import { locations } from "@/data/locations";
import Link from "next/link";
import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

function LocationCard({ src, location }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full aspect-[4/3]">
        <Image src={src} className="object-cover" alt="" fill />
      </div>
      <Link
        className="group relative inline-flex items-center overflow-hidden rounded bg-green-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-green-500"
        href="/pricing"
      >
        <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
          <ArrowLongRightIcon className="h-5 w-5" />
        </span>

        <span className="text-sm font-medium transition-all group-hover:mr-4">
          {location}
        </span>
      </Link>
    </div>
  );
}

export default LocationCard;
