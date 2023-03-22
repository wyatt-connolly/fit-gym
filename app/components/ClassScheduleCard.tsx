import React from "react";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

function ClassScheduleCard({ id, title, time, trainer }) {
  return (
    <Link
      href="/pricing"
      className="group flex flex-col justify-between rounded-sm bg-white p-4 transition-shadow hover:shadow-lg sm:p-6 lg:p-8"
    >
      <div>
        <h3 className="text-3xl font-bold text-indigo-600 sm:text-5xl">
          {title}
        </h3>

        <div className="mt-4 border-t-2 border-gray-100 pt-4">
          <p className="text-sm font-medium  text-gray-500">Time: {time}</p>
          <p className="text-sm font-medium  text-gray-500">
            Trainer: {trainer}
          </p>
        </div>
      </div>

      <div className="mt-8 inline-flex items-center gap-2 text-indigo-600 sm:mt-12 lg:mt-16">
        <p className="font-medium sm:text-lg">Join now</p>
        <ArrowLongRightIcon className="h-6 w-6 transition group-hover:translate-x-3" />
      </div>
    </Link>
  );
}

export default ClassScheduleCard;
