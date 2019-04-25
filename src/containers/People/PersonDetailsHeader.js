import React from "react";
import {Container, Image, Button} from "semantic-ui-react";
import "../../styles/pages/_people.scss"

const PersonDetailsHeader = props => {
    const {name, pic, birthday, biography }= props;

  return(
        <div className="person_details_header">
            <Container className="primary-container">
                <div className="header_picture">
                    <Image src={pic}/>
                </div>
                <div className="info">
                    <div className="name-n-social">
                        <div className="name">
                            <h1>{name}({birthday})</h1>
                        </div>
                        <div className="social">
                            <Button circular color="facebook" icon="facebook" />
                            <Button circular color="twitter" icon="twitter" />
                            <Button circular color="instagram" icon="instagram" />
                        </div>
                    </div>
                    <div className="bio">
                        <h2>Biography</h2>
                        <p>{biography}</p>
                    </div>
                </div>
            </Container>
        </div>
  )
};

export default PersonDetailsHeader