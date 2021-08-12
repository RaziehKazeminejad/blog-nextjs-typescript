import React, {Component, ReactNode} from 'react'
 
export interface TextErrorProps {
    // children: React.ReactNode
}
const TextError: React.FC<TextErrorProps> = (props) => {
    return (
        <div className="text-red-500">
            {props.children}
        </div>
    )
}

export default TextError