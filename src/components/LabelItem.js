import React, { Component } from 'react';

class LabelItem extends Component {
    render() {
        return (
            <tr>
                <td
                    colSpan='7'
                    style={{
                        backgroundColor: this.props.color,
                        color: 'white'
                    }}
                >
                    {this.props.label}
                </td>
            </tr>
        );
    }
}

export default LabelItem;