import React, {Component} from "react";
import {connect} from "react-redux";

import {getPersonCredits} from "./modules/getPersonCreditsAction";

import {Container} from "semantic-ui-react";
import KnownForCard from "./KnownForCard";
import Slider from "../../components/Slider";
import Spinner from "../../components/Spinner";
import "../../styles/pages/_people.scss";
import "../../styles/components/_slider.scss";

class KnownForList extends Component {
    componentDidMount() {
        this.props.getPersonCredits(this.props.id);
    }

    render() {
        const {error, loading, cast} = this.props;
        if (error) console.log(error);
        if (loading) return <Spinner/>;

        return (
            <div className="pp-known_for">
                <Container>
                    <h1 className="heading-text"> Known For </h1>
                    <Slider
                        items={6}
                        mouseDrag={true}
                        arrowKeys={true}
                        nav={false}
                    >
                        {
                            cast.map(best => (
                                <div key={best.id} className="carousel-cell">
                                    <KnownForCard
                                        key={best.id}
                                        id={best.id}
                                        title={best.title}
                                        path={best.poster_path}
                                    />
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
    cast: state.personCredits.personCredits.cast,
    loading: state.personCredits.loading,
    error: state.personCredits.error,
});

const mapDispatchToProps = {
    getPersonCredits
};

export default connect(mapStateToProps, mapDispatchToProps)(KnownForList);