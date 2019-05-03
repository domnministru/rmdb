import  React, {Component} from "react";
import {connect} from "react-redux";
import Proptypes from "prop-types";

import {getPopularPeople} from "./modules/peopleAction";

import PeopleCard from "./PeopleCard";
import {Container} from "semantic-ui-react";
import Spinner from "../../components/Spinner";
import "../../styles/pages/_people.scss";

class PeopleList extends Component {
    componentDidMount() {
        this.props.getPopularPeople();
    }

    render() {
        const {error, loading, people} = this.props;
        if (error) console.log(error);
        if (loading) return <Spinner/>;
        return(
            <Container className="primary-container">
                {people.map(card => {
                    return (
                        <PeopleCard
                            key={card.id}
                            name={card.name}
                            id={card.id}
                            known_for={card.known_for}
                            path={card.profile_path}
                        />
                    )
                }
                )}
            </Container>
        )
    }
}

PeopleList.propTypes = {
    key: Proptypes.number,
    id: Proptypes.number,
    name: Proptypes.string,
    known_for: Proptypes.string,
    path: Proptypes.string,
};

const mapStateToProps = state => ({
    people: state.people.data,
    loading: state.people.loading,
    error: state.people.error
});

const mapDispatchToProps = {
    getPopularPeople,
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);