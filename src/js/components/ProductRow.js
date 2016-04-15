import React from "react";

export default React.createClass({
    render: function () {
        let name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>
        return (
            <tr>
                <td>
                    {name}
                    {this.props.product.price}
                </td>
            </tr>
        );
    }
});