import React, {Component} from 'react';

class ResidentDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            residentName: "",
            age: "",
            houseNumber: ""
        };

    }

    render() {

        return (
            <div>
                <ul>
                    <li>Name - {this.props.residentName}</li>
                    <li>Age - {this.props.age} years</li>
                    <li>House Number - {this.props.houseNumber}</li>
                </ul>
            </div>

        );


    }

}

export default ResidentDetails;