import { useState } from "react";
import down from "../assets/downArrow.svg";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="mx-5">
      <h2 className="text-center font-work text-[28px] font-bold p-8 bg-[#1313130c] rounded-2xl mb-8">
        Books
      </h2>
      {/* Dropdown */}
      <div className="flex justify-center mb-14">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] hover:bg-[#3aa229] font-work text-white text-lg font-semibold px-5 space-x-2">
            <p>Sort By</p>
            <img src={down} alt="" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40 font-medium">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </details>
      </div>

      {/* tab */}
      <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-800 font-work text-lg">
        <Link
          to={""}
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0
              ? "border border-b-0 rounded-t-lg text-[#131313cc]"
              : "border-b text-[#1313137f]"
          } border-[#1313134c] bg-white`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to={"wishlist"}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1
              ? "border border-b-0 rounded-t-lg text-[#131313cc]"
              : "border-b text-[#1313137f]"
          } border-[#1313134c] bg-white`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>
      <div className="relative top-[-1px] w-full border-b border-[#1313134c] -z-10"></div>
      <div className="mt-8">
      <Outlet />
      </div>
    </div>
  );
};

export default ListedBooks;
