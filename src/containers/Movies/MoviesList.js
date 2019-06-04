import React, {Component} from "react";
import {connect} from "react-redux";
import Proptypes from "prop-types";

import {getMovies} from "./modules/MoviesAction";

import ItemCard from "../../components/ItemCard";
import {Container} from "semantic-ui-react";
import Spinner from "../../components/Spinner";
import MovieFilter from "../../components/MovieFilter";

class MoviesList extends Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        const {error, loading, movies} = this.props;
        if (error) console.log(error);
        if (loading) return <Spinner/>;

        return (
            <Container className="primary-container">
                <MovieFilter/>
                {movies.map(movie => {
                        return (
                            <ItemCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                overview={movie.overview}
                                release={movie.release_date}
                                score={movie.vote_average}
                                path={movie.poster_path}
                                detailsUrl={`movie/${movie.id}`}
                            />
                        )
                    }

                )}
            </Container>
        )
    }
}

MoviesList.propTypes = {
    key: Proptypes.number,
    title: Proptypes.string,
    overview: Proptypes.string,
    release: Proptypes.string,
    score: Proptypes.string,
    path: Proptypes.string,
};

const mapStateToProps = state => ({
    movies: state.movies.data,
    loading: state.movies.loading,
    error: state.movies.error
});

const mapDispatchToProps = {
    getMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);