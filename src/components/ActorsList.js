import React, {Component} from "react";
import {connect} from "react-redux";

import {getCredits} from "../actions/CreditsAction";

import {Container} from "semantic-ui-react";
import ActorCard from "./ActorCard";
import Slider from "./Slider";
import Spinner from "./Spinner";

import "../styles/components/_slider.scss";
import "../styles/components/_actorsList.scss";

class ActorsList extends Component {
    componentDidMount() {
        this.props.getCredits(this.props.content_type, this.props.id);
    }

    render() {
        const {error, loading, cast} = this.props;
        if (error) console.log(error);
        if (loading) return <Spinner/>;

        return (
            <div className="actors-list">
                <Container>
                    <h1> Actor List </h1>
                    <Slider
                        items={5}
                        mouseDrag={true}
                        arrowKeys={true}
                        controls={"#customize-controls"}
                        nav={false}
                    >
                        {
                            cast.map(item => (
                                <div key={item.cast_id} className="carousel-cell">
                                    <ActorCard cast={item}/>
                                </div>
                            ))
                        }
                    </Slider>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cast: state.credits.credits.cast,
    loading: state.credits.loading,
    error: state.credits.error,
});

const mapDispatchToProps = {
    getCredits
};
export default connect(mapStateToProps, mapDispatchToProps)(ActorsList);