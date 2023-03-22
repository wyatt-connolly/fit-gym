import React from "react";
import Image from "next/image";

function Page() {
  return (
    <div className="relative h-[calc(100vh_-_224px)] sm:h-[calc(100vh_-_136px)] flex flex-col">
      <Image
        src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        className="object-cover"
        fill
      />
      <div className="absolute inset-0 bg-black/25"></div>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 z-50">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Guest Pass</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full name"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />
          <input
            type="tel"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="phone"
            placeholder="Phone number"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Submit
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to let our staff contact you about
            enrollment options.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
