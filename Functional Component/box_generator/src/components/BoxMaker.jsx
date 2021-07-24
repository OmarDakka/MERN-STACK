import React, { useState } from 'react';
import BoxPlace from './BoxPlace';



const BoxMaker = (props) => {
    const [colorful, setColorful] = useState({color: ""});
    const [heightLimit, setHeightLimit] = useState({height: ""});
    const [widthLimit, setWidthLimit] = useState({width: ""})
    const [boxState, setBoxState] = useState({boxes:[]});


const onChangeHandler = e => {
    setColorful({
        ...colorful,
        [e.target.name]: e.target.value
    })
    setHeightLimit({
        ...heightLimit,
        [e.target.name]: e.target.value
    })
    setWidthLimit({
        ...widthLimit,
        [e.target.name]: e.target.value
    })
}

const onSubmitHandler = e => {
    e.preventDefault();

    const box = [colorful.color, heightLimit.height, widthLimit.width];

    let boxesCopy = boxState.boxes.slice();
    boxesCopy.push(box);

    setBoxState({
        boxes: boxesCopy
    });
    setColorful({
        color: ""
    });
    setHeightLimit({
        length: ""
    });
    setWidthLimit({
        width: ""
    });
}

return (
    <div>
        <form onSubmit= {onSubmitHandler}>
            <label htmlFor="color">Color: </label>
            <input type="text" name="color" value={colorful.color} onChange={ onChangeHandler } />
            <label htmlFor="height">Height: </label>
            <input type="number" name="height" value={ heightLimit.height } onChange={ onChangeHandler } />
            <label htmlFor="width">Width: </label>
            <input type="number" name="width" value={ widthLimit.width } onChange={ onChangeHandler } />

            <button type="submit">Add Box</button>
        </form>
        <BoxPlace box={boxState}/>
    </div>
    );
}

export default BoxMaker;