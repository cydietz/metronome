import React from 'react';
import useSound from 'use-sound';
import popDown from './../sounds/pop-down.mp3';
import popUpOn from './../sounds/pop-up-on.mp3';
import popUpOff from './../sounds/pop-up-off.mp3';


export function Checkbox() {
    const [isChecked, setIsChecked] = React.useState(
        false
    );

    const [playActive] = useSound(
        popDown,
        { volume: 0.25 }
    );
    const [playOn] = useSound(
        popUpOn,
        { volume: 0.25 }
    );
    const [playOff] = useSound(
        popUpOff,
        { volume: 0.25 }
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