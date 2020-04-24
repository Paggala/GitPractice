import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//Added comment to modify

ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);

