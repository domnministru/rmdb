import React, {Component} from "react";
import {Button, Container, Input} from "semantic-ui-react";
import "../../styles/pages/_sign.scss"
class SignIn extends Component {
    render() {
        return (
            <Container className="primary-container">
                <form className="sign sign-in">
                    <h1>Login to your account</h1>
                    <p>
                        In order to use the editing and rating capabilities of TMDb,
                        as well as get personal recommendations you will need to login to your account.
                        If you do not have an account, registering for an account is free and simple.
                        Click here to get started.
                    </p>
                    <p>
                        If you signed up but didn't get your verification email,
                        click here to have it resent.
                    </p>
                    <h4>Username</h4>
                    <Input fluid/>
                    <h4>Password</h4>
                    <Input fluid/>
                    <div className="sign-buttons">
                        <Button primary> Sign In </Button>
                        <Button basic> Reset Password </Button>
                    </div>
                </form>
            </Container>
        )
    }
}

export default SignIn;