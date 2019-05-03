import React, {Component} from "react";

import Menu from "./Menu";
import Search from "../containers/Search/Search";
import "../styles/layout/_header.scss"

class PageHeader extends Component {
    render() {
        return (
            <header className="app_header">
                <Menu/>
                <Search/>
            </header>
        )

    }
}

export default PageHeader;