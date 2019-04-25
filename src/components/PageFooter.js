import React from "react";
import {Container} from "semantic-ui-react";
import "../styles/layout/_footer.scss"

const PageFooter = () => {
    return(
        <footer className="app-footer">
            <Container>
                <p>This is Footer</p>
            </Container>
        </footer>
    )
};

export default PageFooter;