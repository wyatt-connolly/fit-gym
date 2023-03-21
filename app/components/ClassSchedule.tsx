"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { classSchedule } from "@/data/class-schedule";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ClassSchedule() {
  let [categories] = useState(classSchedule);
  return (
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
                <Link href="/pricing">
                  <li
                    key={post.id}
                    className="rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-blue-500 p-1 shadow-xl"
                  >
                    <div className="rounded-xl bg-gray-100  p-8 text-center">
                      <div className="mt-2">
                        <h3 className="text-gray-500">Class Name</h3>
                        <span className="font-bold text-gray-700 text-2xl">
                          {post.title}
                        </span>
                      </div>
                      <div className="mt-2">
                        <h3 className="text-gray-500">Time</h3>
                        <span className="font-bold text-gray-700 text-2xl">
                          {post.time}
                        </span>
                      </div>
                      <div className="mt-2">
                        <h3 className="text-gray-500">Trainer</h3>
                        <span className="font-bold text-gray-700 text-2xl">
                          {post.trainer}
                        </span>
                      </div>
                      <button className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                        Join Now
                      </button>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default ClassSchedule;
