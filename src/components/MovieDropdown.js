import React, {Component} from "react";
import {connect} from "react-redux";

import {getMovies} from "../containers/Movies/modules/getMoviesAction";

import {Dropdown} from "semantic-ui-react";

const options = [
    {key: 1, text: "Popular", value: "popular"},
    {key: 2, text: "Top Rated", value: "top_rated"},
    {key: 3, text: "Now Playing", value: "now_playing"},
    {key: 4, text: "Upcoming", value: "upcoming"},
];

class MovieDropdown extends Component {
    state = {};

    handleChange = (e, { value }) => {
        this.setState({ value });
        this.props.getPopularMovies(value);
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
    getPopularMovies: getMovies
};

export default connect(null, mapDispatchToProps)(MovieDropdown);