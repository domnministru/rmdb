import React, {Component} from "react";
import {connect} from "react-redux";

import {getPopularShows} from "../containers/Tv/modules/ShowsAction";

import {Dropdown} from "semantic-ui-react";

const options = [
    {key: 1, text: "Popular", value: "popular"},
    {key: 2, text: "Top Rated", value: "top_rated"},
    {key: 3, text: "On The Air", value: "on_the_air"},
    {key: 4, text: "Airing Today", value: "airing_today"},
];

class TvDropdown extends Component {
    state = {};

    handleChange = (e, { value }) => {
        this.setState({ value });
        this.props.getPopularShows(value);
    };

    render() {
        const { value } = this.state;

        return (
            <Dropdown
                onChange={this.handleChange}
                options={options}
                placeholder="Select"
                selection
                value={value}
            />
        )
    }
}

const mapDispatchToProps = {
    getPopularShows
};

export default connect(null, mapDispatchToProps)(TvDropdown);
