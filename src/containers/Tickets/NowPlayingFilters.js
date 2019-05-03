import React, {Component} from "react";
import {Container} from "semantic-ui-react";
import CinemaFilter from "./CinemaFilter";
import TicketDatePicker from "./TicketDatePicker";
import "../../styles/pages/_tickets.scss"

class NowPlayingFilters extends Component {
    render() {
        return (
            <div className="tickets-filters">
                <Container className="primary-container">
                    <CinemaFilter/>
                    <TicketDatePicker/>
                </Container>
            </div>
        );
    }
}

export default NowPlayingFilters;
