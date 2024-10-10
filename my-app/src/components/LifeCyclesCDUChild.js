import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {
    constructor(props) {
        console.log('Child Constructor called')
        super(props)
    
      this.state = {
         greeting: 'Hello!'
      }
    }
    updateGreeting = () => {
        console.log('Child update greeting called')
        this.setState(prevState =>{
            return {
                greeting: prevState.greeting === 'Hello!' ? 'Goodbye!' : 'Hello!'
            }
        })
    }
    componentDidUpdate(prevState, prevProps) {
        console.log('Child Componenet updated')
        console.log('prevProps', prevState)
        console.log('prevState', prevProps)
        if (prevProps.parentGreeting !== this.props.parentGreeting){
            console.log('Parent greeting has changed')
        }
    }
  render() {
    console.log('Child render method called')
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update Greeting</button>
      </div>
    )
  }
}

export default LifeCyclesCDUChild