import React from "react";
import BlogCard from "../components/BlogCard";

function Page() {
  return (
    <div className="pb-8">
      <div className=" bg-black shadow-xl">
        <div className="mx-auto max-w-screen-xl px-4 py-9">
          <h1 className=" text-3xl font-bold sm:text-5xl text-white">
            Fit News
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}

export default Page;
