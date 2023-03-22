import { motion } from "framer-motion";
import FeaturedCard from "./components/FeaturedCard";

import { featured } from "@/data/featured";
import { reviews } from "@/data/reviews";
import Testimonial from "./components/Testimonial";
import AnimatedTextCharacter from "./components/AnimatedTextCharacter";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative flex items-center justify-center h-[calc(100vh_-_224px)] sm:h-[calc(100vh_-_136px)] overflow-hidden">
        <div className="relative z-20 text-3xl sm:text-5xl lg:text-8xl font-extrabold text-white flex items-center space-x-8">
          <p className="p-2 sm:p-6 lg:p-8 border-solid border-4 border-white rounded-full">
            fit
          </p>

          <p className="leading-none">
            A <br /> LIFESTYLE <br /> GYM
          </p>
        </div>
        <video
          src="https:\/\/fitathletic.com\/wp-content\/uploads\/2023\/01\/FIT-Drone-Compilation.mp4"
          autoPlay
          muted
          loop
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none object-contain brightness-75"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:py-56 lg:items-center">
          <div className="mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl lg:text-8xl font-extrabold ">
              <AnimatedTextCharacter text="REINVENT" />
              <AnimatedTextCharacter text="YOUR LIFE WITH FIT" />
            </h2>
            <p className="mt-4 text-xl sm:text-2xl sm:leading-loose font-semibold ">
              YOUR LIFE WITH FIT. VOTED BEST GYM EVERY YEAR
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="inline-block rounded bg-indigo-600 px-8 py-3 sm:text-md md:text-lg font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                href="/download"
              >
                Experience Fit
              </a>
              <a
                className="inline-block rounded border border-current px-8 py-3 sm:text-md md:text-lg font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                href="/download"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="grid lg:grid-cols-2">
        {featured.map((feature) => (
          <FeaturedCard {...feature} />
        ))}
      </div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 lg:py-32  ">
          <div className="items-end justify-between sm:flex">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight ">
                Read trusted reviews from our customers
              </h2>

              <p className="mt-8 max-w-lg text-gray-500">
                Founded in Southern California in 1984, Fit continues to seek
                innovative ways to enhance the physical and emotional well-being
                of our increasingly diverse membership base. Today, our
                state-of-the-art clubs span the continent, and we’re still
                expanding. Our strong and successful growth stems from our
                commitment to understanding and meeting the distinct needs of
                each community we serve.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <Testimonial {...review} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-5xl">OUR PHILOSOPHY</h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                alt="Party"
                src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                className="absolute inset-0  object-cover"
                fill
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600 ">
                <p>
                  Our mission is to create a culture that fosters complete
                  wellness and offers an all-encompassing member experience. We
                  set the bar when it comes to personal training, group fitness,
                  club facilities, social events and more.
                </p>
                <br />
                <p>
                  With an extraordinary oasis atmosphere, a culture that fosters
                  and encourages complete wellness, and all of the tools and
                  training you need to see incredible results – there’s no
                  wonder Fit has been voted “Best Gym” every year.
                </p>
              </article>
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
    </main>
  );
}
