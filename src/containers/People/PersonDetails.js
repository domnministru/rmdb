import React from "react";

import SingleBox from "../../components/SingleBox";
import AlsoKnownBox from "./AlsoKnownBox";

import "../../styles/pages/_people.scss";


const DetailedActorInfo = props => {
    const {
        name, also_known_as, birthday, deathday, gender, homepage,
        known_for_department, place_of_birth, popularity
    } = props;

    return(
        <div className="pp-details">
            <h1 className="heading-text">Personal Info</h1>
            <SingleBox name={"Name: "} content={name}/>
            {
                deathday === null ?
                    (<SingleBox name={"Birthday: "} content={birthday}/>) :
                    (<div>
                        <SingleBox name={"Birthday: "} content={birthday}/>
                        <SingleBox name={"Deathday: "} content={deathday}/>
                    </div>)
            }
            {
                gender === 2 ?
                    (<SingleBox name={"Gender: "} content={"male"}/>) :
                    (<SingleBox name={"Gender: "} content={"female"}/>)
            }
            {
                homepage === null ?
                    (<SingleBox name={"Homepage: "} content={"-"}/>) :
                    (<SingleBox name={"Homepage: "} content={homepage}/>)
            }
            <SingleBox name={"Known for department: "} content={known_for_department}/>
            <SingleBox name={"Place of birth: "} content={place_of_birth}/>
            <SingleBox name={"Popularity: "} content={popularity}/>
            <AlsoKnownBox also_known_as={also_known_as}/>
        </div>
    )
};

export default DetailedActorInfo;