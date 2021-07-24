import React from 'react';
import { BoxSetUp,Colorful } from './BoxStyle';

const BoxPlace = ({box}) => {
    return (
        <BoxSetUp>
            {box.boxes.map(function (box, i) {
                let styles = {
                    backgroundColor: box[0],
                    height: box[1] + "px",
                    width: box[1] + "px"
                }
                return <Colorful key={i} style={styles}></Colorful>
            })}
        </BoxSetUp>
    )
}

export default BoxPlace;