import React, {useRef} from 'react'
import {useScroll} from "../../hooks/useScroll";
import isElementInViewport from "../../utils/Helpers/isElementInViewport";

export const GradientBorder = ({children, size}) => {

    const gradient = useRef()
    useScroll(scroll, 0)
    const rotation = useRef(0)
    const pixel_per_step = 25

    function scroll(current_offset) {
        if(!isElementInViewport(gradient.current)) return current_offset
        const element_top = gradient.current?.getBoundingClientRect().top
        const window_height = (window.innerHeight || document.documentElement.clientHeight)
        rotation.current = (current_offset < (window_height - element_top) / 2) ? rotation.current - pixel_per_step : rotation.current + pixel_per_step
        return (window_height - element_top) / 2
    }

    return (
        <>
            <div ref={gradient} className="gradient-border-container" style={{
                padding: size + 'px'
            }}>
                <div className="gradient-children-container">
                    {children}
                </div>
                <div className="gradient-border-absolute-container">
                    <div className='gradient-border' style={{
                        transform: 'rotate(' +
                            rotation.current + 'deg)'
                    }} />
                </div>
            </div>
        </>
    )
}