import Link from "next/link";

export default function PricingCard({
  membership,
  price,
  monthly,
  listItems,
  onClick,
}) {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
      <h3 className="mb-4 text-2xl font-semibold">{membership}</h3>
      <p className="font-light text-gray-500 sm:text-lg ">
        No enrollment fees.
      </p>
      <div className="flex justify-center items-baseline mt-8 mb-4">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
        {monthly ? <span className="text-gray-500 ">/ monthly</span> : <span />}
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        {listItems.map((listItem) => (
          <li key={listItem.id} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>{listItem.value}</span>
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
