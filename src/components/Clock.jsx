import React from 'react';

export class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()} o'clock.</h2>
            </div>
        )
    }
}