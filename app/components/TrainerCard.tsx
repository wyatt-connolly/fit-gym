import Image from "next/image";

type TrainerCardProps = {
  src: string;
  name: string;
  profession: string;
};
function TrainerCard({ src, name, profession }: TrainerCardProps) {
  return (
    <li>
      <div className="group block overflow-hidden">
        <div>
          <div className="relative h-[350px] w-full sm:h-[450px]">
            <Image
              src={src}
              alt=""
              className="transition duration-500 group-hover:scale-105  object-cover"
              fill
            />
          </div>

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              {name}
            </h3>

            <p className="mt-2 text-gray-900">
              <span className="sr-only">Name</span>

              <span className="text-gray-900">{profession}</span>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TrainerCard;
