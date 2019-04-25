import React, {Component} from 'react';
import {Container, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {searchAll, setSearchResultsVisibility} from './modules/searchAction';
import SearchResult from './SearchResult';
import MyLoader from "../../components/MyLoader";
import "../../styles/layout/_search.scss"

class Search extends Component {
    state = {
        query: null,
    };

    handleInputChange = (e) => {
        this.setState({query: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.query) {
            this.props.searchAll(this.state.query);
            this.props.setSearchResultsVisibility(true);
        }
    };

    render() {
        const {error, loading, result, isSearchResultsVisible} = this.props;
        const filteredResult = result.filter(item => item.poster_path && (item.name || item.title));

        if (error) {console.log(error)}
        if (loading) {return <MyLoader/>}

        return (
            <div className="search_area">
                <Container className="primary-container">
                    <form className="search_form" onSubmit={this.handleSubmit}>
                        <Icon name="search"
                              size="large"
                              className="search_icon"
                        />
                        <input type="text"
                               className="search_input"
                               placeholder="Search for a Movie, Tv Show or Person"
                               onChange={this.handleInputChange}
                        />
                    </form>
                    {
                        isSearchResultsVisible &&
                        <SearchResult result={filteredResult} />
                    }
                </Container>
            </div>
        )
    };
}

const mapStateToProps = state => ({
    result: state.suggestions.suggestions,
    loading: state.suggestions.loading,
    error: state.suggestions.error,
    isSearchResultsVisible: state.suggestions.isSearchResultsVisible,
});

const mapDispatchToProps = {
    searchAll,
    setSearchResultsVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);