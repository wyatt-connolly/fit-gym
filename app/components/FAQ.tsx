import React from "react";

function FAQ() {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 space-y-4">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 className="font-medium text-gray-900">
              What exactly does a personal trainer do?
            </h2>

            <svg
              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            If you’ve never hired a personal trainer before, you may be unsure
            as to what exactly their responsibilities would be. Essentially, a
            personal training professional is someone who strives to help
            clients achieve their fitness goals, which may include everything
            from weight loss and strength training to general health management.
            <br />
            <br />
            If you’re looking for expertise-based personal training in San
            Diego, Fit Athletic is a great choice. Our team is made up of
            experienced trainers who are fully committed to helping you reach
            your goals and strengthen your health through customized exercise
            and personalized advice.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 className="font-medium text-gray-900">
              What should I expect from my first personal training session?
            </h2>

            <svg
              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            Your first personal training session is an opportunity to get to
            know your trainer and decide if they are the right fit for you.
            Additionally, your personal trainer will use this chance to perform
            a number of initial fitness assessments that will help you track
            your progress as well as discuss your needs and long-term goals with
            you. <br />
            <br />
            Although the first part of your session will mostly focus on talking
            and paperwork, your San Diego personal trainer will probably make
            you sweat a bit in the second half. They’ll most likely have you do
            some basic exercises such as lunges, squats or kettlebell swings,
            just to assess your current fitness level and tailor your workout
            routine accordingly. They’ll also ask you about any injuries you
            might have had, or other medical conditions.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 className="font-medium text-gray-900">
              How can I find a personal trainer in Lost Angeles & beyond?
            </h2>

            <svg
              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            Looking for personal training experts in San Diego, CA? Fit Athletic
            is a luxury lifestyle and fitness club that offers a wide range of
            training options and works hard to encourage healthy living and
            complete wellness.
            <br />
            <br /> Whether you decide to visit our cutting edge gym in East
            Village, Downtown San Diego or any other of our facilities, you’ll
            get to enjoy personalized fitness advice and a club-like atmosphere.
            What's more, we also offer fantastic virtual training programs that
            enable you to work with your trainer online and track your progress
            through our app. Reach out to Fit today!
          </p>
        </details>
      </div>
    </div>
  );
}

export default FAQ;
