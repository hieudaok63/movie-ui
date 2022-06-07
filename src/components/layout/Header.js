import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header flex items-center justify-center gap-x-5 py-10 text-gray-200">
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
                Movies
            </NavLink>
            <NavLink
                to="/movies"
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
            >
                Anime
            </NavLink>
        </header>
    );
}

export default Header;
