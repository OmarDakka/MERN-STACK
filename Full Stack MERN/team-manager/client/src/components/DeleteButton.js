import React from 'react';
import axios from 'axios';
import {DestroyBtn} from '../styles/Styles';

export default props => {

    const onClickDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/players/${props.playerId}`)
            .then(res => {
                if(window.confirm("Are you sure you want to remove this player?")){
                    props.successCallback();
                }
            })
    }

    return (
        <DestroyBtn onClick={onClickDelete}>Remove</DestroyBtn>
    )
}