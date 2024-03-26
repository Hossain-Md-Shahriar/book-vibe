import React from "react";
import map from "../assets/map.svg";
import people from "../assets/people.svg";
import page from "../assets/page.svg";
import { Link } from "react-router-dom";

const ListCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 border border-[#13131326] rounded-2xl items-center">
      <div className="flex justify-center items-center size-[230px] rounded-2xl bg-[#1313130c]">
        <img src={image} alt="" width={130} />
      </div>
      <div className="flex-grow">
        <h2 className="font-playfair text-2xl font-bold mb-4">{bookName}</h2>
        <p className="text-[#131313cc] font-work text-base font-medium mb-4">
          By: {author}
        </p>
        <div className="flex gap-4 items-center mb-4 flex-wrap">
          <p className="font-work font-bold">Tag</p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="bg-[#23be0a0c] py-[7px] px-4 rounded-full font-work text-[#23BE0A] text-base font-medium"
              >
                #{tag}
              </p>
            ))}
          </div>
          <div className="flex gap-2">
            <img src={map} alt="" />
            <p className="text-[#131313cc] font-work">
              Year of Publishing: {yearOfPublishing}
            </p>
          </div>
        </div>
        <div className="flex gap-4 text-[#13131399] font-work pb-4 border-b-2 border-[#13131326] mb-4">
          <div className="flex gap-2">
            <img src={people} alt="" />
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex gap-2">
            <img src={page} alt="" />
            <p>Page {totalPages}</p>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button className="text-[#328EFF] bg-[#328eff26] py-[11px] px-5 rounded-full">
            Category: {category}
          </button>
          <button className="text-[#FFAC33] bg-[#ffac3326] py-[11px] px-5 rounded-full">
            Rating: {rating}
          </button>
          <Link to={`/book/${bookId}`}>
            <button className="text-white bg-[#23BE0A] hover:bg-[#33a521] py-[11px] px-5 rounded-full font-medium">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
