import React from "react";
import Image from "next/image";
import Link from "next/link";

function FeaturedCTA() {
  return (
    <div>
      <section className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="House"
                src="https://fitathletic.com/wp-content/uploads/2021/10/fit-athletic-sign-1-727x1024.jpg"
                className="absolute inset-0 h-full w-full object-cover"
                fill
                quality={100}
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl lg:text-3xl font-bold ">
                Our Philosophy
              </h2>

              <p className="mt-4 text-gray-600 ">
                Our mission is to create a culture that fosters complete
                wellness and offers an all-encompassing member experience. We
                set the bar when it comes to personal training, group fitness,
                club facilities, social events and more.
                <br /> <br />
                With an extraordinary oasis atmosphere, a culture that fosters
                and encourages complete wellness, and all of the tools and
                training you need to see incredible results – there’s no wonder
                Fit has been voted “Best Gym” every year.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-[url(https://www.24hourfitness.com/content/dam/24-hour-fitness/home/search/Search_Dsktop.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Join Our Community
            </h2>

            <p className="hidden text-white/90 md:mt-6 md:block text-xl md:leading-relaxed">
              There Is No Better Time Than Now
            </p>

            <div className="mt-4 sm:mt-8">
              <Link
                href="/pricing"
                className="inline-block rounded-full bg-green-600 px-12 py-3 text-lg font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400"
              >
                Join Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedCTA;
