import React, {Component} from 'react';
import {connect} from "react-redux";
import Proptypes from "prop-types";

import {getSpecificPerson} from "./modules/PersonAction";

import PersonPresentation from "./PersonPresentation";
import PersonDetails from "./PersonDetails";
import PersonKnownFor from "./KnownForList";
import PersonActing from "./ActingList"
import {Container} from "semantic-ui-react"
import "../../styles/pages/_people.scss";
import Spinner from "../../components/Spinner";

class PersonPage extends Component {
    componentDidMount() {
        this.props.getSpecificPerson(this.props.match.params.id);
    }

    render() {
        const {error, loading, person, match} = this.props;
        if (error) console.log(error);
        if (loading) return <Spinner/>;

        const {id, ...rest} = person;

        return (
            <div className="person-page" key={id}>
                <PersonPresentation
                    {...rest}
                />
                <PersonKnownFor
                    id={match.params.id}
                />
                <Container className="primary-container">
                    <PersonDetails
                        {...rest}
                    />
                    <div className="pp_main">
                        <PersonActing
                            id={match.params.id}
                        />
                    </div>
                </Container>
            </div>
        )
    }
}

PersonPage.propTypes = {
    id: Proptypes.number,
    name: Proptypes.string,
    biography: Proptypes.string,
    birthday: Proptypes.string,
    profile_path: Proptypes.string,
};


const mapStateToProps = state => ({
    person: state.person.person,
    loading: state.person.loading,
    error: state.person.error
});

const mapDispatchToProps = {
    getSpecificPerson,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonPage);