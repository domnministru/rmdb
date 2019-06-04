import React from "react";

import {Container, Icon} from "semantic-ui-react";
import "../styles/layout/_footer.scss";

const PageFooter = () => {
    return(
        <footer>
            <Container className="primary-container">
                <div className="site-map">
                    <h1 className="heading text-md"> Site Map </h1>
                    <div className="site-map-columns">
                        <ul className="footer-ul">
                            <li>Home</li>
                            <li>Tickets</li>
                            <li>Movies</li>
                            <li>Tv Shows</li>
                            <li>People</li>
                        </ul>
                        <ul className="footer-ul">
                            <li>User</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="newsletter">
                    <h1 className="heading text-md"> Mind subscribing to our NewsLetter ? </h1>
                    <form className="form">
                        <input type="email" className="form__field" placeholder="Your E-Mail Address"/>
                        <button type="button" className="btn btn--primary btn--inside uppercase">Send</button>
                    </form>
                </div>
                <div className="find-us">
                    <h1 className="heading text-md"> Find Us on Social </h1>
                    <div className="find-us-icons">
                        <Icon name="rss" size="big" />
                        <Icon name="facebook f" size="big" />
                        <Icon name="twitter" size="big" />
                        <Icon name="vk" size="big" />
                        <Icon name="twitch" size="big" />
                        <Icon name="google plus g" size="big" />
                    </div>
                </div>
            </Container>
        </footer>
    )
};

export default PageFooter;