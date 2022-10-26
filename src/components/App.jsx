import React from 'react';

export function App(props) {
    const { title, nameObj } = props

    return (
        <div title={title}>Hallo {nameObj.firstname} {nameObj.lastname}</div>
    )
}