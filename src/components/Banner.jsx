import { Link } from "react-router-dom";
import bannerImage from "../assets/banner-image.png";

const Banner = () => {
  return (
    <div className="bg-[#1313130c] rounded-3xl p-5 flex flex-col lg:flex-row gap-20 justify-center items-center lg:h-[554px] mb-[100px]">
      <div>
        <h1 className="font-playfair text-[40px]/[64px] lg:text-[56px]/[84px] font-bold max-w-[526px] mb-12">
          Books to freshen up your bookshelf
        </h1>
        <Link
          to={"listed-books"}
          className="bg-[#23BE0A] px-7 py-5 rounded-lg font-work text-xl font-bold text-white"
        >
          View The List
        </Link>
      </div>
      <div>
        <img src={bannerImage} alt="book" width={318} />
      </div>
    </div>
  );
};

export default Banner;
