import { motion } from "framer-motion";
import Banner from "./components/Banner";
import FeaturedCard from "./components/FeaturedCard";
import FeaturedCTA from "./components/FeaturedCTA";
import Video from "./components/Video";
import { featured } from "@/data/featured";
import { reviews } from "@/data/reviews";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main>
      <Video />
      <Banner />
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
      <FeaturedCTA />
    </main>
  );
}
