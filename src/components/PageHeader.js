import React, {Component} from "react";
import MyMenu from "./MyMenu";
import {Container} from "semantic-ui-react";

class PageHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <Container>
                    <MyMenu/>
                </Container>
            </header>
        )

    }
}

export default PageHeader;