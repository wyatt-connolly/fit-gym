function Video() {
  return (
    <div className="relative flex items-center justify-center h-[calc(100vh_-_136px)] overflow-hidden">
      <div className="relative z-20 text-3xl sm:text-5xl lg:text-8xl font-extrabold text-white flex items-center space-x-8">
        <p className="p-2 sm:p-6 lg:p-8 border-solid border-4 border-white rounded-full">
          fit
        </p>

        <p className="leading-none">
          A <br /> LIFESTYLE <br /> GYM
        </p>
      </div>
      <video
        src="https:\/\/fitathletic.com\/wp-content\/uploads\/2023\/01\/FIT-Drone-Compilation.mp4"
        autoPlay
        muted
        loop
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none object-contain brightness-75"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
