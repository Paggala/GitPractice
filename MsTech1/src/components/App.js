import React, { useState } from 'react';
import ReadData from './ReadData.js';
import CustomerDiagnostics from './CustomerDiagnostics.js';
class App extends React.Component {
  render(){

    return (
      <div>
        <ReadData/>
        {/* <CustomerDiagnostics/> */}
        </div>
      )
  }
}


export default App;