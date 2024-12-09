import Link from "next/link";

export default function Hero() {
  return (
    <div className=" flex-col-reverse md:flex-row px-2 md:px-80 flex ">
      <div className=" flex-col md:w-1/2 text-justify md:py-32 px-4">
        <h2 className="md:text-2xl text-xl font-bold tracking-tight text-gray-900">
          Discover Your Next Adventure 🌍✈️
        </h2>
        <h2 className="font-normal md:py-10">
          Inspiring travel adventures with practical tips and sustainable
          practices. Discover amazing destinations and join our community of
          explorers.
        </h2>
        <Link
          href="#"
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Read Me
        </Link>
      </div>
      <div className=" flex flex-row md:w-1/2 md:py-4 md:justify-end justify-center mb-4">
        <img
          className="md:w-[500px] h-80 rounded-xl "
          src="https://img.freepik.com/free-photo/travelers-young-women-look-amazing-mountains-forests-wanderlust-travel-ideas_1150-15042.jpg?t=st=1733233916~exp=1733237516~hmac=cb5d97eec380d24ff00fc60d57c058acc451f04f362963c5a9fb989f6034259f&w=1380"
          alt="travelling banner"
        />
      </div>
    </div>
  );
}
