import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {props.isLoggedIn ? (
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

export default UserMessage