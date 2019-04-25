import  React, {Component} from "react";
import {Container} from "semantic-ui-react";
import "../../styles/pages/_home.scss"

class HomePage extends Component {
    render() {
        return(
            <Container className="primary-container">
                <div className="top-content">
                    <div className="movieOne"/>
                    <div className="showOne"/>
                    <div className="movieTwo"/>
                    <div className="showTwo"/>
                    <div className="people"/>
                </div>
            </Container>
        )
    }
}

export default HomePage;