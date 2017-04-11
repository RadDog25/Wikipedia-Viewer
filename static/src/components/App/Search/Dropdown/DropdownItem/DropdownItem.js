import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MenuItem } from 'react-bootstrap';
import jump from 'jump.js';
import { clickedDropdownItem } from '../../../../../actionCreators/clickedDropdown/clickedDropdown.js';

class DropdownItem extends Component {
    handleClick() {
        jump(`.${this.props.title.replace(" ", "")}`);
        this.props.clickedDropdownItem();
    }
    render() {
        return (
            <MenuItem onClick={this.handleClick.bind(this)} eventKey={this.props.index}>
                {this.props.title}
            </MenuItem>
        );
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        clickedDropdownItem: clickedDropdownItem
    }, dispatch);
}

export default connect(null, matchDispatchToProps)(DropdownItem);