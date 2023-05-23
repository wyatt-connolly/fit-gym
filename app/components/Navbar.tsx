"use client";
import Link from "next/link";
import { Fragment } from "react";
import { Dialog, Transition, Menu } from "@headlessui/react";
import DayModal from "./DayModal";
import GuestPassModal from "./GuestPassModal";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useState } from "react";

const navLinks = [
  { title: "Benefits", href: "/benefits" },
  { title: "Class Schedule", href: "/class-schedule" },
  { title: "Locations", href: "/locations" },
  { title: "Trainers", href: "/trainers" },
];

function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <GuestPassModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
      />
      <div className="px-4 py-3 text-white bg-zinc-700 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 sm:space-x-6">
        <header aria-label="Site Header" className="shadow-sm">
          <p className="font-medium text-center sm:text-left">
            Special Offer 🔥 <br className="sm:hidden" />
            10 Day All Club Access Membership with $0 Enrollment Fees
          </p>
        </header>
        <div className="mt-4 sm:mt-0">
          <button
            className="block w-full px-5 py-3 text-sm font-medium text-center text-gray-900 transition bg-white rounded-lg sm:w-auto hover:bg-white/90 focus:outline-none sm:mt-0"
            onClick={openModal}
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="bg-black">
        <div className="max-w-screen-xl p-4 mx-auto">
          <div className="flex items-center justify-between space-x-4 lg:space-x-10">
            <div className="flex lg:w-0 lg:flex-1">
              <Link className="text-2xl font-extrabold text-white" href="/">
                fit
              </Link>
            </div>

            <nav
              aria-label="Site Nav"
              className="hidden space-x-8 text-sm font-medium bg-black lg:flex"
            >
              {navLinks.map((link, idx) => (
                <Link key={idx} className="text-gray-100" href={link.href}>
                  {link.title}
                </Link>
              ))}
            </nav>

            <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex ">
              <button
                className="px-5 py-2 text-sm font-medium text-gray-900 transition bg-white rounded-lg cursor-pointer hover:bg-white/90"
                onClick={openModal}
              >
                Guest Pass
              </button>
              <Link
                className="px-5 py-2 text-sm font-medium text-gray-900 transition bg-white rounded-lg cursor-pointer hover:bg-white/90"
                href="/pricing"
              >
                Join Online
              </Link>
            </div>

            <Menu as="div" className="lg:hidden">
              <Menu.Button
                className="p-2 text-gray-600 rounded-lg lg:hidden"
                type="button"
              >
                <Bars3Icon className="w-5 h-5 text-white" />
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
                <Menu.Items className="absolute right-0 z-50 flex flex-col w-full mt-4 space-y-1 origin-top-right bg-black">
                  {navLinks.map((link, idx) => (
                    <Menu.Item key={idx}>
                      {({ active }) => (
                        <Link
                          className={`${
                            active && "bg-white hover:text-gray-900 "
                          } block px-4 py-2 text-sm font-medium text-white`}
                          href={link.href}
                        >
                          {link.title}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}

                  <div className="grid grid-cols-1 -ml-1 sm:hidden">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${
                            active && ""
                          }  bg-zinc-700 px-5 py-2 text-sm font-medium text-white cursor-pointer hover:bg-zinc-700/90`}
                          href="/pricing"
                        >
                          Join Online
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        className="px-5 py-2 text-sm font-medium text-left text-white cursor-pointer bg-zinc-700 hover:bg-zinc-700/90"
                        onClick={openModal}
                      >
                        Guest Pass
                      </button>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
