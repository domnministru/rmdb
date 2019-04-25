import React, {Component} from 'react';
import {Container, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {searchAll} from './modules/searchAction';
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
        this.state.query === null || undefined || '' ?
            (alert('wrong input')) :
            (this.props.searchAll(this.state.query));
    };

    render() {
        const {error, loading, result} = this.props;

        if (error) {
            console.log(error);
        }

        if (loading) {
            return <MyLoader/>;
        }

        return (
            <div className="search_area">
                <Container style={{display: "flex"}}>
                    <form className='search_form' onSubmit={this.handleSubmit}>
                        <Icon name='search'
                              size="large"
                              className='search_icon'/>
                        <input type='text'
                               className='search_input'
                               placeholder="Search for a Movie, Tv Show or Person"
                               onChange={this.handleInputChange}/>
                    </form>
                    <div className='results_area'>
                        {result.map(suggestion => {
                            return (
                                <SearchResult
                                    key={suggestion.id}
                                    title={suggestion.title}
                                    release_date={suggestion.release_date}
                                    media_type={suggestion.media_type}
                                    path={suggestion.poster_path}
                                />
                            )
                        })}
                    </div>
                </Container>
            </div>
        )
    };
}

const mapStateToProps = state => ({
    result: state.suggestions.suggestions,
    loading: state.suggestions.loading,
    error: state.suggestions.error
});

const mapDispatchToProps = {
    searchAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);