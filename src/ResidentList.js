import React, {Component} from 'react';
import ResidentDetails from './ResidentDetails.js';

class ResidentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            towerName: ""
        };
    }

    render() {

        return (

            <div>
                <h1>Tower {this.props.towerName} Resident Information</h1>
                <ResidentDetails residentName="Dhanyakumar" age="6" houseNumber="A-301" />
                <ResidentDetails residentName="Soumya" age="6" houseNumber="H-403" />
            </div>

        );

    }

}

export default ResidentList;