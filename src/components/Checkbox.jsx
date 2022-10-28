import React from 'react';
import useSound from 'use-sound';
import popDown from './../sounds/blipSelect.wav';


export function Checkbox() {
    const [isChecked, setIsChecked] = React.useState(
        false
    );

    const [playActive] = useSound(
        popDown,
        { volume: 0.25, playbackRate: 0.9}
    );
    const [playOn] = useSound(
        popDown,
        { volume: 0.25 }
    );
    const [playOff] = useSound(
        popDown,
        { volume: 0.25,  playbackRate: 1.1}
    );

    return (
        <div>
            <input type="checkbox"
                name="demo-checkbox"
                checked={isChecked}
                size={24}
                label="I agree to self-isolate"
                onChange={() => setIsChecked(!isChecked)}
                onMouseDown={playActive}
                onMouseUp={() => {
                    isChecked ? playOff() : playOn();
                }}
            />
        </div>
    );
}