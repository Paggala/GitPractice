import React, { useState } from 'react';

class CustomerDiagnostics extends React.Component {
  render(){
    return (
      <div>
    <h2>Customer Diagnostics</h2>
    <h4>Customer Identifier</h4>
    <p>Please use either the customer's email address, GUID or Coniq Bar Code to search for the customer.</p>
    <input type="text" id="userIdent" onkeydown="checkEnter(event);"/>
    <a class="btn btn-primary" href="javascript:void(0);" onclick="UserDiag_Ajax.SearchUserDiag();">Find Customer</a>
    <label class="label-danger" id="diagnosticsMessage"></label>
    </div>
      )
  }
}


export default CustomerDiagnostics;