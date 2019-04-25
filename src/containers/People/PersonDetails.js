import React, {Component} from 'react';
import {connect} from "react-redux";
import {getSpecificPerson} from "./modules/personAction";
import MyLoader from "../../components/MyLoader";
import {DEFAULT_IMG_URL, MEDIUM_IMG} from "../../const";
import Proptypes from 'prop-types';
import PersonDetailsHeader from "./PersonDetailsHeader";
import PersonDetailsBody from "./PersonDetailsBody";

import "../../styles/components/_details.scss"
import "../../styles/pages/_people.scss"

class PersonDetails extends Component {
    componentDidMount() {
        this.props.getSpecificPerson(this.props.match.params.id);
    }

    render() {
        const {error, loading, person} = this.props;
        if (error) {console.log(error)}
        if (loading) {return <MyLoader/>}

        const {id, name, biography, birthday, profile_path} = person;

        let pic = DEFAULT_IMG_URL + MEDIUM_IMG + profile_path;

        return(
            <div className="details" key={id}>
                <PersonDetailsHeader
                    name={name}
                    biography={biography}
                    birthday={birthday}
                    pic={pic}
                />
                <PersonDetailsBody/>
            </div>
        )
    }
}

PersonDetails.propTypes = {
    id: Proptypes.number,
    name: Proptypes.string,
    biography: Proptypes.string,
    birthday: Proptypes.string,
    profile_path: Proptypes.string,
};


const mapStateToProps = state => ({
    person: state.person.payload,
    loading: state.person.loading,
    error: state.person.error
});

const mapDispatchToProps = {
    getSpecificPerson,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetails);