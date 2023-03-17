import Image from "next/image";

function Page() {
  return (
    <div>
      <div className="bg-[url('https://fitathletic.com/wp-content/uploads/2022/07/Simple-Ways-to-Maximize-Your-Workout-Results-03.jpg')] relative h-[calc(100vh_-_136px)] w-full overflow-hidden object-cover before:absolute before:inset-0 before:brightness-50  flex justify-center items-center"></div>
      <div className="py-12 px-24 text-center">
        <h2 className="text-4xl font-semibold">Categories</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border-2 border-solid p-6 space-y-8 hover:cursor-pointer ">
            <span className="text-4xl font-bold">🍔</span>
            <h3 className="font-bold">Food & Drink</h3>
          </div>
          <div className="border-2 border-solid p-7"></div>
          <div className="border-2 border-solid p-7"></div>
        </div>
      </div>
    </div>
  );
}

export default Page;
