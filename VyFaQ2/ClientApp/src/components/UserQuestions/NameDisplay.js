import React, { Component } from 'react'

class NameDisplay extends Component {

    render() {

        return (
            <div>
                <p>{this.props.Name}</p>
            </div>
        )
    }
}
export default NameDisplay