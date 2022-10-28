import React from 'react';

export function App(props) {
    const { title, nameObj } = props

    return (
        <div title={title}>
            <h1>
                {nameObj.name}
            </h1>
        </div>
    )
}