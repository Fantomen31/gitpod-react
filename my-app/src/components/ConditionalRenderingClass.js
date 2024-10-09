import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoaded: false,
        isLoggedIn: true
      }
    }
  render() {
    return (
      <div>
           <h1>{this.state.isLoaded ? 'Data loaded!' : 'Loading...'}</h1>
        {this.state.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete the steps bellow.</p>
                <ol>
                    <li>Dance</li>
                    <li>Smile</li>
                    <li>Tell someone their kind!</li>
                </ol>
            </div>
        ) : 
        (<p>Please sign in.</p>) }
      </div>
    )
  }
}

export default ConditionalRenderingClass