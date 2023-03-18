function TrainerCard({ src, name }) {
  return (
    <li>
      <a href="#" className="group block overflow-hidden">
        <img
          src={src}
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] object-cover"
        />

        <div className="relative bg-white pt-3">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>

          <p className="mt-2">
            <span className="sr-only">Name </span>

            <span className="tracking-wider text-gray-900">Trainer Bio</span>
          </p>
        </div>
      </a>
    </li>
  );
}

export default TrainerCard;
