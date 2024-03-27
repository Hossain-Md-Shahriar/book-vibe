import { useEffect, useState } from "react";
import down from "../assets/downArrow.svg";
import Read from "../components/Read";
import Wishlist from "../components/Wishlist";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    setReadList(JSON.parse(localStorage.getItem("read")));
    setWishlist(JSON.parse(localStorage.getItem("wishlist")));
  }, []);

  const handleSort = (sort) => {
    if (readList) {
      const tempRead = [...readList];
      if (sort === "rating") {
        tempRead.sort((a, b) => b.rating - a.rating);
        setReadList(tempRead);
      } else if (sort === "numberOfPages") {
        tempRead.sort((a, b) => b.totalPages - a.totalPages);
        setReadList(tempRead);
      } else {
        tempRead.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setReadList(tempRead);
      }
    }
    if (wishlist) {
      const tempWish = [...wishlist];
      if (sort === "rating") {
        tempWish.sort((a, b) => b.rating - a.rating);
        setWishlist(tempWish);
      } else if (sort === "numberOfPages") {
        tempWish.sort((a, b) => b.totalPages - a.totalPages);
        setWishlist(tempWish);
      } else {
        tempWish.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setWishlist(tempWish);
      }
    }
  };

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
            <li onClick={() => handleSort("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSort("numberOfPages")}>
              <a>Number of Pages</a>
            </li>
            <li onClick={() => handleSort("publishedYear")}>
              <a>Published Year</a>
            </li>
          </ul>
        </details>
      </div>

      {/* tab */}
      <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-800 font-work text-lg">
        <div
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 cursor-pointer ${
            tabIndex === 0
              ? "border border-b-0 rounded-t-lg text-[#131313cc]"
              : "border-b text-[#1313137f]"
          } border-[#1313134c] bg-white`}
        >
          <span>Read Books</span>
        </div>
        <div
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 cursor-pointer ${
            tabIndex === 1
              ? "border border-b-0 rounded-t-lg text-[#131313cc]"
              : "border-b text-[#1313137f]"
          } border-[#1313134c] bg-white`}
        >
          <span>Wishlist Books</span>
        </div>
      </div>
      <div className="relative top-[-1px] w-full border-b border-[#1313134c] -z-10"></div>
      <div className="mt-8">
        {tabIndex ? (
          <Wishlist wishlist={wishlist} />
        ) : (
          <Read readList={readList} />
        )}
      </div>
    </div>
  );
};

export default ListedBooks;
