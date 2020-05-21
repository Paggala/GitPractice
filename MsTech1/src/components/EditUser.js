import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

class EditUser extends React.Component {

  constructor(props){
    super(props);
}

  render(){
    // if (!this.props.ShowMe) {
    //   return null;
    // }
    return (
      <div>
<h4 >Edit User Role</h4>
{/* style={{display:"none"}} */}
      <div className="well" >
      <label htmlFor="userName">Username</label>
      <label htmlFor="userNameValue"> Username Value</label>
      <p></p>
      <label htmlFor="role">Role</label>
      <select id="role"  className="form-control col-lg-6">
        <option value="Group Admin">Group Admin</option>
        <option value="Group owner">Group owner</option>
        <option value="Visitor">Visitor</option>
        <option value="Village Admin">Village Admin</option>
      </select>
      <button id='btnSave' className="btn btn-primary">Save</button> 
      <button id='btnCancel'  className="btn ">Cancel</button> 
   </div></div>
    )
  }
}


export default EditUser;