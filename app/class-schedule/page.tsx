"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { classSchedule } from "@/data/class-schedule";
import Link from "next/link";
import ScheduleCard from "../components/ScheduleCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Page() {
  let [categories] = useState(classSchedule);
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <Tab.Group>
        <Tab.List className="flex flex-col md:flex-row  text-gray-500 font-medium overflow-auto touch-auto snap-x">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "px-6 py-4 border-b border-gray-100 hover:bg-blue-100/50  focus:outline-none  ",
                  selected && "text-blue-500 border-b-blue-500 shadow"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className={classNames("mt-8 ")}>
              <ul className="md:grid md:grid-cols-2 gap-8 space-y-4 md:space-y-0">
                {posts.map((post) => (
                  <ScheduleCard {...post} />
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Page;
