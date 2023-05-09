"use client";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { classSchedule } from "@/data/class-schedule";
import Link from "next/link";
import ClassScheduleCard from "../components/ClassScheduleCard";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
function Page() {
  let [schedule] = useState(classSchedule);
  return (
    <div className="md:h-[calc(100vh_-_136px)] mx-auto max-w-screen-2xl px-8 py-8">
      <Tab.Group>
        <Tab.List className="flex flex-col overflow-auto font-medium text-gray-500 md:flex-row touch-auto snap-x">
          {Object.keys(schedule).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "p-4 border-b border-gray-100 hover:text-gray-900  focus:outline-none  ",
                  selected && "text-gray-900 border-b-gray-500"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(schedule).map((posts, idx) => (
            <Tab.Panel key={idx} className={classNames("mt-8 ")}>
              <ul className="gap-8 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
                {posts.map((post) => (
                  <ClassScheduleCard key={post.id} {...post} />
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
