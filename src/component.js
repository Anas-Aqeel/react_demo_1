import React from 'react'

const Component = (props) => {
    return (
        <div>
            <h1>Today we are serving {props.dish}</h1>
            <br />
            <h1>Today we are serving {props.sweet}</h1>
        </div>
    )
}

export default Component;
