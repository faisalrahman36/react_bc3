import React from 'react';
import './App.css';

function App(props) {
return <div>Hello from App.js by Syed Faisal ur Rahman {props.name} for {props.course}
We can pass a number like {props.number}</div>
}
/*
WE CAN ALSO DO THIS by using destructuring 
function App(name,number,course) {
return <div>Hello from App.js by Syed Faisal ur Rahman {name} for {course}
We can pass a number like {number}</div>
}


*/ 
export default App;
