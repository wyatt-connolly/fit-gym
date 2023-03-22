import React from "react";
import Link from "next/link";

function ScheduleCard({ id, title, time, trainer }) {
  return (
    <div>
      <li
        key={id}
        className="rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-blue-500 p-1 shadow-xl"
      >
        <div className="rounded-xl bg-gray-100  p-8 text-center">
          <div className="mt-2">
            <h3 className="text-gray-500">Class Name</h3>
            <span className="font-bold text-gray-700 text-2xl">{title}</span>
          </div>
          <div className="mt-2">
            <h3 className="text-gray-500">Time</h3>
            <span className="font-bold text-gray-700 text-2xl">{time}</span>
          </div>
          <div className="mt-2">
            <h3 className="text-gray-500">Trainer</h3>
            <span className="font-bold text-gray-700 text-2xl">{trainer}</span>
          </div>
          <Link
            href="./pricing"
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Join Now
          </Link>
        </div>
      </li>
    </div>
  );
}

export default ScheduleCard;
