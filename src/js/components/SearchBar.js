import React from "react";

export default React.createClass({
    render: () => {
        return (
            <form>
                <input type="text" placeholder="Search..."/>
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
});