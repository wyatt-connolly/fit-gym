import React from "react";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

type ClassScheduleCardProps = {
  id: number;
  title: string;
  time: string;
  trainer: string;
};
function ClassScheduleCard({
  id,
  title,
  time,
  trainer,
}: ClassScheduleCardProps) {
  return (
    <Link
      href="/pricing"
      className="flex flex-col justify-between p-4 transition-shadow bg-white rounded-sm group hover:shadow-lg sm:p-6 lg:p-8"
    >
      <div>
        <h3 className="text-3xl font-bold text-gray-900 sm:text-5xl">
          {title}
        </h3>

        <div className="pt-4 mt-4 border-t-2 border-gray-100">
          <p className="text-sm font-medium text-gray-500">Time: {time}</p>
          <p className="text-sm font-medium text-gray-500">
            Trainer: {trainer}
          </p>
        </div>
      </div>

      <div className="inline-flex items-center mt-8 space-x-2 text-gray-900 sm:mt-12 lg:mt-16">
        <p className="font-medium sm:text-lg">Join now</p>
        <ArrowLongRightIcon className="w-6 h-6 transition group-hover:translate-x-3" />
      </div>
    </Link>
  );
}

export default ClassScheduleCard;
