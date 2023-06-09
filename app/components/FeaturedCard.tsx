import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

type FeaturedCardProps = {
  title: string;
  src: string;
  description: string;
  button: string;
  href: string;
};
function FeaturedCard({
  title,
  src,
  description,
  button,
  href,
}: FeaturedCardProps) {
  return (
    <div>
      <Link href={href} className="relative block group">
        <div className="h-[350px] w-full sm:h-[450px]">
          <Image
            src={src}
            alt="Featured"
            className="object-cover transition duration-500  group-hover:opacity-90"
            fill
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6 ">
          <div className="p-4 bg-black ">
            <h3 className="mb-3 text-xl font-medium text-white md:text-2xl sm:mb-0">
              {title}
            </h3>

            <p className="hidden sm:block mb-3 mt-1.5 max-w-[40ch] text-md md:text-lg text-white">
              {description}
            </p>

            <button className="relative inline-flex items-center px-6 py-2 overflow-hidden text-black bg-white rounded  group md:px-8 md:py-3 focus:outline-none focus:ring">
              <ArrowLongRightIcon className="absolute right-0 w-5 h-5 transition-transform translate-x-full group-hover:-translate-x-4" />

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                {button}
              </span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeaturedCard;
