import React from 'react'

 const PostItem = (props) => {
    return (
        <div>
            <p>{props.id}</p>
            <p>{props.content}</p>
            <p>{props.user}</p>
        </div>
    )
}

export default PostItem;