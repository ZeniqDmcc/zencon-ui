import React, {useEffect, useRef, useState} from "react"
import Chaffle from 'chaffle'
import {CHAFFLE_STATE} from "./Blocks";
import isElementInViewport from "../../utils/Helpers/isElementInViewport";

export default function BlockRender({blockObject, chaffled, classname}) {

    const block = useRef()
    const delay = 5000
    useEffect(() => {
            setTimeout(() => {
                // block.current && block.current?.classList.remove(classname)
            }, 2000)
            const el = document.getElementById(blockObject.number)
            Array.prototype.forEach.call(el.children, function (el) {
                if(isElementInViewport(el)) {
                    const chaffle = new Chaffle(el, { /* options */ });
                    chaffle.init();
                    if(chaffled === CHAFFLE_STATE.no_chaffle) {
                        chaffle.clearReinstateTimer();
                        chaffle.clearShuffleTimer();
                    }
                }
            });
    }, [])

    return (
        <div ref={block} className={"block " + classname}>
            <div className="block-text">
                <div className="labels text-right mr-6 text-sm ">
                    <p>BLOCK</p>
                    <p>HASH</p>
                    <p>VALIDATOR</p>
                    <p>TRANSACTIONS</p>
                </div>
                <div id={blockObject.number} className="text-sm truncate ...">
                    {chaffled === CHAFFLE_STATE.chaffle ?
                        <>
                            <p data-chaffle="en" data-chaffle-speed="20" data-chaffle-delay={delay} className={'truncate ...'}>{blockObject.number}</p>
                            <p data-chaffle="en" data-chaffle-speed="20" data-chaffle-delay={delay} className={'truncate ...'}>{blockObject.hash}</p>
                            <p data-chaffle="en" data-chaffle-speed="20" data-chaffle-delay={delay} className={'truncate ...'}>{blockObject.miner}</p>
                            <p data-chaffle="en" data-chaffle-speed="20" data-chaffle-delay={delay} className={'truncate ...'}>{blockObject.transactionsNumber}</p>
                        </> : chaffled === CHAFFLE_STATE.unchaffle ?
                            <>
                                <p data-chaffle="en" data-chaffle-speed="5" data-chaffle-delay="300" className={'truncate ...'}>{blockObject.number}</p>
                                <p data-chaffle="en" data-chaffle-speed="5" data-chaffle-delay="40" className={'truncate ...'}>{blockObject.hash}</p>
                                <p data-chaffle="en" data-chaffle-speed="5" data-chaffle-delay="55" className={'truncate ...'}>{blockObject.miner}</p>
                                <p data-chaffle="en" data-chaffle-speed="20" data-chaffle-delay={delay} className={'truncate ...'}>{blockObject.transactionsNumber}</p>
                            </> :
                        <>
                            <p data-chaffle="en" data-chaffle-speed="5" data-chaffle-delay="300" className={'truncate ...'}>{blockObject.number}</p>
                            <p data-chaffle="en" data-chaffle-speed="5" data-chaffle-delay="40" className={'truncate ...'}>{blockObject.hash}</p>
                            <p data-chaffle="en" data-chaffle-speed="5" data-chaffle-delay="55" className={'truncate ...'}>{blockObject.miner}</p>
                            <p data-chaffle="en" data-chaffle-speed="20" data-chaffle-delay="400" className={'truncate ...'}>{blockObject.transactionsNumber}</p>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}