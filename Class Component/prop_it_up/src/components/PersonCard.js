import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageClicked: Number(props.age)
        }
    }

    ageClick() {
        this.setState({
            ageClicked: this.state.ageClicked + 1
        });
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        const { ageClicked } = this.state;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {ageClicked}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.ageClick.bind(this)}>Birthday button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;