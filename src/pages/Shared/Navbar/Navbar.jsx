import { Link, NavLink } from "react-router-dom";
import user from "../../../assets/user.png"

const Navbar = () => {
    const navLinks = <>
        <li> <NavLink to="/" className={({ isActive, isPending }) =>
            isActive ? "active px-3 py-2 rounded-lg bg-red-500 text-white font-semibold" : isPending ? "pending" : ""}>Home</NavLink>
        </li>
        <li> <NavLink to="/about" className={({ isActive, isPending }) =>
            isActive ? "active px-3 py-2 rounded-lg bg-red-500 text-white font-semibold" : isPending ? "pending" : ""}>About</NavLink>
        </li>
        <li> <NavLink to="/carrer" className={({ isActive, isPending }) =>
            isActive ? "active px-3 py-2 rounded-lg bg-red-500 text-white font-semibold" : isPending ? "pending" : ""}>Carrer</NavLink>
        </li>
    </>
    return (
        <div className="navbar mb-20 mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-[#706F6F] flex flex-col gap-4 font-semibold dropdown-content mt-3 z-[1] p-3 py-6 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-[#706F6F] flex gap-8 font-semibold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <img className="w-12 h-12 mr-2" src={user}/>
                <Link to="/login">
                    <button className="btn bg-[#403F3F] text-white hover:bg-black font-semibold">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;