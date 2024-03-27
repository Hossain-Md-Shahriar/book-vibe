import { useEffect, useState } from "react";
import Chart from "../components/Chart";

const PagesToRead = () => {
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    setReadList(JSON.parse(localStorage.getItem("read")));
  }, []);

  return (
    <div className="mx-5 bg-[#13131307] rounded-2xl p-3 lg:p-28 mb-28">
      <Chart readList={readList} />
    </div>
  );
};

export default PagesToRead;
