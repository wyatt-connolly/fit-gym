"use-client";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/20/solid";

type PricingCardProps = {
  title: string;
  price: string;
  monthly: null | string;
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
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg ">
        No enrollment fees.
      </p>
      <div className="flex justify-center items-baseline mt-8 mb-4">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
        <span className="text-gray-500 ">{monthly}</span>
      </div>

      <ul className="mb-8 space-y-4 text-left">
        {listItems.map((listItem) => (
          <li key={listItem} className="flex items-center space-x-3">
            <CheckIcon className="h-5 w-5 flex-shrink text-green-500" />
            <span>{listItem}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/pricing/checkout"
        className="text-white bg-black hover:bg-gray-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        onClick={onClick}
      >
        Get started
      </Link>
    </div>
  );
}
