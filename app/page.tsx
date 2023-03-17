import { motion } from "framer-motion";
import Banner from "./components/Banner";
import FeaturedCard from "./components/FeaturedCard";
import FeaturedSection from "./components/FeaturedSection";
import Video from "./components/Video";

export default function Home() {
  return (
    <main>
      <Video />
      <Banner />
      <FeaturedSection />
    </main>
  );
}
