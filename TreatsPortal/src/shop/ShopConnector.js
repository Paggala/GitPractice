import React, { Component } from "react";
import { Switch, Route, Redirect }
    from "react-router-dom"
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
const mapStateToProps = (dataStore) => ({
    ...dataStore
})
const mapDispatchToProps = {
    loadData
}
const filterCustomers = (customers = [], treats) =>
    (!treats || treats === "All")
        ? customers
        : customers.filter(p => p.treats.toLowerCase() === treats.toLowerCase());
export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            return <Switch>
                <Route path="/shop/customers/:treats?"
                    render={(routeProps) =>
                        <Shop {...this.props} {...routeProps}
                            customers={filterCustomers(this.props.customers,
                                routeProps.match.params.treats)} />} />
                <Redirect to="/shop/customers" />
            </Switch>
        }
        componentDidMount() {
            this.props.loadData(DataTypes.TREATS);
            this.props.loadData(DataTypes.CUSTOMERS);
        }
    }
)