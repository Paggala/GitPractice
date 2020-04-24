import React, { useState } from 'react';
const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


class Card extends React.Component {
  render(){
    return (
      <div>
    	  <img src={testData[0].avatar_url} style={{width: "1%"}, {margin:"1%"}}></img>
        <div>
          <div style={{color: "red"}} >{testData[0].name}</div>
          <div >{testData[0].company}</div>
        </div>
    	</div>
      )
  }
}

class Form extends React.Component {
  
  render(){
    const [counter, setCounter] = useState(42);
    return (
      <div >
        <input type="text" value="" onChange={}></input>
        <button> Add Card</button>
      </div>
      )
  }
}


class App extends React.Component {
  render(){
    return (
      <div>
         <Form/>
        <Card/>
        </div>
      )
  }
}


export default App;
