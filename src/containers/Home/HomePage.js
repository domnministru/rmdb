import  React, {Component} from "react";
import {Link} from "react-router-dom";

import {Container} from "semantic-ui-react";
import "../../styles/pages/_home.scss"

class HomePage extends Component {
    render() {
        return(
            <Container className="primary-container">
                <div className="home-page">
                    <Link to="/movies/299534" className="home-card card-one"/>
                    <Link to="/tv/1622" className="home-card card-two"/>

                    <div className="logo"/>

                    <Link to="/tv/1399" className="home-card card-three"/>
                    <Link to="/movies/537915" className="home-card card-four"/>
                </div>
            </Container>
        )
    }
}

export default HomePage;