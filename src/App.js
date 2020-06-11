import React from 'react';
import './App.css';


function App(props) {
return <div>Hello from App.js by <strong>{props.name}</strong> for {props.course}
and class number {props.cnumber} .  <br/>

We are now executing and exression number+3: Result is {props.number + 3}

</div>
}
/*
WE CAN ALSO DO THIS by using destructuring 
function App(name,number,course) {
return <div>Hello from App.js by Syed Faisal ur Rahman {name} for {course}
We can pass a number like {number}</div>
}


*/ 
export default App;
