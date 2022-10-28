import React from "react";
import useSound from "use-sound";
import clickSound from './../sounds/blipSelect.wav';

export function Click(props) {
    const {type} = props

    const [playClick] = useSound(
        clickSound,
        { volume: 0.25 }
    )
    
    const [playAccent] = useSound(
        clickSound,
        { volume: 0.27, playbackRate: 1.1 }
    )

   
}