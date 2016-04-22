import React from "react";

export default class SearchBar extends React.Component {
    constructor() {
        super();
        // https://facebook.github.io/react/docs/reusable-components.html#no-autobinding
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.props.onUserInput(
            this.refs.filterTextInput.value,
            this.refs.inStockOnlyInput.checked
        );
    }
    render() {
        return (
            <form>
                <input type="text"
                       placeholder="Search..."
                       value={this.props.filterText}
                       ref="filterTextInput"
                       // https://facebook.github.io/react/docs/reusable-components.html#no-autobinding
                       onChange={() => this.handleChange()}
                />
                <p>
                    <input type="checkbox"
                           checked={this.props.inStockOnly}
                           ref="inStockOnlyInput"
                           onChange={this.handleChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
};