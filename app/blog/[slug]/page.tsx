import React from "react";
import Image from "next/image";
import RecentPosts from "@/app/components/RecentPosts";

function Page() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:space-y-32 shadow-xl">
        <div className="max-w-lg lg:max-w-4xl mx-auto lg:flex lg:space-x-32">
          <div className="max-w-lg">
            <h1 className="text-2xl text-gray-900 sm:text-3xl">
              30 Minutes of Exercise Per Day
            </h1>
            <p className="mt-1.5 text-sm text-gray-500 italic font-extralight">
              By: Fontayne Sisson | On: March 14, 2023
            </p>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                width={500}
                height={500}
                alt=""
              />
              <p className="text-base text-gray-500">
                Working out regularly is one of the best things you can do for
                your overall health and wellness. Exercise has been shown to
                have numerous benefits for both physical and mental health, and
                it doesn’t have to take up a lot of time to be effective. In
                fact, just 30 minutes of exercise per day can provide a wide
                range of benefits. Here are five benefits to joining our 30
                minute Express Classes, with a focus on group exercise.
              </p>
              <Image
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                width={500}
                height={500}
                alt=""
              />
              <p className="text-base text-gray-500">
                1. Group exercise provides motivation and accountability – One
                of the biggest challenges when it comes to working out regularly
                is staying motivated and accountable. When you exercise alone,
                it’s easy to make excuses or skip workouts when you don’t feel
                like it. However, when you participate in group exercise, you
                have a built-in support system of people who are all working
                towards the same goals. This can provide motivation and
                accountability, making it more likely that you’ll stick to your
                workout routine
              </p>
              <p className="text-base text-gray-500">
                2. 30-minute exercise is easy to fit into a busy schedule –
                Another common obstacle to working out regularly is a busy
                schedule. However, 30 minutes of exercise is a relatively small
                time commitment that can be easily worked into even the busiest
                of schedules. Whether you squeeze in a quick workout before
                work, during your lunch break, or in the evening, 30 minutes is
                a manageable amount of time that can have a big impact on your
                health and wellness.
              </p>
              <p className="text-base text-gray-500">
                3. Group exercise provides a sense of community – In addition to
                providing motivation and accountability, group exercise can also
                provide a sense of community. When you work out with others,
                you’re part of a group of like-minded people who are all working
                towards the same goals. This can create a sense of camaraderie
                and belonging that can be beneficial for mental health and
                overall well-being.
              </p>
              <p className="text-base text-gray-500">
                4. 30-minute exercise can improve physical health – Of course,
                one of the primary benefits of exercise is improved physical
                health. Regular exercise has been shown to reduce the risk of
                chronic diseases such as heart disease, diabetes, and certain
                types of cancer. It can also improve cardiovascular health,
                strengthen muscles and bones, and help with weight management.
                And the good news is that you don’t have to spend hours at the
                gym to reap these benefits – just 30 minutes of exercise per day
                can make a difference
              </p>
              <p className="text-base text-gray-500">
                5. Group exercise can be more fun than working out alone –
                Finally, group exercise can simply be more fun than working out
                alone. When you exercise with others, you can try new activities
                and workouts that you might not have considered on your own. And
                the social aspect of group exercise can make the experience more
                enjoyable overall
              </p>
              <Image
                src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1113&q=80"
                width={500}
                height={500}
                alt=""
              />
              <p className="text-base text-gray-500">
                In conclusion, our 30 minute Express Classes can have numerous
                benefits for both physical and mental health. And when you
                participate in group exercise, you can enjoy additional benefits
                such as motivation, accountability, a sense of community, and
                increased enjoyment. So if you’re looking to improve your health
                and wellness, consider joining a group exercise class or finding
                a workout buddy to help keep you on track
              </p>
            </div>
          </div>
          <div>
            <div className="relative py-16 lg:hidden">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
            </div>
            <h2 className="text-xl text-gray-900 sm:text-2xl">Recent Posts</h2>
            <div className="py-4 space-y-4 max-w-sm">
              <RecentPosts />
              <RecentPosts />
              <RecentPosts />
              <RecentPosts />
              <RecentPosts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
