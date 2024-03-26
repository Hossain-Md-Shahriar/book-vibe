import { Link } from "react-router-dom";
import bannerImage from "../assets/banner-image.png";
import star from "../assets/star.svg";

const BookCard = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <Link to={`/book/${bookId}`} className="flex flex-col">
      <div className="p-6 rounded-2xl border border-[#13131326] flex-grow flex flex-col justify-between">
        <div className="bg-[#F3F3F3] rounded-2xl p-6 flex justify-center mb-6">
          <div className="w-[134px] h-[174px]">
            <img src={image} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-4">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="bg-[#23be0a0c] py-[7px] px-4 rounded-full font-work text-[#23BE0A] text-base font-medium"
            >
              {tag}
            </p>
          ))}
        </div>
        <h3 className="font-playfair text-2xl font-bold mb-4">{bookName}</h3>
        <p className="text-[#131313cc] font-work text-base font-medium pb-5 mb-5 border-b-2 border-[#13131326] border-dashed">
          By : {author}
        </p>
        <div className="flex justify-between items-center text-[#131313cc] font-work text-base font-medium">
          <p>{category}</p>
          <div className="flex gap-2">
            <p>{rating}</p>
            <img src={star} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
