"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Tabs() {
  let [categories] = useState({
    Monday: [
      {
        id: 1,
        title: "Fitness",
        time: "9:00am - 10:00am",
        trainer: "David Vila",
      },
      {
        id: 2,
        title: "Bodybuilding",
        time: "10:00am - 11:00am",
        trainer: "Frank Zane",
      },
      {
        id: 3,
        title: "Running",
        time: "2:00pm - 3:00pm",
        trainer: "Usain Bolt",
      },
      {
        id: 4,
        title: "Cycling",
        time: "6:00pm - 7:00pm",
        trainer: "Lance Armstrong",
      },
    ],
    Tuesday: [
      {
        id: 1,
        title: "Boxing",
        time: "9:00am - 10:00am",
        trainer: "Mike Tyson",
      },
      {
        id: 2,
        title: "Yoga",
        time: "10:00am - 11:00am",
        trainer: "Dana Louis",
      },
      {
        id: 3,
        title: "Crossfit",
        time: "5:00pm - 6:00pm",
        trainer: "George Washington",
      },
    ],
    Wednesday: [
      {
        id: 1,
        title: "Cycling",
        time: "9:00am - 10:00am",
        trainer: "Mario Bikes",
      },
      {
        id: 2,
        title: "Bodybuilding",
        time: "12:00am - 1:00am",
        trainer: "The Rock",
      },
      {
        id: 3,
        title: "Basketball",
        time: "2:00pm - 3:00pm",
        trainer: "Michael Jordan",
      },
      {
        id: 4,
        title: "Wrestling",
        time: "8:00pm - 9:00pm",
        trainer: "Hulk Hogan",
      },
    ],
    Thursday: [
      {
        id: 1,
        title: "Fitness",
        time: "9:00am - 10:00am",
        trainer: "David Vila",
      },
      {
        id: 2,
        title: "Bodybuilding",
        time: "12:00am - 1:00am",
        trainer: "Frank Zane",
      },
      {
        id: 3,
        title: "Yoga",
        time: "1:00am - 2:00am",
        trainer: "Dana Louis",
      },
    ],
    Friday: [],
    Saturday: [
      {
        id: 1,
        title: "Yoga",
        time: "9:00am - 10:00am",
        trainer: "Dana Louis",
      },
    ],
    Sunday: [],
  });
  return (
    <Tab.Group>
      <Tab.List className="mt-16 flex flex-col md:flex-row  text-gray-500 font-medium overflow-auto touch-auto snap-x">
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
                <li
                  key={post.id}
                  className="rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-blue-500 p-1 shadow-xl"
                >
                  <div className="rounded-xl bg-gray-100  p-8 text-center space-y-8 ">
                    <div>
                      <h3 className="text-gray-500">Class Name</h3>
                      <span className="font-bold text-gray-700 text-2xl">
                        {post.title}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-gray-500">Time</h3>
                      <span className="font-bold text-gray-700 text-2xl">
                        {post.time}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-gray-500">Trainer</h3>
                      <span className="font-bold text-gray-700 text-2xl">
                        {post.trainer}
                      </span>
                    </div>
                    <button className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500">
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
                        Join Now
                      </span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Tabs;
