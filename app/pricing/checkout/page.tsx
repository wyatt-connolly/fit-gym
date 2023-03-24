import Image from "next/image";

function Page() {
  return (
    <div className="lg:h-[calc(100vh_-_136px)] mx-auto max-w-screen-xl px-4 py-8 flex justify-center items-center">
      <div className=" w-full xl:w-3/4 lg:w-11/12 flex justify-center gap-16">
        <div className=" relative w-full rounded-l-lg hidden lg:block">
          <Image
            className="object-cover"
            alt=""
            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            fill
          />
        </div>

        <div className="w-full lg:w-7/12 bg-white  rounded-lg lg:rounded-l-none">
          <h3 className="text-2xl text-center">Review & Confirm Membership</h3>
          <form className="bg-white rounded pt-6">
            <div className="flex flex-col sm:flex-row sm:space-x-4 lg:space-x-0 lg:flex-col  ">
              <div className="w-full ">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full mt-2 sm:mt-0 lg:mt-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className=" flex flex-col sm:flex-row sm:space-x-4 justify-center  ">
              <div className="w-full sm:w-2/5 mt-2 ">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="zipCode"
                >
                  Zip Code
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Zip Code"
                />
              </div>
              <div className="w-full sm:w-3/5 mt-2 ">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="mt-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="my-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Checkout
              </button>
            </div>
            <hr className="mb-6 border-t" />

            <div className="text-center">
              <a
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="#"
              >
                Having trouble?
                <br /> Contact customer support
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
