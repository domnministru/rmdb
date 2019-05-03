import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
    { key: 1, text: "Multiplex", value: "multiplex" },
    { key: 2, text: "Loteanu", value: "loteanu" }
];

export default class CinemaFilter extends Component {
    state = {};

    handleChange = (e, { value }) => this.setState({ value });

    render() {
        const { value } = this.state;

        return (
            <Dropdown
                onChange={this.handleChange}
                options={options}
                placeholder="Select Cinema"
                selection
                value={value}
            />
        )
    }
}