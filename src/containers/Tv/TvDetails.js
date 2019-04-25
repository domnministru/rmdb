import React, {Component} from "react";
import {connect} from "react-redux";
import Presentation from "../../components/main/Presentation";
import Cast from "../../components/main/ActorsList";
import Body from "../../components/main/Body";
import {getSpecificShow} from "./modules/getShowAction";
import MyLoader from "../../components/MyLoader";

import "../../styles/components/_details.scss"

class TvDetails extends Component {
    componentDidMount() {
        this.props.getSpecificShow(this.props.match.params.id);
    }

    render() {
        const {error, loading, show, match} = this.props;
        if (error) {console.log(error)}
        if (loading) {return <MyLoader/>}

        const {
            id, name, first_air_date, vote_average, original_name,
            ...rest
        } = show;

        const content_type = "tv";

        return(
            <div className="details" key={id}>
                <Presentation
                    id={id}
                    title={name}
                    release={first_air_date}
                    rating={vote_average}
                    {...rest}
                />
                <Cast
                    id={match.params.id}
                    content_type={content_type}
                    {...rest}/>
                />
                <Body
                    id={id}
                    title={name}
                    release={first_air_date}
                    rating={vote_average}
                    original_title={original_name}
                    content_type={content_type}
                    {...rest}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    show: state.show.show,
    loading: state.show.loading,
    error: state.show.error,

});

const mapDispatchToProps = {
    getSpecificShow,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvDetails);