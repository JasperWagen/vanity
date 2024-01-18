import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";


function Navbar() {
  return (
    <>
        <Nav>
            <Bars />

            <NavMenu>
                <NavLink to="/about" >
                    About
                </NavLink>
                <NavLink to="/events" activeStyle>
                    Events
                </NavLink>
                <NavLink to="/gallery" activeStyle>
                    Gallery
                </NavLink>
                <NavLink to="/team" activeStyle>
                    Teams
                </NavLink>
            </NavMenu>
        </Nav>
    </>
  );
};

export default Navbar