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
      <div className="bg-zinc-700 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 sm:gap-6">
        <header aria-label="Site Header" className="shadow-sm">
          <p className="text-center font-medium sm:text-left">
            Special Offer 🔥 <br className="sm:hidden" />
            10 Day All Club Access Membership with $0 Enrollment Fees
          </p>
        </header>
        <div className="mt-4 sm:mt-0">
          <button
            className="w-full sm:w-auto block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-gray-900 transition hover:bg-white/90 focus:outline-none sm:mt-0"
            onClick={openModal}
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="bg-black">
        <div className="mx-auto max-w-screen-xl p-4">
          <div className="flex items-center justify-between gap-4 lg:gap-10">
            <div className="flex lg:w-0 lg:flex-1">
              <Link className="text-2xl font-extrabold text-white" href="/">
                fit
              </Link>
            </div>

            <nav
              aria-label="Site Nav"
              className="hidden gap-8 text-sm font-medium lg:flex bg-black"
            >
              {navLinks.map((link, idx) => (
                <Link key={idx} className="text-gray-100" href={link.href}>
                  {link.title}
                </Link>
              ))}
            </nav>

            <div className="hidden flex-1 items-center justify-end gap-4 sm:flex ">
              <button
                className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-gray-900 cursor-pointer transition 
              hover:bg-white/90"
                onClick={openModal}
              >
                Guest Pass
              </button>
              <Link
                className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-gray-900 cursor-pointer transition 
              hover:bg-white/90"
                href="/pricing"
              >
                Join Online
              </Link>
            </div>

            <Menu as="div" className="lg:hidden">
              <Menu.Button
                className="rounded-lg  p-2 text-gray-600 lg:hidden"
                type="button"
              >
                <Bars3Icon className="h-5 w-5 text-white" />
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
                <Menu.Items className="bg-black z-50 flex flex-col space-y-1 origin-top-right absolute right-0 w-full mt-4">
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

                  <div className="grid grid-cols-1 sm:hidden -ml-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${
                            active && ""
                          }  bg-white px-5 py-2 text-sm font-medium text-gray-900 cursor-pointer hover:bg-white/90`}
                          href="/pricing"
                        >
                          Join Online
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        className="text-left bg-white px-5 py-2 text-sm font-medium text-gray-900 cursor-pointer hover:bg-white/90"
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
