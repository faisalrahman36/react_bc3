import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <div><App name="faisal" course="4IRU boot camp" number={22}/></div>,
  document.getElementById('root')
);

/*
  <div><App name="faisal" course="4IRU boot camp" number={22}/></div>,

  "" for strings and {} for values which can be used for calculations.

ReactDOM.render(
  <div><App/></div>,
  document.getElementById('root')
);
ff is a property
ReactDOM.render(
  <div><App  name="ff"/></div>,
  document.getElementById('root')
);



ReactDOM.render(
  React.createElement('div',null,"Hello world"),
  document.getElementById('root')
);

div starts with small'd' which tells that it is a tag. Big character 'D' will tell a react component like App.
Hello world is written in the slot where the child component of main div are written. Other div will also go there.
We can have nested tags but not parallel tags.

div inside div will work like this:
React.createElement('div',null,React.createElement('div',null,"Hello world"))

also can do this:
  <div><App/> inside a div</div>,

  or simply remove div and write <App/>
*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
