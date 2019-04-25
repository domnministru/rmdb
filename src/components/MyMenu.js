import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import Search from "../containers/Search/Search";
import Logo from "../images/logo1/logo-transparent-alt.png";
import {
    Image,
    Menu,
    Visibility,
} from "semantic-ui-react";




const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
};

const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
};

const Nav = props => (
    <NavLink
        exact
        {...props}
        activeClassName="active"
    />
);

export default class MyMenu extends Component {
    state = {activeItem: 'Home'};

    stickTopMenu = () => this.setState({menuFixed: true});

    unStickTopMenu = () => this.setState({menuFixed: false});

    render() {
        const {menuFixed} = this.state;

        return (
            <Visibility
                onBottomPassed={this.stickTopMenu}
                onBottomVisible={this.unStickTopMenu}
                once={false}
            >
                <Menu
                    borderless
                    fixed={menuFixed ? 'top' : undefined}
                    style={menuFixed ? fixedMenuStyle : menuStyle}>
                    <Menu.Menu position="left">
                        <Menu.Item as={Nav} to="/" name="home">
                            <Image src={Logo} size='tiny'/>
                        </Menu.Item>
                        <Menu.Item as={Nav} to="/discover" name="Discover" />
                        <Menu.Item as={Nav} to="/movies" name="Movies" />
                        <Menu.Item as={Nav} to="/tv" name="Tv Shows" />
                        <Menu.Item as={Nav} to="/people" name="People" />
                    </Menu.Menu>
                    <Menu.Menu position="right">
                        <Menu.Item as={Nav} to="/signup" name="Sign Up" />
                        <Menu.Item as={Nav} to="/signin" name="Sign In" />
                    </Menu.Menu>
                </Menu>
                <Search />
            </Visibility>
        )
    }
}

