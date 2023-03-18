import TrainerCard from "./TrainerCard";

function TrainerCollection() {
  return (
    <div className="pb-8 sm:pb-12 ">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Trainers
        </h2>

        <p className="mt-4 max-w-md text-gray-500">
          Powered by positive energy, driven by member results.
        </p>
      </header>

      <div className="mt-8 flex items-center justify-end">
        <div>
          <label htmlFor="SortBy" className="sr-only">
            SortBy
          </label>

          <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
            <option>Sort By</option>
            <option value="Title, DESC">Title, DESC</option>
            <option value="Title, ASC">Title, ASC</option>
          </select>
        </div>
      </div>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <TrainerCard
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          name="Harrison Dover"
        />
        <TrainerCard
          src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
          name="Vadim Bogulov"
        />
        <TrainerCard
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          name="Aiony Haust"
        />
        <TrainerCard
          src="https://images.unsplash.com/photo-1623330188314-8f4645626731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80"
          name="Olga Nayda"
        />
        <TrainerCard
          src="https://images.unsplash.com/photo-1636041282858-351171ff944c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="Oguz Yagiz Kara"
        />
        <TrainerCard
          src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1956&q=80"
          name="Jurica Koletic"
        />
        <TrainerCard
          src="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
          name="Andrew Power"
        />
        <TrainerCard
          src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          name="Fatane Rahimi"
        />
      </ul>
    </div>
  );
}

export default TrainerCollection;
