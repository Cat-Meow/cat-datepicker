import React, { Component } from 'react';

class Inputer extends Component {
    static propTypes = {
        value: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        readOnly: React.PropTypes.bool
    }

    static defaultProps = {
        value: '',
        disabled: false,
        readOnly: false
    }

    handleClick() {
        let { disabled, readOnly } = this.props;
        !disabled && !readOnly && this.props.onSelect();
    }

    render() {
        let { value, onSelect, disabled, readOnly } = this.props;

        return (
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    onClick={this::this.handleClick}
                    value={value}
                    onChange={()=>{}}
                    disabled={disabled}
                />
                <div className="input-group-addon">
                    <i className="glyphicon glyphicon-calendar"></i>
                </div>
            </div>
        )
    }
}

export default Inputer;
