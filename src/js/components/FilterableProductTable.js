import React from "react";
import SearchBar from "../components/SearchBar";
import ProductTable from "../components/ProductTable";

export default React.createClass({
    render: function() {
        return (
            <div>
                <SearchBar/>
                <ProductTable products={this.props.products} />
            </div>
        );
    }
});