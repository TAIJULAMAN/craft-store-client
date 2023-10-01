import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";
import imgp from "../../../assets/profile/profile.jpg";
const Navbar = () => {

  const {user,logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="products">Our Products</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/aboutcraft">Crafts</Link>
      </li>
    
      {user?.email ?  (
           <>
             <li><Link to="/bookings">My Bookings</Link></li>
             <li>
               <button onClick={handleLogOut}>Log out</button>
             </li>
           </>
         ) : (
          <>
            <li>
        <Link to="/login">Login</Link>
      </li>
           <li>
             <Link to="/signup">Sign Up</Link>
           </li>
           </>
         )}
    </>
  );
  return (
    <div className="navbar bg-cyan-300">
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

          {/* DROPDOWN HEADER */}

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link>
          <img className="w-16 h-16" src={logo} alt="" />
        </Link>
        <h2 className="md:text-3xl sm:text-2xl font-semibold ml-4 text-gray-950">
          CRAFTS
        </h2>
      </div>

      {/*MAIN  HEADER  */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>


{/* profile */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={imgp} />
              {/* user?.email ?  (<img src={user.img} />): <Link to="/signup">Sign Up</Link> */}
            </div>
          </label>

      
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <p  onClick={handleLogOut}>Logout</p>
           
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
