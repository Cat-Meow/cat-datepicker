import React, { Component } from 'react';
import Datepicker from '../src/datepicker.js';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(newValue) {
        console.log(newValue);
    }


    render() {
        return (
            <div>
                <p>默认使用方式</p>
                <Datepicker 
                    onChange={this.handleChange}
                />
                <Datepicker
                    onChange={this.handleChange}
                    disabled
                />
                <Datepicker
                    onChange={this.handleChange}
                    readOnly
                />
            </div>
        );
    }
};
