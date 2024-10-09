import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    toggleLogin = () => {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn // Toggle the login state
        }), () => {
            console.log(this); // Log the current component state
        });
    };

    render() {
        return (
            <div>
                <MethodsAsPropsChild 
                isLoggedIn={this.state.isLoggedIn}
                handleSignIn={this.toggleLogin} 
                handleSignOut={this.toggleLogin}
                />
            </div>
        )
    }
}

export default MethodsAsPropsParent