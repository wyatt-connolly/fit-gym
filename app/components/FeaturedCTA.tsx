import React from "react";
import Image from "next/image";

function FeaturedCTA() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
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
                <h2 className="text-3xl lg:text-5xl  font-bold ">
                  Our Philosophy
                </h2>

                <p className="mt-4 text-gray-600">
                  Our mission is to create a culture that fosters complete
                  wellness and offers an all-encompassing member experience. We
                  set the bar when it comes to personal training, group fitness,
                  club facilities, social events and more.
                  <br /> <br />
                  With an extraordinary oasis atmosphere, a culture that fosters
                  and encourages complete wellness, and all of the tools and
                  training you need to see incredible results – there’s no
                  wonder Fit has been voted “Best Gym” every year.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Join Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedCTA;
