import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";
import useAuth from "../../hooks/useAuth";
const Header = () => {
  const { user, signOutUser } = useAuth();
  return (
    <>
      <Navbar className="bg-color" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-logo" href="#">
            <div className="d-flex align-items-center justify-content-center">
              <NavLink className="nav-link nav-item" to="/">
                <img className="navbar-logo" src={logo} alt="" />
              </NavLink>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <NavLink
                className="nav-link nav-item"
                to="/home"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#fb814e",
                }}
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link nav-item"
                to="/about"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#fb814e",
                }}
              >
                About Us
              </NavLink>
              <NavLink
                className="nav-link nav-item"
                to="/addservice"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#fb814e",
                }}
              >
                AddService
              </NavLink>

              <NavLink
                className="nav-link nav-item"
                to="/orders"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#fb814e",
                }}
              >
                MyOrders
              </NavLink>
              <NavLink
                className="nav-link nav-item"
                to="/allorders"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#fb814e",
                }}
              >
                ManageOrders
              </NavLink>
            </Nav>

            {user?.email ? (
              <NavLink
                className="nav-link nav-item"
                to="/login"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#fb814e",
                }}
              >
                <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                  {user?.displayName}
                </span>
                <button
                  onClick={signOutUser}
                  className="btn-regular btn-signin"
                >
                  Signout
                </button>
              </NavLink>
            ) : (
              <NavLink
                className="nav-link nav-item"
                to="/login"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#fb814e",
                }}
              >
                <button className="btn-regular">Login</button>
              </NavLink>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
