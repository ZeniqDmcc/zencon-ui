import React from "react"

export default function Cube({blockObject}) {

//     let cube = document.querySelector('.cube');
//     let radioGroup = document.querySelector('.radio-group');
//     let currentClass = '';
//
//     function changeSide() {
//         let checkedRadio = radioGroup.querySelector(':checked');
//         let showClass = 'show-' + checkedRadio.value;
//         if (currentClass) {
//             cube.classList.remove(currentClass);
//         }
//         cube.classList.add(showClass);
//         currentClass = showClass;
//     }
//
// // set initial side
//     changeSide();
//
//     radioGroup.addEventListener('change', changeSide);

    return (
        <div className="scene">
            <div className="cube">
                <div className="cube__face cube__face--front">
                    <p>Block 0000</p>
                </div>
                <div className="cube__face cube__face--back"></div>
                <div className="cube__face cube__face--right"></div>
                <div className="cube__face cube__face--left"></div>
                <div className="cube__face cube__face--top"></div>
                <div className="cube__face cube__face--bottom"></div>
            </div>

            {/*<p className="radio-group">*/}
            {/*    <label>*/}
            {/*        <input type="radio" name="rotate-cube-side" value="front" checked/> front*/}
            {/*    </label>*/}
            {/*    <label>*/}
            {/*        <input type="radio" name="rotate-cube-side" value="right"/> right*/}
            {/*    </label>*/}
            {/*    <label>*/}
            {/*        <input type="radio" name="rotate-cube-side" value="back"/> back*/}
            {/*    </label>*/}
            {/*    <label>*/}
            {/*        <input type="radio" name="rotate-cube-side" value="left"/> left*/}
            {/*    </label>*/}
            {/*    <label>*/}
            {/*        <input type="radio" name="rotate-cube-side" value="top"/> top*/}
            {/*    </label>*/}
            {/*    <label>*/}
            {/*        <input type="radio" name="rotate-cube-side" value="bottom"/> bottom*/}
            {/*    </label>*/}
            {/*</p>*/}

        </div>


    )
}