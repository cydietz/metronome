import React from 'react';
import useSound from 'use-sound';
import { useState } from 'react';
import clickSound from './../sounds/blipSelect.wav';

export function Metronome() {

    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [bpm, setBpm] = useState(60);
    const [measure, setMeasure] = useState(4);
    

    const [playAccent] = useSound(
        clickSound,
        { volume: 0.27, playbackRate: 1.1 }
    )

    const [playClick] = useSound(
        clickSound,
        { volume: 0.25 }
    )


    const ToggleMetronome = () => {
        if (isRunning) {
            setCount(0)
            setIsRunning(false)
        } else {
            setMeasure(4)           
            setIsRunning(true)
        }
        setInterval(() => playClicks(), ((60/{bpm})*1000))
    }
    
    const handleBPMChange = (e) => {
        setBpm(e.target.value)
        setCount(0)
    }

    const playClicks = () => {
        if ({count} === 0) {
           playAccent()
        } else {
           playClick()
        } 

        ({count} === {measure} - 1) ? setCount(0) : setCount(count + 1)
    }

    return (
        <div className='metronome'>
            <button type="button" onClick={() => ToggleMetronome()}>{isRunning ? "Stop" : "Play"}</button>
            <input type="text" name="bpm" value={bpm} onChange={(e) => handleBPMChange(e)}></input> 
            <strong>{count}</strong>
        </div>
    )
}