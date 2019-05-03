import React, {Component} from "react";
import {connect} from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';

import {setSearchResultsVisibility} from './modules/searchAction';

import Suggestion from "./Suggestion";
import "../../styles/layout/_search.scss"

class SearchResult extends Component {
    render() {
        const {result, setSearchResultsVisibility} = this.props;

        return (
            <OutsideClickHandler onOutsideClick={() => setSearchResultsVisibility(false)}>
                <div className="results-area">
                    {
                        result.map(suggestion => {
                            return (
                                <Suggestion
                                    key={suggestion.id}
                                    title={suggestion.title || suggestion.name}
                                    release={suggestion.release_date || suggestion.first_air_date}
                                    type={suggestion.media_type}
                                    path={suggestion.poster_path || suggestion.profile_path}
                                />
                            )
                        })
                    }
                </div>
            </OutsideClickHandler>
        );
    }
}

const mapDispatchToProps = {
    setSearchResultsVisibility,
};

export default connect(null, mapDispatchToProps)(SearchResult);