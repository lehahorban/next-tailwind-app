const Subscripe = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-full mb-5">
      <h5 className="font-bold text-lg uppercase text-gray-700 mb-2 dark:text-white">
        Subscribe
      </h5>
      <p className="text-gray-600 mb-4 dark:text-slate-400"></p>
      <input
        placeholder="you email address"
        type="email"
        className="text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-600 transition-all duration-300"
      />
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800 transition-all duration-300">
        Subscribe
      </button>
    </div>
  );
};

export default Subscripe;
