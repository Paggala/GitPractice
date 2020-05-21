import React, { useState } from 'react';
import UserData from '../Data/UserData.json';
import AddUser from './AddUser.js';
import EditUser from './EditUser.js';
const axios = require('axios');
//import fs from 'E:/Shaile/Study/React/GitHub/GitPractice/MsTech1/node_modules/fs';
const fs = require('fs');
class ReadData extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         showMe: false,
         showEdit: false,
         jsonData : UserData
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleEditClick = this.handleEditClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
         showMe: !state.showMe
      }));
    }

    handleEditClick(user) {
     // alert(user);
      console.log(user.User);
      this.setState(state => ({
         showEdit: !state.showEdit
      }));
    }

    handleDeleteClick(user) {
       alert("Are you sure you want to delete user "+ user.User );
       console.log(user.User);
     }
    addNewUser = (data) => {
       //console.log("Data recieved:" + JSON.stringify(data , null, 2));
       this.state.jsonData = this.state.jsonData.concat(data);
     // console.log("jsonData"+ JSON.stringify( this.state.jsonData, null, 2)); 
      //fs.writeFile('../Data/UserData.json', data, ()=>{console.log("All set");});
      if(data){
      this.renderTableData() ;}

   };

   renderTableHeader() {
      let header = Object.keys(UserData[0])
  
      return header.map((key, index) => {
         // console.log(key +index);
          if (index>2) {
            return <th key={index}> </th>;
          }
      return <th key={index}> {key} </th>
      })
  }
    renderTableData() {
      //console.log("jsonData from RenderTable"+ JSON.stringify( this.state.jsonData, null, 2)); 
      return (this.state.jsonData.map((UserDetail,index)=> {
        const { User,Permissions,Villages} = UserDetail //destructuring
        return (
           <tr key={User}>
              <td>{User}</td>
              <td>{Permissions}</td>
              <td>{Villages}</td>
              {/* onClick={this.handleEditClick}this.handleEditClick({user}) */}
              <td><a href="#" onClick={()=> this.handleEditClick({User})} >Edit</a></td>
              {/*https://stackoverflow.com/questions/52034868/confirm-window-in-react  () => {if(window.confirm('Are you sure to delete this record?')){ this.deleteHandler(item.id)};} */}
              <td><a href="#" onClick={()=> this.handleDeleteClick({User})}  >Delete</a></td>
           </tr>
        )
     })
  )
}

  render() {
    return (
      <div>  
               <div> 
        <h2 id='title'>Admin User List</h2>
      <button id='button' onClick={this.handleClick} >Add User</button>      
      </div>
      { this.state.showMe ? <AddUser onSubmit={this.addNewUser} /> : null }  
      {/* <EditUser ShowEdit={this.state.showEdit}/> */}
     <div>
      <table id='tblUser'>
               <tbody>
               <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}
                </tbody>
       </table>
     </div>
      </div>
    )
  }
}

export default ReadData;
