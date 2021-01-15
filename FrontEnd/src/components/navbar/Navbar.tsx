import React, {useRef, useState} from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.scss";
import {useDispatch, useSelector} from "react-redux";
import {isLoggedIn, loggedUser, logout} from "../../store/ducks/Auth";
import {AppState} from "../../store/ducks";

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: AppState) => isLoggedIn(state));
    const authSession = useSelector((state: AppState) => loggedUser(state));
    const [responsiveOpen, setResponsiveOpen] = useState(false);
    function toggleResponsive() {
        setResponsiveOpen(!responsiveOpen);
    }
    return (

        <nav id="main-navbar" className={(responsiveOpen ? "responsive" : "")}>
            <a href="https://sun9-72.userapi.com/impf/HJ17KuqdE2mKbDzKkqlVP3tXHWltncrxMratdA/lJCs7K9RbF8.jpg?size=937x713&quality=96&proxy=1&sign=75c3bd7fbd7e39fbd0b1d6720279e351&type=album"> ITMO 2021</a>
            <a href="https://github.com/KirillShakhov/Web.Lab4">GitHub repository</a>
            {isAuthenticated ? (
                <>
                    <NavLink to="/">Нарния</NavLink>
                    <span className="nav-username">{"Ваше имя:"+authSession?.username}</span>
                    <a className={"default-btn btn-navbar"} href="#" onClick={() => dispatch(logout(authSession))}>Выйти (Не в окно)</a>
                </>
            ) : (
                <>
                    <NavLink to="/login">Начало</NavLink>
                </>
            )}
            <a href="#" className="toggler-responsive" onClick={() => toggleResponsive()}>
                Nav
            </a>
        </nav>

    );
}

export default Navbar;