import React,{useState} from 'react'
import { Form, Row, FormGroup, Col } from "react-bootstrap";
import RangeSlider from 'react-rangeslider'
import { render } from 'react-dom';
import './App.css'

function App() {
  const [redColor, setRedColor] = useState(0)
  const [greenColor, setGreenColor] = useState(0)
  const [blueColor, setBlueColor] = useState(0)
  
  return (
    <div className="controller" style={{
      backgroundColor:"rgb("+redColor+","+greenColor+","+blueColor+")",
      height:"100vh",   
      }}>
      <h1>Colour Picker </h1>
      <h2>Abhaya Kumar Sahoo</h2>
      <div className="box">

      <h4>Red:</h4><br/>    
      <input class="slider" type="range" max="255" onChange={e => setRedColor(e.target.value)} value={redColor} /><br/>
  
      {redColor}

     <h4>Green: </h4><br/> 
      <input class="slider" type="range" max="255" onChange={e => setGreenColor(e.target.value)} value={greenColor}/><br/>
      {greenColor} 
      <h4>Blue:</h4><br/> 
          
      <input class="slider" type="range" max="255" onChange={e => setBlueColor(e.target.value)} value={blueColor}/><br/>
      {blueColor}
      </div>

    </div>
  )
}

export default App
