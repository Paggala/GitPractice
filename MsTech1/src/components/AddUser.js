import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

class AddUser extends React.Component {

  constructor(props){
    super(props);
    this.OnSaveClick = this.OnSaveClick.bind(this);
    this.OnCancelClick = this.OnCancelClick.bind(this);
  }
  state = { userName: '',
  showForm: true, };
	// handleSubmit = (event) => {
  // 	event.preventDefault();
  //  // console.log(this.state.userName);
    
  // };

  // handleVillageChange=  (e) =>{
  //   var newArrayOfSelectedOptionValues =
  //   this.props.someCallbackFromParent(newArrayOfSelectedOptionValues);
  // }

  OnCancelClick() {
    this.setState(state => ({
      userName: '',
      showForm: false
   }));
  }


  OnSaveClick() {
    if(this.state.userName){
      const NewUserdata= {
        "User": this.state.userName,
        "Permissions":this.state.selectValue,
        "Villages" : "BV,FSH",
      };
      //console.log("InsideSaveClick" + this.state.isShow);
      this.props.onSubmit(NewUserdata);
      this.setState(state => ({
        userName: '',
        // showForm: false
     }));
    }
    
  }
  render(){
    
    return (
      <div>
{ this.state.showForm ? 
   (<div className="well" >
      <label htmlFor="userName">Username</label>
      <input className="form-control col-lg-6" id="AdminUser_name" name="AdminUser.Name" type="text"
      value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="username" 
          required />
      <label htmlFor="role">Role</label>
      <select id="role"  className="form-control col-lg-6" 
      value={this.state.selectValue} onChange={event =>  this.setState({selectValue:event.target.value})}>
        <option value="Group Admin">Group Admin</option>
        <option value="Group owner">Group owner</option>
        <option value="Visitor">Visitor</option>
        <option value="Village Admin">Village Admin</option>
      </select>
      <label htmlFor="villages">Applicable Villages</label>
      {/* multiple={true} value={this.props.arrayOfOptionValues} onChange={this.handleVillageChange} */}
      <select id="village"  className="form-control col-lg-6">
        <option value="Kv">KV</option>
        <option value="LV">LV</option>
        <option value="LRV">LRV</option>
        <option value="BV">BV</option>
      </select>
      <input className="form-control col-lg-6" id="Village" name="Village"  type="text"></input>
      <button id='btnSave' className="btn btn-primary" onClick={this.OnSaveClick}>Save</button> 
      <button id='btnCancel'  className="btn " onClick={this.OnCancelClick} >Cancel</button> 
   </div>): null }  
   </div>
    )
  }
}


export default AddUser;