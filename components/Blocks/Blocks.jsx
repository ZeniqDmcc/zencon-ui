import Container from "../Container/Container";
import React from "react";
import BlockRender from "./BlockRender";
import {useBlock} from "../../hooks/useBlock";
import {Loading} from "../Loading/Loading";

export const CHAFFLE_STATE = {
    no_chaffle: 0,
    unchaffle: 1,
    chaffle: 2
}

export default function Blocks() {

    const {blocks, loading} = useBlock(5)

    return (
        <section className="bg-gray-900 text-white pt-1 pb-8">
            <Container>
                <h1 className="font-extrabold font-primary text-transparent text-center text-7xl bg-clip-text bg-white mt-20 pb-5">
                    Designed for Performance
                </h1>
                <p className="sm:text-[20px] text-[18px]font-secondary text-center text-gray-400 mb-8 md:text-[20px] mt-6">
                    With one block every 3 seconds and high transaction capacity, the ZENIQ Smartchain can boost your
                    web3 app{"'"}s performance.
                </p>
            </Container>

            {!loading ?
                <div className="block-container">
                    {blocks && blocks?.map((block, index, {length}) => {
                        let chaffle_state = CHAFFLE_STATE.no_chaffle
                        let classname = ''
                        switch (index) {
                            case 0:
                                classname = 'fadeout-container'
                                break;
                            case length - 1:
                                classname = 'fadein-container'
                                chaffle_state = CHAFFLE_STATE.chaffle
                                break;
                            case length - 2:
                                classname = 'slideup-container'
                                chaffle_state = CHAFFLE_STATE.unchaffle
                                break;
                            default:
                                classname = 'slideup-container'
                        }
                        return (
                            <BlockRender key={block?.number + index.toString()} blockObject={block}
                                         chaffled={chaffle_state} classname={classname}/>
                        )
                    })}
                </div> :
                <div className="block-container">
                    <Loading/>
                </div>
            }
        </section>
    );
}

