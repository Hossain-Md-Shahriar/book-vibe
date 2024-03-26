import { useEffect, useState } from "react";
import ListCard from "./ListCard";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist")));
  }, []);
  

  return (
    <div className="space-y-6 mb-32">
        {
            wishlist && wishlist.map(wish => <ListCard key={wish.bookId} book={wish} />)
        }
    </div>
  )
};

export default Wishlist;
