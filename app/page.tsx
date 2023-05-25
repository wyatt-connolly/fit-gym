import FeaturedCard from "./components/FeaturedCard";
import { featured } from "@/data/featured";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export default function Home() {
  return (
    <main>
      <div className="relative flex items-center justify-center h-[calc(100vh_-_68px)] overflow-hidden">
        <div className="relative z-20 flex items-center space-x-8 text-3xl font-extrabold text-white sm:text-5xl lg:text-8xl">
          <p className="p-2 border-4 border-white border-solid rounded-full sm:p-6 lg:p-8">
            fit
          </p>

          <p className="leading-none">
            A <br /> LIFESTYLE <br /> GYM
          </p>
        </div>
        <video
          autoPlay
          playsInline
          muted
          loop
          className="absolute z-10 object-contain w-auto min-w-full min-h-full max-w-none brightness-75"
        >
          <source src="https:\/\/fitathletic.com\/wp-content\/uploads\/2023\/01\/FIT-Drone-Compilation.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-20 mx-auto md:py-36 lg:flex lg:py-56 lg:items-center">
          <div className="mx-auto text-center">
            <h2 className="text-3xl font-extrabold sm:text-5xl lg:text-7xl ">
              REINVENT
              <br /> YOUR LIFE WITH FIT
            </h2>
            <p className="mt-4 text-xl font-semibold sm:text-2xl sm:leading-loose ">
              YOUR LIFE WITH FIT. VOTED BEST GYM EVERY YEAR
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                className="inline-block px-8 py-3 font-medium text-gray-100 transition rounded bg-zinc-900 sm:text-md md:text-lg hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                href="/pricing"
              >
                Experience Fit
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="grid lg:grid-cols-2" id="learn-more">
        {featured.map((feature) => (
          <FeaturedCard key={feature.id} {...feature} />
        ))}
      </div>
      <section>
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-5xl">Our Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                alt="Party"
                src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                className="absolute inset-0 object-cover"
                fill
              />
            </div>

            <div className="lg:py-16">
              <article>
                <div className="space-y-4 text-xl text-gray-600">
                  <p>
                    Our mission is to create a culture that fosters complete
                    wellness and offers an all-encompassing member experience.
                    We set the bar when it comes to personal training, group
                    fitness, club facilities, social events and more.
                  </p>
                  <br />
                  <p>
                    With an extraordinary oasis atmosphere, a culture that
                    fosters and encourages complete wellness, and all of the
                    tools and training you need to see incredible results -
                    there’s no wonder Fit has been voted “Best Gym” every year.
                  </p>
                </div>

                <div className="flex justify-center mt-8 md:block">
                  <Link
                    className="inline-block px-8 py-3 font-medium text-gray-100 transition rounded bg-zinc-900 sm:text-md md:text-lg hover:scale-110 hover:shadow-xl focus:outline-none focus:ring "
                    href="/pricing"
                  >
                    Experience Fit
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-black sm:grid sm:grid-cols-2">
        <div className="flex flex-col justify-center p-8 md:p-12 lg:px-16 lg:py-2">
          <div className="max-w-xl mx-auto text-center sm:text-left ">
            <h2 className="text-2xl font-bold text-gray-100 dark:text-white md:text-4xl">
              JOIN OUR COMMUNITY
            </h2>

            <p className="text-gray-100 md:mt-4 ">
              There Is No Better Time Than Now
            </p>

            <div className="mt-8">
              <Link
                className="inline-block px-8 py-3 font-medium text-gray-900 transition bg-white rounded sm:text-md md:text-lg hover:scale-110 hover:shadow-xl focus:outline-none focus:ring "
                href="/pricing"
              >
                Experience Fit
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full h-56 lg:h-96 sm:h-full">
          <Image
            alt="Gym goer"
            src="https://images.unsplash.com/photo-1518605360659-2aa9659ef66d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1433&q=80"
            className="object-cover"
            fill
          />
        </div>
      </section>
    </main>
  );
}
