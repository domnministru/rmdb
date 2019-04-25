import React from "react";
import {Link} from "react-router-dom";
import {Container, Image} from "semantic-ui-react";
import Logo from "../images/logo1/logo-transparent-alt.png";

const Menu = () => {
    return(
        <div className="menu">
            <Container className="menu_container">
                <div className="nav_bar">
                    <ul>
                        <li className="branding">
                            <Link to="/">
                                <Image src={Logo} size='tiny'/>
                            </Link>
                        </li>
                        <li className="nav_link">
                            <Link to="/discover">
                                Discover
                            </Link>
                        </li>
                        <li className="nav_link">
                            <Link to="/movies">
                                Movies
                            </Link>
                        </li>
                        <li className="nav_link">
                            <Link to="/tv">
                                Tv Shows
                            </Link>
                        </li>
                        <li className="nav_link">
                            <Link to="/people">
                                People
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="nav_auth">
                    <ul>
                        <li className="nav_link">
                            <Link to="/signUp">
                                Sign Up
                            </Link>
                        </li>
                        <li className="nav_link">
                            <Link to="/signIn">
                                Sign In
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
};

export default Menu;