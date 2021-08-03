import React, {useState,useEffect} from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import SmolHead from './SmolHead';
import '../styles/Table.module.css'

export default props => {
    const {player, setPlayer} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayer(res.data))
    }, [])

    const removeFromDom = (playerId) => {
        setPlayer(player.filter(player => player._id != playerId))
    }

    return (
        <div>
            <SmolHead/>
            <table>
                <tbody>
                    <tr>
                        <td><h2>Players</h2></td>
                        <td><h2>Preferred Position</h2></td>
                        <td><h2>Actions</h2></td>
                    </tr>
                    {player.map((players,idx) => {
                        return(
                            <tr key={idx}>
                                <td>{players.name}</td>
                                <td>{players.position}</td>
                                <td><DeleteButton playerId={players._id} successCallback={() => removeFromDom(players._id)}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}