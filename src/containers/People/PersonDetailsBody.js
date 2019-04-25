import React from "react";
import {Container} from "semantic-ui-react";

const PersonDetailsBody = () => {
    return(
        <div className="person_details_body">
            <Container style={{display: "flex"}}>
                <div className="detailed_info"></div>
                <div className="acting_info">
                    <div className="known_for">
                        <h1>Known For:</h1>
                        <div className="movies">
                            <div className="movie"></div>
                            <div className="movie"></div>
                            <div className="movie"></div>
                            <div className="movie"></div>
                            <div className="movie"></div>
                            <div className="movie"></div>
                        </div>
                    </div>
                    <div className="acting">
                        <h1>Acting</h1>
                        <div className="acting_list">
                            <div className="acting_option"></div>
                            <div className="acting_option"></div>
                            <div className="acting_option"></div>
                            <div className="acting_option"></div>
                            <div className="acting_option"></div>
                            <div className="acting_option"></div>
                            <div className="acting_option"></div>
                            <div className="acting_option"></div>
                            <div className="acting_option"></div>
                            <div className="acting_option"></div>
                            <div className="acting_option"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default PersonDetailsBody;