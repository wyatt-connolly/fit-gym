"use client";
import Link from "next/link";
import { Fragment } from "react";
import { Dialog, Transition, Menu } from "@headlessui/react";
import DayModal from "./DayModal";
import GuestPassModal from "./GuestPassModal";

function Navbar() {
  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="bg-indigo-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-center font-medium sm:text-left">
          Special Offer 🔥 <br className="sm:hidden" />
          10 Day All Club Access Membership with $0 Enrollment Fees
        </p>

        <DayModal />
      </div>

      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Link className="text-2xl font-extrabold text-gray-500" href="/">
              fit
            </Link>
          </div>

          <nav
            aria-label="Site Nav"
            className="hidden gap-8 text-sm font-medium lg:flex"
          >
            <Link className="text-gray-500" href="/class-schedule">
              Class Schedule
            </Link>
            <Link className="text-gray-500" href="/benefits">
              Benefits
            </Link>
            <Link className="text-gray-500" href="/locations">
              Locations
            </Link>
            <Link className="text-gray-500" href="/trainers">
              Trainers
            </Link>
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
            <GuestPassModal />

            <Link
              className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white cursor-pointer"
              href="/pricing"
            >
              Join Online
            </Link>
          </div>

          <Menu as="div" className="lg:hidden">
            <Menu.Button
              className="rounded-lg bg-gray-100 p-2 text-gray-600 lg:hidden"
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="bg-white z-50 flex flex-col space-y-1 origin-top-right absolute right-0 w-full mt-4">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-indigo-400/75"
                      } block   px-4 py-2 text-sm font-medium text-gray-700`}
                      href="/class-schedule"
                    >
                      Class Schedule
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-indigo-400/75"
                      } block  px-4 py-2 text-sm font-medium text-gray-700`}
                      href="/benefits"
                    >
                      Benefits
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-indigo-400/75"
                      } block  px-4 py-2 text-sm font-medium text-gray-700`}
                      href="/locations"
                    >
                      Locations
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-indigo-400/75"
                      } block  px-4 py-2 text-sm font-medium text-gray-700`}
                      href="/trainers"
                    >
                      Trainers
                    </a>
                  )}
                </Menu.Item>
                <div className="grid grid-cols-1 sm:hidden ">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${
                          active && ""
                        }  bg-indigo-600 px-5 py-2 text-sm font-medium text-white cursor-pointer`}
                        href="/pricing"
                      >
                        Join Online
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    <GuestPassModal mobile />
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
