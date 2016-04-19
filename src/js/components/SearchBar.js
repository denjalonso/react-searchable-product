import React from "react";

export default React.createClass({
    render: function () {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.filterText} />
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly} />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
});