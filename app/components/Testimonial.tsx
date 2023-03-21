import { StarIcon } from "@heroicons/react/20/solid";

function Testimonial({ title, review, person }) {
  return (
    <blockquote className="flex h-full flex-col justify-between bg-white p-12">
      <div>
        <div className="flex gap-0.5 text-green-500">
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold text-pink-600 sm:text-2xl">
            {title}
          </h3>

          <p className="mt-4 text-gray-600">&quot;{review}&quot;</p>
        </div>
      </div>

      <footer className="mt-8 text-gray-500">{person}</footer>
    </blockquote>
  );
}

export default Testimonial;
