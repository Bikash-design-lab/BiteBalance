import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="flex gap-6 p-4 bg-gray-100 shadow-md">
            {links.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-700 hover:text-blue-600"
                    }
                >
                    {link.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default Navbar;
