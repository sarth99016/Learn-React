import Para from './Para';
import React from 'react';

function Para1(){
  return(
    <div>
    <h3>Hellooo1111</h3>
    </div>
  )
}

const anotherElement = (
  <a href="www.google.com">Click Me</a>
)

const newElement = React.createElement('a',{href:'www.google.com', target:'_blank'}, 'Click me 1')

function App() {


  return (
    newElement

    
  )
}

export default App
