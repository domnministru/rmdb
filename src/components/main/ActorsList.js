import React, {Component} from "react";
import {connect} from "react-redux";
import {Container} from "semantic-ui-react";
import {getCredits} from "../../actions/getCreditsAction";
import ActorCard from "../ActorCard";
import MyLoader from "../MyLoader";
import Slider from "../Slider";

import "../../styles/components/_cast.scss"

class ActorsList extends Component {
    componentDidMount() {
        this.props.getCredits(this.props.content_type, this.props.id);
    }

    render() {
        const {error, loading, cast} = this.props;
        if (error) {console.log(error)}
        if (loading) {return <MyLoader/>}

        return (
            <div className="cast">
                <Container>
                    <Slider>
                        {
                            cast.map(item => (
                                <div key={item.cast_id} className="carousel-cell">
                                    <ActorCard cast={item} />
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