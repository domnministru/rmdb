import React, {Component} from "react";

import {Button, Container, Input} from "semantic-ui-react";
import "../../styles/pages/_sign.scss";


class SignUp extends Component {
    render() {
        return (
            <Container className="primary-container">
                <form action="" className="sign sign-up">
                    <h1>Sign up for an account</h1>
                    <p>Signing up for an account is free and easy.
                        Fill out the form below to get started.
                        JavaScript is required to to continue.</p>
                    <h4>Username</h4>
                    <Input fluid/>
                    <h4>Password (4 characters minimum)</h4>
                    <Input fluid/>
                    <h4>Password Confirm</h4>
                    <Input fluid/>
                    <h4>Email</h4>
                    <Input fluid/>
                    <p>By clicking the "Sign up" button below,
                        I certify that I have read and agree to the
                        RMDB terms of use and privacy policy.</p>
                    <div className="sign-buttons">
                        <Button primary> Sign Up </Button>
                        <Button basic> Cancel </Button>
                    </div>
                </form>

                <div className="sign sign-info">
                    <h1>Benefits of being a member</h1>
                    <p>Log the movies and TV shows you have watched</p>
                    <p>Keep track of your favourite movies and TV shows and get recommendations from them</p>
                    <p>Build and maintain a personal watchlist</p>
                    <p>Build custom mixed lists (movies and TV)</p>
                    <p>Take part in movie and TV discussions</p>
                    <p>Contribute to, and improve the information in our database</p>
                    <div className="logo"/>
                </div>
            </Container>
        )
    }
}

export default SignUp;
