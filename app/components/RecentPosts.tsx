import React from "react";
import Image from "next/image";

function RecentPosts() {
  return (
    <div className="rounded-2xl bg-gray-400 to-yellow-500 p-0.5 shadow-xl">
      <a className="block rounded-xl bg-white" href="">
        <div className="flex space-x-2">
          <Image
            className="rounded-l-xl"
            src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1113&q=80"
            width={80}
            height={20}
            alt=""
          />
          <div className="">
            {" "}
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              Science of Chemistry
            </h3>
            <p className="mt-2 text-sm text-gray-500 italic font-extralight">
              April 5, 2023
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default RecentPosts;
