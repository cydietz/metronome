import React from 'react';

export class Metronome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRunning: false,
            bpm: 130,
            measure: 4,
            count: 0
        };
    }

    toggleMetronome = () => {
        if (this.state.isRunning) {
            this.setState({
                count: 0,
                isRunning: false
            })
            clearInterval(this.timer)
        } else {
            this.timer = setInterval(this.playClick, (60/this.state.bpm) * 1000)
            this.setState({
                isRunning: true
            })
        }
    }
    
    handleBPMChange(event) {
        clearInterval(this.timer)
        this.setState({
            bpm: event.target.value, 
            count: 0
            })
        this.timer = setInterval(this.playClick, (60/this.state.bpm) * 1000)
    }

    playClick = () => {
        // if (this.state.count == 0) {
        //     const [playAccent] = useSound(
        //         clickSound,
        //         { volume: 0.27, playbackRate: 1.1 }
        //     )
        // } else {
        //     useSound(
        //         clickSound,
        //         { volume: 0.25 }
        //     )
        // } 

        this.state.count == this.state.measure - 1 ? this.setState({count: 0}) : this.setState({count: this.state.count + 1})
    }


    render() {
        return (
            <div className='metronome'>
                <button type="button" onClick={this.toggleMetronome}>{this.state.isRunning ? "Stop" : "Play"}</button>
                <input type="text" name="bpm" value={this.state.bpm} onChange={(event) => this.handleBPMChange(event)}></input> 
                <strong>{this.state.count}</strong>
            </div>
        )
    }
}