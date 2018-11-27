import React, { Component } from 'react';
import './RegisterIdInfo.scss';

class RegisterIdInfo extends Component {
    render() {
        return (
            <div className="form-table">
                <div className="ipt">
                    <input type="text" className="place-h" type={this.props.type} placeholder={this.props.label}></input>
                </div>
            </div>
        )
    }
}

export default RegisterIdInfo;