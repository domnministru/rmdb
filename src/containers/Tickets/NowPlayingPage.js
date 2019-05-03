import  React, {Component} from "react";

import NowPlayingList from "./NowPlayingList";
import NowPlayingFilters from "./NowPlayingFilters";

class NowPlayingPage extends Component {
    render() {
        return(
            <div className="tickets-page">
                <NowPlayingFilters/>
                <NowPlayingList/>
            </div>
        )
    }
}

export default NowPlayingPage;