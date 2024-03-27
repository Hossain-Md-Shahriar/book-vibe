import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId == id);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const saveReadData = () => {
    const saved = JSON.parse(localStorage.getItem("read")) || [];
    const isExist = saved.find((item) => item.bookId == id);
    if (isExist) {
      alert("already in read list");
    } else {
      saved.push(book);
      localStorage.setItem("read", JSON.stringify(saved));
      alert("saved to read list");
    }
  };

  const saveWishlistData = () => {
    const savedWish = JSON.parse(localStorage.getItem("wishlist")) || [];
    const savedRead = JSON.parse(localStorage.getItem("read")) || [];
    const isExistWish = savedWish.find((item) => item.bookId == id);
    const isExistRead = savedRead.find((item) => item.bookId == id);
    if (isExistWish) {
      alert("already in wishlist");
    } else if (isExistRead) {
      alert("already in read list");
    } else {
      savedWish.push(book);
      localStorage.setItem("wishlist", JSON.stringify(savedWish));
      alert("saved to wishlist");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 mb-40 mx-5">
      <div className="bg-[#1313130c] rounded-2xl p-[74px] flex justify-center items-center">
        <div className="w-[425px]">
          <img className="w-full h-full object-contain" src={image} alt="" />
        </div>
      </div>
      <div className="w-full">
        <h2 className="font-playfair text-[40px] font-bold mb-4">{bookName}</h2>
        <p className="text-[#131313cc] font-work text-xl font-medium mb-6">
          By: {author}
        </p>
        <p className="text-[#131313cc] font-work text-xl font-medium py-4 border-t-2 border-b-2 border-[#13131326]">
          {category}
        </p>
        <p className="font-work text-base/[26px] text-[#1313139a] py-6">
          <span className="font-bold text-black">Review: </span>
          {review}
        </p>
        <div className="flex gap-4 items-center pb-6 border-b-2 border-[#13131326] mb-6">
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
        </div>
        <div className="space-y-3 mb-8">
          <div className="flex gap-10">
            <p className="text-[#1313139a] max-w-[150px] flex-grow">
              Number of Pages:
            </p>
            <p className="font-bold">{totalPages}</p>
          </div>
          <div className="flex gap-10">
            <p className="text-[#1313139a] max-w-[150px] flex-grow">
              Publisher:
            </p>
            <p className="font-bold">{publisher}</p>
          </div>
          <div className="flex gap-10">
            <p className="text-[#1313139a] max-w-[150px] flex-grow">
              Year of Publishing:
            </p>
            <p className="font-bold">{yearOfPublishing}</p>
          </div>
          <div className="flex gap-10">
            <p className="text-[#1313139a] max-w-[150px] flex-grow">Rating:</p>
            <p className="font-bold">{rating}</p>
          </div>
        </div>
        <div className="space-x-4">
          <button
            onClick={saveReadData}
            className="font-work text-lg font-semibold py-4 px-7 border border-[#1313134c] rounded-lg hover:bg-[#dfdfdfdf]"
          >
            Read
          </button>
          <button
            onClick={saveWishlistData}
            className="bg-[#50B1C9] hover:bg-[#4098ae] text-white font-work text-lg font-semibold py-4 px-7 rounded-lg"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
