import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
const Menu=()=>{
    return(
        <>
      <menu>
        <nav>
            <ul>
              <Link to="/About"><li>About</li></Link>
              <Link to="/Portfolio"><li>Portfolio</li></Link>
              <Link to="/Contact"><li>Contact</li></Link>
            </ul>
        </nav>
      </menu>
        </>
    )
}
export default Menu;