import Image from "next/image";
import Benefits from "../components/Benefits";
import { benefits } from "@/data/benefits";
import Link from "next/link";

function Page() {
  return (
    <div className="bg-black text-white">
      <div className="h-[calc(100vh_-_200px)] sm:h-[calc(100vh_-_136px)] grid place-content-center mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 ">
        <div className="lg:py-24 ">
          <h2 className="text-3xl font-bold sm:text-4xl text-white ">
            JOIN THE COLLECTIVE. POWER YOUR PURSUIT.
          </h2>
          <p className="mt-4 text-white">
            Stream live and on-demand classes from the unrivaled collective, and
            be transported to the front row of className—wherever you are,
            whenever you’re ready. Unlimited access is included with your Fit
            membership.
          </p>
          <Link
            className="mt-4 inline-block rounded border border-white bg-black px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:ring-4 focus:ring-primary-200  focus:outline-none"
            href="/pricing"
          >
            Join Fit
          </Link>
        </div>
      </div>{" "}
      <section>
        <div className=" pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 ">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl ">
              MEMBERSHIP WITH BENEFITS
            </h2>

            <p className="mt-4 text-gray-300">
              Fit is available however, whenever, and wherever you want it with
              seamlessly integrated physical and digital offerings. Explore the
              benefits you get with a Fit membership below.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Benefits key={benefit.id} {...benefit} />
            ))}
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-screen-xl  px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 ">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              For more information or to schedule a complimentary tour, email
              our Sales team at info@fit.com.
            </p>

            <div className="mt-8">
              <a className="text-2xl font-bold text-rose-600 cursor-pointer">
                619 475 4450
              </a>

              <address className="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full name"
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />

                <input
                  type="tel"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="phone"
                  placeholder="Phone number"
                />
              </div>

              <div>
                <textarea
                  className="w-full block border rounded border-grey-light p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto hover:bg-gray-700"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
