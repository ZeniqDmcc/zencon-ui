import React, {useRef} from "react";
import {useScroll} from "../../hooks/useScroll";
import isElementInViewport from "../../utils/Helpers/isElementInViewport";

const Moon = () => {

    const moon_el = useRef()
    const moon_offset = useRef(0)
    useScroll(scrollMoon, 0)
    const pixel_per_step = -80

    function scrollMoon(current_offset) {
        if(!isElementInViewport(moon_el.current)) {
            moon_offset.current = 0
            return current_offset
        }
        const element_top = moon_el.current?.getBoundingClientRect().top
        const window_height = (window.innerHeight || document.documentElement.clientHeight)
        moon_offset.current = Math.max(Math.min((current_offset < (window_height - element_top) / 2) ? moon_offset.current - pixel_per_step : moon_offset.current + pixel_per_step, 240),0)
        return (window_height - element_top) / 2
    }

    return (
        <div ref={moon_el} className="moon" style={{transform: 'translateY(' + moon_offset.current + 'px)'}}>
            <div className="zeniq"/>
        </div>
    )
}

export const Scatter = ({options}) => {

    const {stars, moon, wishing_star} = options


    return (
        <div className={'scatter-container  bg-gradient-to-t from-purple-900 via-gray-900 to-gray-900'}>
            <div className={"relative-container"}>
                {
                    stars &&
                    <>
                        {/*<div className="moon">*/}
                        {/*    <div className="zeniq"/>*/}
                        {/*</div>*/}
                    </>
                }
                {
                    moon &&
                        <Moon/>
                }
                {
                    wishing_star &&
                    <>
                        <div className="wishing-star one"/>
                        <div className="wishing-star two"/>
                        <div className="wishing-star three"/>
                        <div className="wishing-star four"/>
                        <div className="wishing-star five"/>
                    </>
                }
            </div>
        </div>
    )
}