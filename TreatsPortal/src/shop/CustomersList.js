//test comment
import React, { Component } from "react";
export class CustomersList extends Component {
    render() {
        if (this.props.customers == null || this.props.customers.length === 0) {
            return <h5 className="p-2">No Customers</h5>
        }
        return this.props.customers.map(p =>
            <div className="card m-1 p-1 bg-light" key={p.guid}>
                <h4>
                    {p.name}
                    <span className="badge badge-pill badge-primary float-right">
                        ${p.spend.toFixed(2)}
                    </span>
                </h4>
                <div className="card-text bg-white p-1">
                    {p.description}
                </div>
            </div>
        )
    }
}