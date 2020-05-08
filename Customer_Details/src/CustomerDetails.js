import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response})
    })
  };

  render() {
    if (!this.state.customerDetails)
      return (<p>Loading Data</p>)
    return (<div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
                <Panel.Title componentClass="h3">{this.state.customerDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.customerDetails.data.name}</p>
          <p>GUID : {this.state.customerDetails.data.guid}</p>
          <p>Salesforce Id : {this.state.customerDetails.data.salesforceID}</p>
          <p>Barcode Number : {this.state.customerDetails.data.barcodeNumber}</p>
          <p>Email : {this.state.customerDetails.data.email}</p>
          <p>Is Active : {this.state.customerDetails.data.isActive}</p>
          <p>Date Membership : {this.state.customerDetails.data.dateMembership}</p>
          <p>Opt-in Status : {this.state.customerDetails.data.optInStatus}</p>
          <p>Is Privilege : {this.state.customerDetails.data.isPrivilege}</p>
          <p>Date Privilege : {this.state.customerDetails.data.dateJoinedPrivilege}</p>
          <p>Date Last login : {this.state.customerDetails.data.datelastLoggedin}</p>
          <p>Spend Segment : {this.state.customerDetails.data.spendSegment}</p>
          <p>Language : {this.state.customerDetails.data.language}</p>
          <p>Country : {this.state.customerDetails.data.country}</p>
        </Panel.Body>
      </Panel>
    </div>)
  }
}
