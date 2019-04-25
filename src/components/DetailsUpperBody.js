import React from "react";
import {Container} from "semantic-ui-react";
import "../styles/components/_detailsUpperBody.scss"

const DetailsUpperBody = () => {
    return(
        <div className="details_upper-body">
            <Container style={{display: "flex", flexDirection: "column"}}>
                <h1>Cast</h1>
                <div className="details_cast">
                    <div className="details_actor-card"></div>
                    <div className="details_actor-card"></div>
                    <div className="details_actor-card"></div>
                    <div className="details_actor-card"></div>
                    <div className="details_actor-card"></div>
                    <div className="details_actor-card"></div>
                    <div className="details_actor-card"></div>
                </div>
            </Container>
        </div>
    )
};

export default DetailsUpperBody;