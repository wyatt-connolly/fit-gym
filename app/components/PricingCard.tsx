"use-client";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/20/solid";

type PricingCardProps = {
  title: string;
  price: string;
  monthly?: null | string;
  listItems: string[];
  onClick?: () => void;
};
export default function PricingCard({
  title,
  price,
  monthly,
  listItems,
  onClick,
}: PricingCardProps) {
  return (
    <div className="w-96 flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
      <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
        {title}
      </h3>
      <p className="text-gray-500 sm:text-lg ">No enrollment fees.</p>
      <div className="flex justify-center items-baseline py-4">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
        <span className="text-gray-500 ">{monthly}</span>
      </div>

      <ul className="my-8 space-y-4 text-left">
        {listItems.map((listItem) => (
          <li key={listItem} className="flex items-center space-x-3">
            <CheckIcon className="h-5 w-5 flex-shrink text-green-500" />
            <span>{listItem}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/pricing/checkout"
        className="w-full sm:w-auto block rounded-lg bg-black px-5 py-3 text-center text-sm font-medium text-gray-100 transition hover:bg-black/90 focus:outline-none"
        onClick={onClick}
      >
        Get started
      </Link>
    </div>
  );
}
