import React, {Component} from "react";

class Ticket extends Component{
    componentDidMount() {

    }

    render() {
        return(
            <div className="ticket">
                <div className="ticket-header">
                    <div className="ticket-image">
                    </div>
                    <div className="ticket-description"></div>
                </div>
                <div className="ticket-body">
                    <div className="ticket-cinema"></div>
                    <div className="ticket-prices"></div>
                </div>
            </div>
        )
    }
}

export default Ticket;