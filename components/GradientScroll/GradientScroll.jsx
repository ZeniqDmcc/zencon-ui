import React, {useRef} from 'react'
import {useScroll} from "../../hooks/useScroll";

export const GradientScroll = () => {

    const gradient = useRef()
    const offset = useScroll(scroll, 0)

    function scroll() {
        return Math.max(Math.min(document.getElementById('__next').scrollTop,8000),0)
    }

    return (
        <div ref={gradient} className="gradient-container">
            <div className='gradient' id={'gradient'} style={{
                left: -offset + 'px',
            }} />
        </div>
    )
}