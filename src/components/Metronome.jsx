import React from 'react';
import useSound from 'use-sound';
import { useState } from 'react';
import clickSound from './../sounds/blipSelect.wav';
import { useEffect } from 'react';

export function Metronome() {

    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [bpm, setBpm] = useState(130);
    const [measure, setMeasure] = useState(4);
    const [timer, setTimer] = useState(0);


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
            clearInterval(timer)
        } else {
            setMeasure(4)
            setIsRunning(true)
            setTimer(setInterval(() => playClicks(), (( 60 / bpm ) * 1000)))
            playClicks()
        }
    }

    const handleBPMChange = (e) => {
        setBpm(e.target.value)
    }

    const playClicks = () => {
        if (count === 0) {
            playAccent()
        } else {
            playClick()
        }

        (count === measure - 1) ? setCount(0) : setCount(count + 1)
    }

    return (
        <div className='metronome'>
            <button type="button" onClick={() => ToggleMetronome()}>{isRunning ? "Stop" : "Play"}</button>
            <input type="text" name="bpm" value={bpm} onChange={(e) => handleBPMChange(e)}></input>
            <strong>{count}</strong>
        </div>
    )
}