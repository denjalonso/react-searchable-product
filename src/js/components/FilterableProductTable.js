import React from "react";
import SearchBar from "../components/SearchBar";
import ProductTable from "../components/ProductTable";

export default React.createClass({
    getInitialState: function () {
        return {
            filterText: '',
            inStockOnly: false
        };
    },
    render: function() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
});