import Image from "next/image";

function Card({ title, src, description, button }) {
  return (
    <div>
      <a href="#" className="relative block group">
        <img
          src={src}
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
          <div className="bg-black px-4 py-4 ">
            <h3 className="text-2xl font-medium text-white">{title}</h3>

            <p className="mt-1.5 max-w-[40ch] text-lg text-white">
              {description}
            </p>

            <button
              className="mt-3 group relative inline-flex items-center overflow-hidden rounded bg-white px-8 py-3 text-black focus:outline-none focus:ring "
              href="/download"
            >
              <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                {button}
              </span>
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
