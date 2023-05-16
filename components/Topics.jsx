const Topics = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-full mb-5">
      <h5 className="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2">
        Popular News
      </h5>
      <ul>
        <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white hover:border-gray-200 transition-all duration-300">
          <a
            className="flex items-center text-gray-600 dark:text-slate-400"
            href="#"
          >
            <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-green-500 to-green-700"></span>
            Vue
            <span className="text-gray-500 ml-auto">23 articles</span>
          </a>
        </li>
        <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white hover:border-gray-200 transition-all duration-300">
          <a
            className="flex items-center text-gray-600 dark:text-slate-400"
            href="#"
          >
            <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-orange-500 to-orange-700"></span>
            Svelte
            <span className="text-gray-500 ml-auto">20 articles</span>
          </a>
        </li>
        <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white hover:border-gray-200 transition-all duration-300">
          <a
            className="flex items-center text-gray-600 dark:text-slate-400"
            href="#"
          >
            <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-red-500 to-red-700"></span>
            Angular
            <span className="text-gray-500 ml-auto">15 articles</span>
          </a>
        </li>
        <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white hover:border-gray-200 transition-all duration-300">
          <a
            className="flex items-center text-gray-600 dark:text-slate-400"
            href="#"
          >
            <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-blue-500 to-blue-700"></span>
            React
            <span className="text-gray-500 ml-auto">7 articles</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Topics;
