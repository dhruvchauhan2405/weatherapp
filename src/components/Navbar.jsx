import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 h-16 bg-opacity-25">
      <div className="mx-auto py-2 px-4">
        <div className="flex justify-between h-full">
          <div className="flex space-x-4">
            <span className="text-3xl font-semibold text-white my-auto">
              Weatherly
            </span>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
            <button className="rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm0 2c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 10a7.001 7.001 0 01-7-7c0-3.866 3.134-7 7-7s7 3.134 7 7a7.001 7.001 0 01-7 7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
