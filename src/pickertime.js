import React, { Component } from 'react';

class PickerTime extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    calcute(time, type) {
        switch (type) {
            case 'hour':
                return time.getHours();
                break;
            case 'minute':
                return time.getMinutes();
                break;
            case 'seconds':
                return time.getSeconds();
                break;
        }
    }

    handleClick(timeType) {
        // 此处想办法用dom方法传参数
        this.props.timeSwitch(this.calcute(this.props.time, timeType), timeType);
    }

    render() {
        if ((this.props.dateOnly === true && this.props.timeOnly !== true) || this.props.type !== 'day') {
            return null;
        } else {
            let { time } = this.props;

            return (
                <div className="salt-calendar-cell-footer clearfix">
                    <div className="salt-calendar-cell salt-calendar-cell-time">
                        <button
                            className="btn btn-link btn-block"
                            onClick={this.handleClick.bind(null, 'hour')}
                            type="button"
                        >
                            {this.calcute(time, 'hour')}时
                        </button>
                    </div>
                    <div className="salt-calendar-cell salt-calendar-cell-time">
                        <button
                            className="btn btn-link btn-block"
                            onClick={this.handleClick.bind(null, 'minute')}
                            type="button"
                        >
                            {this.calcute(time, 'minute')}分
                        </button>
                    </div>
                    <div className="salt-calendar-cell salt-calendar-cell-time">
                        <button
                            className="btn btn-link btn-block"
                            onClick={this.handleClick.bind(null, 'seconds')}
                            type="button"
                        >
                            {this.calcute(time, 'seconds')}秒
                        </button>
                    </div>
                </div>
            )
        }
    }
}

export default PickerTime;
