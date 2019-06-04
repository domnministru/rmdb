import React, {Component} from "react";
import {connect} from "react-redux";

import {getSpecificShow} from "./modules/ShowAction";

import Presentation from "../../components/Presentation";
import Cast from "../../components/ActorsList";
import Body from "../../components/Body";
import Spinner from "../../components/Spinner";

class TvPage extends Component {
    componentDidMount() {
        this.props.getSpecificShow(this.props.match.params.id);
    }

    render() {
        const {error, loading, show, match} = this.props;
        if (error) console.log(error)
        if (loading) return <Spinner/>;

        const {
            id, name, first_air_date, vote_average, original_name,
            ...rest
        } = show;

        const content_type = "tv";

        return(
            <div className="details" key={id}>
                <Presentation
                    id={match.params.id}
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
                    id={match.params.id}
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

export default connect(mapStateToProps, mapDispatchToProps)(TvPage);