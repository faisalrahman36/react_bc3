import React from 'react';
import './App.css';


function App(props) {
return <div>Hello from App.js by <strong>{props.name}</strong> for {props.course}
and class number {props.cnumber} .  <br/>

We are now executing an exression which adds 3 to a number.
Our initial number is {props.number} and after number+3, result is {props.number + 3}
<br/>
<h2>This is some heading</h2>
<ui>
   <li>This is first list item</li>  
   <li>This is a second list item</li>  

</ui>
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
