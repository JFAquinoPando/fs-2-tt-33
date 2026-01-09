import { NavLink } from "react-router-dom";

export const Menu = () => <>
    <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/animes"}>Animes</NavLink>
        <NavLink to={"/contacto"}>Contacto</NavLink>
    </nav>
</>