import Image from "next/image";
import BenefitsCTA from "../components/BenefitsCTA";
import {
  TvIcon,
  CreditCardIcon,
  UserPlusIcon,
  CpuChipIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";

function Page() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="h-[calc(100vh_-_224px)] grid place-content-center">
          <div className="lg:py-24 ">
            <h2 className="text-3xl font-bold sm:text-4xl text-white ">
              JOIN THE COLLECTIVE. POWER YOUR PURSUIT.
            </h2>
            <p className="mt-4 text-white">
              Stream live and on-demand classes from the unrivaled collective,
              and be transported to the front row of className—wherever you are,
              whenever you’re ready. Unlimited access is included with your Fit
              membership.
            </p>
            <button className="mt-4 inline-block rounded border border-white bg-black px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-black focus:ring-4 focus:ring-primary-200  focus:outline-none  ">
              Claim your free trial
            </button>
          </div>
        </div>
      </div>{" "}
      <section className="bg-black text-white">
        <div className=" py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              MEMBERSHIP WITH BENEFITS
            </h2>

            <p className="mt-4 text-gray-300">
              Fit is available however, whenever, and wherever you want it with
              seamlessly integrated physical and digital offerings. Explore the
              benefits you get with a Fit membership below.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">UNLIMITED CLASSES</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Master of One. Choreo Cult. Anthem. All classes at FIT are
                  created and developed by the industry&apos;s best minds and
                  taught by talented fitness instructors who test your limits
                  and inspire results. Every className is booked in advance and
                  complimentary to you as a member. Claim your exclusive offer
                  and try a className at FIT.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <TvIcon className="h-5 w-5" />
              </span>

              <div>
                <h2 className="text-lg font-bold">
                  JOIN THE COLLECTIVE. POWER YOUR PURSUIT.
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  Stream live and on-demand classes from the unrivaled
                  collective, and be transported to the front row of
                  className—wherever you are, whenever you’re ready. Unlimited
                  access is included with your FIT membership.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <CreditCardIcon className="h-5 w-5" />
              </span>

              <div>
                <h2 className="text-lg font-bold">DIVERSIFY YOUR FITNESS</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Put your FIT membership on your American Express Platinum
                  Card® and you'll get up to $300 back per year. Applicable on
                  any FIT membership and the FIT+ digital fitness app. Terms
                  apply.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <CpuChipIcon className="h-5 w-5" />
              </span>

              <div>
                <h2 className="text-lg font-bold">INDUSTRY-BEST PROGRAMMING</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Meet your goals anywhere with our expert instruction and
                  top-tier fitness programs—in the club on our groundbreaking
                  digital platforms. Claim your exclusive offer and experience
                  our industry-best programming.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <UserPlusIcon className="h-5 w-5" />
              </span>

              <div>
                <h2 className="text-lg font-bold">PERSONAL TRAINING AT FIT.</h2>

                <p className="mt-1 text-sm text-gray-300">
                  You and your dedicated personal trainer will create a plan
                  that's tailored to your goals—and together, you'll work to
                  unlock the results you want. At every step of the way, you'll
                  be driven by a passionate trainer using the latest science
                  during in-club sessions and at home with Virtual Personal
                  Training.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <SparklesIcon className="h-5 w-5" />
              </span>

              <div>
                <h2 className="text-lg font-bold">THE SPA AT FIT</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Take time to regenerate and elevate your performance with our
                  always-evolving roster of health Spa services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
