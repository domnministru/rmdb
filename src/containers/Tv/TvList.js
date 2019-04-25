import  React, {Component} from 'react';
import {Container} from "semantic-ui-react";
import {connect} from "react-redux";
import ItemCard from "../../components/ItemCard";
import {getPopularShows} from "./modules/getShowsAction";
import MyLoader from "../../components/MyLoader";

class TvList extends Component {
    componentDidMount() {
        this.props.getPopularShows();
    }

    render() {
        const {error, loading, shows} = this.props;
        if (error) {console.log(error)}
        if (loading) {return <MyLoader active/>}

        return(
            <Container className="primary-container">
                {shows.map(show => {
                    console.log(show);
                        return (
                            <ItemCard
                                key={show.id}
                                id={show.id}
                                title={show.name}
                                overview={show.overview}
                                release={show.first_air_date}
                                score={show.vote_average}
                                path={show.poster_path}
                                detailsUrl={`tv/${show.id}`}
                            />
                        )
                    }

                )}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    shows: state.shows.shows,
    loading: state.shows.loading,
    error: state.shows.error
});

const mapDispatchToProps = {
    getPopularShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvList);