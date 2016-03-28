import React, { Component } from 'react';
import Datepicker from '../src/datepicker.js';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
    }

    state = {
        date: '2015-11-11 08:06:07'
    }

    onClick() {
        this.setState({
            date: '2015-11-11 08:06:07'
        });
    }
    
    handleChange(newValue) {
        console.log(newValue);
    }

    handleChangeTime(newValue) {
        this.setState({
            date: '2015-11-11 ' + newValue
        });
    }


    render() {
        return (
            <div>
                <button onClick={this.onClick}>还原</button>
                <Datepicker 
                    onChange={this.handleChange}
                    value={this.state.date}
                />
                <Datepicker 
                    onChange={this.handleChangeTime}
                    value={this.state.date}
                    format="HH:mm:ss"
                    timeOnly
                />
            </div>
        );
    }
};
