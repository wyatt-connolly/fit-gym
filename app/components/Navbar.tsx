"use client";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function VerticalMenu() {
  return (
    <nav aria-label="Main Nav" className="flex flex-col space-y-1  bg-white">
      <a
        href=""
        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
      >
        General
      </a>

      <a
        href=""
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        Teams
      </a>

      <a
        href=""
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        Billing
      </a>

      <a
        href=""
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        Invoices
      </a>

      <a
        href=""
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        Account
      </a>
    </nav>
  );
}
function Navbar() {
  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="bg-indigo-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-center font-medium sm:text-left">
          Special Offer 🔥 <br className="sm:hidden" />
          10 Day All Club Access Membership with $0 Enrollment Fees
        </p>

        <a
          className="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
          href="#"
        >
          SHOP NOW
        </a>
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
            <a className="text-gray-500" href="">
              Class Schedule
            </a>
            <Link className="text-gray-500" href="/benefits">
              Benefits
            </Link>
            <a className="text-gray-500" href="">
              Location
            </a>
            <a className="text-gray-500" href="">
              Trainers
            </a>
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
            <a
              className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
              href=""
            >
              Guest Pass
            </a>

            <a
              className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white"
              href=""
            >
              Join Online
            </a>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
              <Menu.Items className="bg-white z-20 flex flex-col space-y-1 origin-top-right absolute right-0 w-full mt-4">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-indigo-500/70"
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
                        active && "bg-indigo-500/70"
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
                        active && "bg-indigo-500/70"
                      } block  px-4 py-2 text-sm font-medium text-gray-700`}
                      href="/locations"
                    >
                      Location
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active && "bg-indigo-500/70"
                      } block  px-4 py-2 text-sm font-medium text-gray-700`}
                      href="/trainers"
                    >
                      Trainers
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Navbar;