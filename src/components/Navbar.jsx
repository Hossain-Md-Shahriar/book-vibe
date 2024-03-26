import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 py-12 font-work">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `px-5 py-2 ${
                    isActive
                      ? "font-semibold text-[#23BE0A] border border-[#23BE0A] rounded-lg"
                      : "font-normal text-[#131313cc]"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"listed-books"}
                className={({ isActive }) =>
                  `px-5 py-2 ${
                    isActive
                      ? "font-semibold text-[#23BE0A] border border-[#23BE0A] rounded-lg"
                      : "font-normal text-[#131313cc]"
                  }`
                }
              >
                Listed Books
              </NavLink>
              <NavLink
                to={"pages-to-read"}
                className={({ isActive }) =>
                  `px-5 py-2 ${
                    isActive
                      ? "font-semibold text-[#23BE0A] border border-[#23BE0A] rounded-lg"
                      : "font-normal text-[#131313cc]"
                  }`
                }
              >
                Pages to Read
              </NavLink>
            </ul>
          </div>
          <Link to={"/"} className="text-[28px] font-bold">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4 text-lg">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `px-5 py-2 ${
                  isActive
                    ? "font-semibold text-[#23BE0A] border border-[#23BE0A] rounded-lg"
                    : "font-normal text-[#131313cc]"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"listed-books"}
              className={({ isActive }) =>
                `px-5 py-2 ${
                  isActive
                    ? "font-semibold text-[#23BE0A] border border-[#23BE0A] rounded-lg"
                    : "font-normal text-[#131313cc]"
                }`
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to={"pages-to-read"}
              className={({ isActive }) =>
                `px-5 py-2 ${
                  isActive
                    ? "font-semibold text-[#23BE0A] border border-[#23BE0A] rounded-lg"
                    : "font-normal text-[#131313cc]"
                }`
              }
            >
              Pages to Read
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-3 flex-wrap">
          <a className="btn bg-[#23BE0A] hover:bg-[#409832] text-white px-6 text-lg">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] hover:bg-[#49a9b3] text-white px-6 text-lg">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
