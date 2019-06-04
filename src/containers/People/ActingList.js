import React, {Component} from "react";
import {connect} from "react-redux";

import {getPersonCredits} from "./modules/PersonCreditsAction"


import Spinner from "../../components/Spinner";
import ActingCard from "./ActingCard";
import HeadingCard from "./HeadingCard";
import "../../styles/pages/_people.scss";
import "../../styles/components/_slider.scss";

class ActingList extends Component {
    componentDidMount() {
        this.props.getPersonCredits(this.props.id);
    }

    render() {
        const {error, loading, cast, crew} = this.props;
        if (error) console.log(error);
        if (loading) return <Spinner/>;

        return (
            <div className="pp-acting">
                <div className="pa-acting">
                    <h1 className="heading-text"> Acting Department </h1>
                    {
                        cast.map((acting, index) => (
                                <ActingCard
                                    key={index}
                                    title={acting.title}
                                    year={acting.release_date}
                                    character={acting.character}
                                    vote_average={acting.vote_average}
                                    poster_path={acting.poster_path}
                                />
                        ))
                    }
                </div>
                <div className="pa-heading">
                    <h1 className="heading-text"> Heading Department </h1>
                    {
                        crew.map( (heading, index)=> {
                            return(
                                <HeadingCard
                                    key={`${heading.id} - ${index}`}
                                    department={heading.department}
                                    job={heading.job}
                                    media_type={heading.media_type}
                                    title={heading.title}
                                    vote_average={heading.vote_average}
                                    year={heading.release_date}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cast: state.personCredits.personCredits.cast,
    crew: state.personCredits.personCredits.crew,
    loading: state.personCredits.loading,
    error: state.personCredits.error,
});

const mapDispatchToProps = {
    getPersonCredits
};

export default connect(mapStateToProps, mapDispatchToProps)(ActingList);