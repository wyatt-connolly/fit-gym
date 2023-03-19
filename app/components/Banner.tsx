import AnimatedTextCharacter from "./AnimatedTextCharacter";

function Banner() {
  return (
    <div>
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
    </div>
  );
}

export default Banner;
