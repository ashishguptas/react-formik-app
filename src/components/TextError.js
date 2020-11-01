import React from 'react'

function TextError(props) {
    return (
        <div>
            <div className='error'>
                {props.children}
            </div>
        </div>
    )
}

export default TextError
