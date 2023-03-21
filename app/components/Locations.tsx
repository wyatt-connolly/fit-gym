import { locations } from "@/data/locations";
import Link from "next/link";
import Image from "next/image";

function LocationCard({ src, location }) {
  return (
    <Link href="/pricing" className="flex flex-col items-center gap-4">
      <div className="relative w-full aspect-[4/3]">
        <Image src={src} className="object-cover" alt="" fill />
      </div>
      <a
        className="group relative inline-flex items-center overflow-hidden rounded bg-green-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-green-500"
        href="/download"
      >
        <span className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>

        <span className="text-sm font-medium transition-all group-hover:ml-4">
          {location}
        </span>
      </a>
    </Link>
  );
}

function Locations() {
  return (
    <div>
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

export default Locations;
