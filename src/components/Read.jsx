import { useEffect, useState } from "react";
import ListCard from "./ListCard";

const Read = ({readList}) => {

  return (
    <div className="space-y-6 mb-32">
      {readList &&
        readList.map((read) => <ListCard key={read.bookId} book={read} />)}
    </div>
  );
};

export default Read;
