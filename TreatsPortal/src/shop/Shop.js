import React, { Component } from "react";
import { TreatsNavigation } from "./TreatsNavigation";
import { CustomersList } from "./CustomersList";
export class Shop extends Component {
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">Customer and Treats Details</div>
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-2">
                    <TreatsNavigation baseUrl="/shop/customers"
                        treats={this.props.treats} />
                </div>
                <div className="col-9 p-2">
                    <CustomersList customers={this.props.customers} />
                </div>
            </div>
        </div>
    }
}