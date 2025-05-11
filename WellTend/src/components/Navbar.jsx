import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex p-1 justify-between items-center flex-wrap bg-wing-100 shadow rounded-full">
            <Link
                to="/"
                className="bg-wing-200 text-black font-bold p-3 rounded-full shadow hover:bg-wing-300"
            >
                WellTend
            </Link>

            <nav className="bg-wing-200 text-black font-bold p-1 rounded-full shadow flex flex-wrap items-center gap-1">
                <Link
                    to="/"
                    className='navbar-link'
                >
                    Home
                </Link>
                <Link
                    to="/daily"
                    className='navbar-link'
                >
                    Write
                </Link>
                <Link
                    to="/journal"
                    className='navbar-link'
                >
                    Journal
                </Link>
                <Link
                    to="/export"
                    className='navbar-link'
                >
                    Export
                </Link>
            </nav>

            <Link
                to="/coach"
                className="bg-wing-200 text-black font-bold p-3 rounded-full shadow hover:bg-wing-300"
            >
                Coach
            </Link>
        </div>
    )
}

export default Navbar;