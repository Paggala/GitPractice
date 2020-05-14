import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { ToggleLink } from "../ToggleLink";

export class TreatsNavigation extends Component {
    render() {
        return <React.Fragment>
            <ToggleLink to={this.props.baseUrl} exact={true}>All</ToggleLink>
            {this.props.treats && this.props.treats.map(cat =>
                <ToggleLink key={cat}
                    to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>
                    {cat}
                </ToggleLink>
            )}
        </React.Fragment>
    }
}