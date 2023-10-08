import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
  }
    const navLinks = (
        <>
          <li>
            <NavLink to="/"
            className={({ isActive, isPending }) =>
            isActive
              ? "text-[#ff9318cc] hover:text-[#ff9318cc] underline font-bold"
              : isPending
              ? "pending"
              : ""
          }
            >Home</NavLink>
          </li>
          <li>
            <NavLink to="/services"
            className={({ isActive, isPending }) =>
            isActive
              ? "text-[#ff9318cc] hover:text-[#ff9318cc] underline font-bold"
              : isPending
              ? "pending"
              : ""
          }
            >Services</NavLink>
          </li>
          <li>
            <NavLink to="/team"
            className={({ isActive, isPending }) =>
            isActive
              ? "text-[#ff9318cc] hover:text-[#ff9318cc] underline font-bold"
              : isPending
              ? "pending"
              : ""
          }
            >Team</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs"
            className={({ isActive, isPending }) =>
            isActive
              ? "text-[#ff9318cc] hover:text-[#ff9318cc] underline font-bold"
              : isPending
              ? "pending"
              : ""
          }
            >About us</NavLink>
          </li>
        </>
      );
      return (
        <div className=" navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <h2 className="text-3xl font-semibold">Social <span className="text-[#ff9318cc]">Events</span></h2>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu font-semibold menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
           {user &&
              <>
              <div className="flex gap-3 mr-3">
                <img className="w-[30px] rounded-[50%]" src={user?.photoURL} alt="userImg" />
                <p>{user.displayName}</p>
              </div>
              
              </>
              
           }
            {
              user ? 
              <button onClick={handleLogOut} className="btn text-white bg-[#ff1010aa] hover:bg-[#ce1919]">Log out</button>
              : 
              <Link to='/login'>
              <button className="btn text-white bg-[#ff9318cc] hover:bg-[#b57e3f]">Login</button>
              </Link>
            }
          </div>
        </div>
    )
};

export default Navbar;