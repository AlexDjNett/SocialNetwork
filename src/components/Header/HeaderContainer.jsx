import React     from "react";
import s         from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://img.freepik.com/free-psd/luxury-beauty-logo-mockup_4513-551.jpg?size=626&ext=jpg"
           alt="Social"/>
        <div className={s.loginBlock}>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    </header>
  );
};

export default Header;
