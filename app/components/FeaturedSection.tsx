import FeaturedCard from "./FeaturedCard";

function FeaturedSection() {
  return (
    <div className="grid lg:grid-cols-2">
      <FeaturedCard
        title="Premium Fitness Classes"
        src="https://fitathletic.com/wp-content/uploads/2021/09/woman-yoga-pose.jpg"
        description="For the member who wants it all. Our diverse group classes offer high-intensity, full-body, motivational workouts."
        button="View Class Schedule"
        href="./class-schedule"
      />
      <FeaturedCard
        title="Fit Perx"
        src="https://fitathletic.com/wp-content/uploads/2021/09/Fit-Perx.jpg"
        description="Let your membership pay for itself"
        button="View Our Benefits"
        href="./benefits"
      />
      <FeaturedCard
        title="High-End Clubs, Equipment & Amenities"
        src="https://fitathletic.com/wp-content/uploads/2021/09/High-End.jpg"
        description="Built to inspire"
        button="Find Your Location"
        href="./locations"
      />
      <FeaturedCard
        title="Results-Driven Personal Training"
        src="https://fitathletic.com/wp-content/uploads/2022/04/Results-Driven-Personal-Training.jpg"
        description="Our world class personal trainers use our fiver pillars of health + fitness to help you assess, plan + achieve."
        button="Meet Our Trainers"
        href="./trainers"
      />
    </div>
  );
}

export default FeaturedSection;
