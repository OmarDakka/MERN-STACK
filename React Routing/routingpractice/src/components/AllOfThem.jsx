import React from 'react';

const AllOfThem = (props) => {
    let num = true;
    if (isNaN(+props.id)){
        num = false;
    }

    const styles = {
        color: props.color,
        background: props.backgroundColor,
    }

    return (
        <div style={styles}>
            {num? <p>The Number is: { props.id }</p> : <p>The Word is: { props.id }</p>}
        </div>
    );
}

export default AllOfThem;