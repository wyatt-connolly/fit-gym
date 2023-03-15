import { motion } from "framer-motion";
import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <div className="relative flex items-center justify-center h-[calc(100vh_-_68px)] overflow-hidden">
        <div className="relative z-30 text-3xl sm:text-5xl lg:text-8xl font-extrabold text-white flex items-center space-x-8">
          <p className="p-2 sm:p-6 lg:p-8 border-solid border-4 border-white rounded-full">
            fit
          </p>

          <p className="leading-none">
            A <br /> LIFESTYLE <br /> GYM
          </p>
        </div>
        <video
          src="https:\/\/fitathletic.com\/wp-content\/uploads\/2023\/01\/FIT-Drone-Compilation.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none object-contain"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto text-center">
            <div className="text-3xl sm:text-5xl lg:text-8xl font-extrabold ">
              <h1> REINVENT </h1>
              <h1 className="font-extrabold block">YOUR LIFE WITH FIT.</h1>
            </div>
            <p className="mt-4 sm:text-2xl sm:leading-loose font-semibold ">
              VOTED "BEST GYM" EVERY YEAR
            </p>
            <p className="mt-4 sm:text-xl sm:leading-relaxed">
              We set the bar when it comes to personal training, group fitness,
              club facilities, social events and more.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                href="/download"
              >
                Experience Fit
              </a>
              <a
                className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                href="/download"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="grid lg:grid-cols-2 gap-4">
        <Card
          title="Premium Fitness Classes"
          src="https://fitathletic.com/wp-content/uploads/2021/09/woman-yoga-pose.jpg"
          description="For the member who wants it all. Our diverse group classes offer high-intensity, full-body, motivational workouts."
          button="View Class Schedule"
        />
        <Card
          title="Fit Perx"
          src="https://fitathletic.com/wp-content/uploads/2021/09/Fit-Perx.jpg"
          description="Let your membership pay for itself"
          button="View Our Benefits"
        />
        <Card
          title="High-End Clubs, Equipment & Amenities"
          src="https://fitathletic.com/wp-content/uploads/2021/09/High-End.jpg"
          description="Built to inspire"
          button="Find Your Location"
        />
        <Card
          title="Results-Driven Personal Training"
          src="https://fitathletic.com/wp-content/uploads/2022/04/Results-Driven-Personal-Training.jpg"
          description="Our world class personal trainers use our fiver pillars of health + fitness to help you assess, plan + achieve."
          button="Meet Our Trainers"
        />
      </div>
    </main>
  );
}
