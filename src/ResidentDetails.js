import React, {Component} from 'react';

class ResidentDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resident: {}
        };

    }

    render() {

        return (
            <div>
                <ol>
                    <li>Name - {this.props.resident.name}</li>
                    <li>Age - {this.props.resident.age} years</li>
                    <li>House Number - {this.props.resident.tower}-{this.props.resident.houseNumber}</li>
                </ol>
            </div>

        );


    }

}

export default ResidentDetails;