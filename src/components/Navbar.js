import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        const existing = sessionStorage.getItem("_token");
        if (existing) {
            setHasToken(true);
        }
    }, [hasToken]);

    const handleLogOutClick = () => {
        sessionStorage.removeItem("_token");
        setHasToken(false);
    };

    return (
        <nav className="Nav">
            <NavLink className="NavLink" exact to="/">
                <i className="fas fa-home"> paintrest</i>
            </NavLink>
            <NavLink className="NavLink" exact to="/gallery">
                <i className="far fa-images"> Gallery</i>
            </NavLink>
            <NavLink className="NavLink" exact to="/create">
                <i className="fas fa-palette"> Create</i>
            </NavLink>
            {hasToken && (
                <>
                    <NavLink className="NavLink" exact to="/profile">
                        <i className="fas fa-users"> Profile</i>
                    </NavLink>
                    <NavLink
                        className="NavLink"
                        exact
                        to="login"
                        onClick={handleLogOutClick}
                    >
                        <i className="fas fa-door-open"> Logout</i>
                    </NavLink>
                </>
            )}
            {!hasToken && (
                <NavLink className="NavLink" exact to="/login">
                    <i className="fas fa-sign-in-alt"> Login</i>
                </NavLink>
            )}
        </nav>
    );
};

export default Navbar;
