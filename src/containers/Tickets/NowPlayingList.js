import React, {Component} from "react";
import {connect} from "react-redux";

import {getNowPlaying} from "./modules/NowPlayingAction";

import Spinner from "../../components/Spinner";
import {Container} from "semantic-ui-react";
import NowPlayingCard from "./NowPlayingCard";

class InTheatersList extends Component {
    componentDidMount() {
        this.props.getNowPlaying();
    }

    render() {
        const {loading, error, playing} = this.props;
        if (error) console.log(error);
        if (loading) return <Spinner/>;

        return (
            <div className="tickets-list">
                <Container className="primary-container">
                    {playing.map(play => {
                        return(
                            <NowPlayingCard
                                key={play.id}
                                id={play.id}
                                title={play.title}
                                overview={play.overview}
                                backdrop_path={play.backdrop_path}
                                original_language={play.original_language}
                                genres={play.genre_ids}
                                URL={`ticket/${play.id}`}
                            />
                        )
                    })}
                </Container>
            </div>
        )
    }
}

const mapStateToPros = state => ({
    playing: state.playing.playing,
    loading: state.playing.loading,
    error: state.playing.error,
});

const mapDispatchToProps = {
    getNowPlaying
};

export default connect(mapStateToPros, mapDispatchToProps)(InTheatersList);