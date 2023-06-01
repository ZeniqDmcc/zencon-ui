import React from 'react'
// import ocean from '../../public/assets/ocean.mp4'

const One = () => {
    return(
        <div className="blob-container">
            <object type="image/svg+xml" data="../../public/assets/blob.svg">svg-animation</object>
            <object type="image/svg+xml" data="../../public/assets/blob.svg">svg-animation</object>
        </div>
    )
}

const Two = () => {
    return(
        <div className="blob-bg-container">
            <div className="background">
                <object type="image/svg+xml" data="./assets/blob2.svg">svg-animation</object>
                {/*<object type="image/svg+xml" data="./assets/blob2.svg">svg-animation</object>*/}
            </div>
            <video autoPlay muted loop>
                <source src={ocean}/>
            </video>
        </div>
    )
}

const Three = () => {
    return(
        <div className="blob-bg-container invert-blob">
            <div className="background">
                <object type="image/svg+xml" data="./assets/blob2.svg">svg-animation</object>
                {/*<object type="image/svg+xml" data="./assets/blob2.svg">svg-animation</object>*/}
            </div>
            <video autoPlay muted loop>
                <source src={ocean}/>
            </video>
        </div>
    )
}

const Four = () => {
    return(
        <div className="blob-bg-container dark">
            <div className="background">
                <object type="image/svg+xml" data="./assets/blob2.svg">svg-animation</object>
                {/*<object type="image/svg+xml" data="./assets/blob2.svg">svg-animation</object>*/}
            </div>
            <video autoPlay muted loop>
                <source src={ocean}/>
            </video>
        </div>
    )
}

const Blobs = () => {
    return(
        <div id="blobs">
            <One/>
            {/*<Two/>*/}
            {/*<Three/>*/}
            {/*<Four/>*/}
        </div>
    )
}

export default Blobs