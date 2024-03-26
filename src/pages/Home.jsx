import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Books from "../components/Books";

const Home = () => {
  const books = useLoaderData();
  return (
    <div className="mx-5 mb-[130px]">
      <Banner />
      <Books books={books} />
    </div>
  );
};

export default Home;
