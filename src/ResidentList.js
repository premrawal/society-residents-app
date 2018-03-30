import React, {Component} from 'react';
import ResidentDetails from './ResidentDetails.js';

class ResidentList extends Component {
   

    constructor(props) {
        super(props);
        this.state = {
            towerName: "",
            residents: [{name: 'Dhanya', age: 6, tower: 'A', houseNumber: 301},
                        {name: 'Soumya', age: 7, tower: 'H', houseNumber: 403},
                        {name: 'Sweetu', age: 10, tower: 'A', houseNumber: 502},
                        {name: 'Shlok', age: 15, tower: 'C', houseNumber: 101},
                        {name: 'Aryan', age: 3, tower: 'E', houseNumber: 804}, 
                        {name: 'Krisha', age: 8, tower: 'F', houseNumber: 903}]

        };
    }

    render() {

        const residents = [];

        return (

            <div>
                <h1>Tower {this.props.towerName} Resident Information</h1>
                {this.state.residents.map( resident => <ResidentDetails key={resident} resident={resident} />)}                
            </div>

        );

    }

}

export default ResidentList;