import React,{useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';
import PlayerForm from './PlayerForm';
import SmolHead from './SmolHead';

export default props => {
    const {player,setPlayer} = props;
    const [errors,setErrors] = useState([]);

    // const [newPlayer, setNewPlayer] = useState({
    //     name: "",
    //     position: "",
    //     status: {
    //         game1: 0,
    //         game2: 0,
    //         game3: 0,
    //     }
    // });

    const createPlayer = (player) => {
        axios.post('http://localhost:8000/api/players', player)
            .then(res => navigate('/players/list'))
            .catch(err => {
                const errorRes = err.response.data.errors;
                const errorArr = [];
                for(var key of Object.keys(errorRes)){
                    errorArr.push(errorRes[key].message)
                }
                setErrors(errorArr)
            })
    }

    return (
        <div>
            <SmolHead/>
            <div>
                <h3>Add Player</h3>
                <PlayerForm 
                initialName=""
                initialPosition =""
                onSubmitProp={createPlayer} />
                {errors.map((err,idx) =><p key={idx}>{err}</p>)}
            </div>
        </div>
    )
}