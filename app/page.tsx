import { motion } from "framer-motion";
import Banner from "./components/Banner";
import FeaturedCard from "./components/FeaturedCard";
import FeaturedCTA from "./components/FeaturedCTA";
import Video from "./components/Video";
import { featured } from "@/data/featured";

export default function Home() {
  return (
    <main>
      <Video />
      <Banner />
      <div className="grid lg:grid-cols-2">
        {featured.map((feature) => (
          <FeaturedCard
            title={feature.title}
            src={feature.src}
            description={feature.description}
            button={feature.button}
            href={feature.href}
          />
        ))}
      </div>
      <FeaturedCTA />
    </main>
  );
}
