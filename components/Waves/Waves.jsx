import React, {useRef} from 'react'
import {useScroll} from "../../hooks/useScroll";
import isElementInViewport from "../../utils/Helpers/isElementInViewport";
import {Astronaut} from "../../assets/svg/Astronaut";

export const Waves = ({scale, astronaut}) => {

    const waves = useRef()
    const offset = useScroll(scroll, 3600)

    function scroll(current_offset) {
        if(!isElementInViewport(waves.current)) return current_offset
        const element_width = 6000
        const element_top = waves.current?.getBoundingClientRect().top
        const element_bottom = waves.current?.getBoundingClientRect().bottom
        const element_height = element_bottom - element_top
        const window_height = (window.innerHeight || document.documentElement.clientHeight)
        const window_width = (window.innerWidth || document.documentElement.clientWidth)
        return Math.max(Math.min(element_bottom / (window_height + element_height) * (element_width - window_width),element_width - window_width),0)
    }

    return (
        <div ref={waves} className={"wave-container overflow-hidden " + (astronaut ? 'astronaut' : '')}>
            <div className='waves' id={'waves'}    style={{
                left: -offset + 'px',
                transform: 'scaleY(' + (scale || 1) + ')'
            }} />
            {astronaut && <Astronaut/>}
        </div>
    )
}