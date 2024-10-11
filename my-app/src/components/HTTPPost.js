import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
       apiResponse: null
    }
  }
    postToAPi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', 
        {
          title: "Rock'n'Corda!",
          body: 'the real root of rock',
          userId: 666,
        }
      ).then(response => {
        this.setState ({
          apiResponse: response.data
        })
      })
    }
  render() {
    const {apiResponse} = this.state;
    return (
    <div>
        <button onClick={this.postToAPi}>
            Create Post
        </button>
        {
            apiResponse
            ? (<div>
               <h1>{apiResponse.title}</h1>
              <p>Post id: {apiResponse.id}</p>
              <p>{apiResponse.body}</p>
              <p>user id:{apiResponse.userID}</p>
              </div>)
              : (<p> please click the button above</p>)
          } 
      </div>
    )
  }
}

export default HTTPPost