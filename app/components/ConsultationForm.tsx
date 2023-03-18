import React from "react";

function ConsultationForm() {
  return (
    <div className="py-12 sm:px-6 lg:py-32 lg:px-8">
      <h2 className="text-3xl font-bold sm:text-4xl text-center">
        PT Consultation Form
      </h2>
      <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div>
          <label htmlFor="First-name" className="sr-only">
            First name
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="First name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="last-name" className="sr-only">
            Last name
          </label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Last name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="Phone" className="sr-only">
            Phone
          </label>

          <div className="relative">
            <input
              type="tel"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-block rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConsultationForm;
