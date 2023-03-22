import { motion } from "framer-motion";
import FeaturedCard from "./components/FeaturedCard";
import Video from "./components/Video";
import { featured } from "@/data/featured";
import { reviews } from "@/data/reviews";
import Testimonial from "./components/Testimonial";
import AnimatedTextCharacter from "./components/AnimatedTextCharacter";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Video />
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:py-56 lg:items-center">
          <div className="mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl lg:text-8xl font-extrabold ">
              <AnimatedTextCharacter text="REINVENT" />
              <AnimatedTextCharacter text="YOUR LIFE WITH FIT" />
            </h2>
            <p className="mt-4 sm:text-2xl sm:leading-loose font-semibold ">
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
        <div className="mx-auto max-w-screen-2xl px-4 py-8 ">
          <div className="items-end justify-between sm:flex">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
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
    </main>
  );
}
