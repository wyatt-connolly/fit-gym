import {
  Bars3Icon,
  BarsArrowDownIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="bg-indigo-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-center font-medium sm:text-left">
          Special Offer 🔥 <br className="sm:hidden" />
          10 Day All Club Access Membership with $0 Enrollment Fees
        </p>

        <a
          className="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
          href="#"
        >
          SHOP NOW
        </a>
      </div>

      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <p className="text-2xl font-extrabold text-gray-500">fit</p>
          </div>

          <nav
            aria-label="Site Nav"
            className="hidden gap-8 text-sm font-medium md:flex"
          >
            <a className="text-gray-500" href="">
              Class Schedule
            </a>
            <a className="text-gray-500" href="">
              Membership
            </a>
            <a className="text-gray-500" href="">
              Amenities
            </a>
            <a className="text-gray-500" href="">
              About
            </a>
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
            <a
              className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
              href=""
            >
              Guest Pass
            </a>

            <a
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
              href=""
            >
              Join Online
            </a>
          </div>

          <div className="lg:hidden">
            <button
              className="rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
