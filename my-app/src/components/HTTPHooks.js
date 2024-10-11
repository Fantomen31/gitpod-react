import React, { useState, useEffect} from 'react'
import axios from 'axios'

function HTTPHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [postMessage, setPostMessage] = useState(null);
    const postToAPi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', 
        {
          title: "Rock'n'Corda!",
          body: 'the real root of rock',
          userId: 666,
        }
      ).then(response => {
        setPostMessage(response.status === 201
            ? `Success! Title: ${response.data.title}`
            : 'Failed'
        )
    })
    }

    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const data = Array.isArray(response.data)
                ? response.data
                : [response.data]
            setPosts(data);
        })
        .catch(error => {
                setError(error);
        })
    }, [])


    return (
        <div>
            <button onClick={postToAPi}>
            Create Post
            </button>
            <p>{postMessage}</p>
          <h2>Posts:</h2>
          {
            posts.length ? (
              posts.map(posts => (
                <div key={posts}>
                  <h2>{posts.id}. {posts.title}</h2>
                  <h4>By User ID {posts.userID}</h4>
                  <p>{posts.body}</p>
                  <hr />
  
                </div>
              ))
            ) : (
                error
              ? <p>{error}</p>
              : <h4>Loading posts ... </h4>
            )
          }
        </div>
      )
}

export default HTTPHooks