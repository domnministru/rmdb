import React,{Component} from "react";
import {connect} from "react-redux";
import {getSpecificMovie} from "./modules/getMovieAction";

import MyLoader from "../../components/MyLoader";
import DetailsUpperBody from "../../components/DetailsUpperBody";
import DetailsBody from "../../components/DetailsBody";
import DetailsHeader from "../../components/DetailsHeader";

import "../../styles/components/_details.scss";

class MovieDetails extends Component {
    componentDidMount() {
        this.props.getSpecificMovie(this.props.match.params.id);
    }

    render() {
        const {error, loading, movie} = this.props;
        if (error) {console.log(error)}
        if (loading) {return <MyLoader/>}

        const {
            id, title, release_date, vote_average, original_title,
            ...rest
        } = movie;

        return (
            <div className="details" key={id}>
                <DetailsHeader
                    title={title}
                    release={release_date}
                    rating={vote_average}
                    {...rest}/>
                <DetailsUpperBody
                    {...rest}/>
                <DetailsBody
                    original_title={original_title}
                    {...rest}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movie: state.movie.movie,
    loading: state.movie.loading,
    error: state.movie.error,

});

const mapDispatchToProps = {
    getSpecificMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);