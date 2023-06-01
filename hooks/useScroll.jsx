import React, {useEffect, useRef, useState} from 'react'

export const useScroll = (scroll_function, initial_offset) => {

        const wait = useRef(false)
        const current_offset = useRef(initial_offset)
        const [offset, setOffset] = useState(initial_offset)

        useEffect(() => {
            function throttle (limit) {
                return function () {
                    if (wait.current === false) {
                        wait.current = true;
                        current_offset.current = scroll_function(current_offset.current)
                        const temp = current_offset.current
                        setOffset(temp)
                        if(wait.current === true) {
                            setTimeout(function () {
                                wait.current = false;
                            }, limit);
                        }

                    }
                }
            }
            document.getElementById('__next').addEventListener("scroll", throttle(100));
            return () => window.removeEventListener('scroll', throttle(100));
        }, [offset]);


        return offset
}