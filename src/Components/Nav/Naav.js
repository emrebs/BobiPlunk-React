import React from 'react'
import { Container, Navbar, Nav, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./naav.module.scss";

const Naav = () => {
const menus = [
{
name: "Home",
id: 1,
path: "/Home"
},
{
name: "About",
id: 2,
path: "/About"
},
{
name: "Wishlist",
id: 3,
path: "/Wishlist"
},
]

return (
<div>
<Navbar expand="lg" className={`${styles.navBar} fixed-top`}>
<Container>
<Navbar.Brand>
      <NavLink to="Ana Sayfa" className={`${styles.navLink} text-uppercase`}>BOBIPLUNK</NavLink>

</Navbar.Brand>
<Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
      <Nav classname="ms-auto my-2 my-lg-0 " style={{ maxHeight: "100px" }} navbarScroll>


            {
                  menus.map((menu) => (

                        <NavLink
                              key={menu.id}
                              className={`${styles.navLink} ${styles.menuLink}`}
                              to={menu.path}>
                              {menu.name}
                        </NavLink>
                  ))
            }
            <NavLink
                  to="/Card"
                  className={`${styles.navLink} ${styles.cartIcon}`}>
                  <AiOutlineShoppingCart size={23} />{" "}
                  <div className={styles.cartLength}>
                        <h6>5</h6>
                  </div>
            </NavLink>
      </Nav>
</Navbar.Collapse>

</Container>
</Navbar>
</div>
);
}

export default Naav;

{/* <NavLink to="/Home">Ana Sayfa</NavLink>
<NavLink to="/About">About</NavLink>
<NavLink to="/Card">Card</NavLink> */}