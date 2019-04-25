import React, {Component} from "react";
import {connect} from "react-redux";
import DetailsHeader from "../../components/DetailsHeader";
import DetailsUpperBody from "../../components/DetailsUpperBody";
import DetailsBody from "../../components/DetailsBody";
import {getSpecificShow} from "./modules/getShowAction";
import MyLoader from "../../components/MyLoader";

import "../../styles/components/_details.scss"

class TvDetails extends Component {
    componentDidMount() {
        this.props.getSpecificShow(this.props.match.params.id);
    }

    render() {
        const {error, loading, show} = this.props;
        if (error) {console.log(error)}
        if (loading) {return <MyLoader/>}

        const {
            id, name, first_air_date, vote_average, original_name,
            ...rest
        } = show;


        return(
            <div className="details" key={id}>
                <DetailsHeader
                    title={name}
                    release={first_air_date}
                    rating={vote_average}
                    {...rest}
                />
                <DetailsUpperBody
                    {...rest}
                />
                <DetailsBody
                    original_title={original_name}
                    {...rest}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    show: state.show.show,
    s_loading: state.show.loading,
    s_error: state.show.error,

});

const mapDispatchToProps = {
    getSpecificShow,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvDetails);