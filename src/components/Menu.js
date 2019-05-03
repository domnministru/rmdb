import React from "react";
import {Link} from "react-router-dom";

import Logo from "../images/logo1/logo-transparent-alt.png";
import {Container, Image} from "semantic-ui-react";

const Menu = () => {
    return(
        <div className="menu">
            <Container className="menu-container">
                <div className="nav-bar">
                    <ul>
                        <li className="branding">
                            <Link to="/">
                                <Image src={Logo} size='tiny'/>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/ticket">
                                Tickets
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/movie">
                                Movies
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/tv">
                                Tv Shows
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/person">
                                People
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-auth">
                    <ul>
                        <li className="nav-link">
                            <Link to="/signUp">
                                Sign Up
                            </Link>
                        </li>
                        <li className="nav-link">
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