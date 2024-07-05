import React,{useState} from 'react'

export default function Textform(props) {
  const[text , setText] =useState('Enter text here');

  const handleUpClick =()=>{
   // console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleLowClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }
  const handleOnChange =(event)=>{
    setText(event.target.value);
  } 
  

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").length } Minutes to read</p>
      <h2>Preview</h2>
      {/* <p>{text.replaceAll("You","me")}</p>
      <p>{text=== "You" ? "me" : text}</p>
      <p>{text.split()=== "You" ? "me" : text}</p> */}
      <p>{text.length>0? text : "Enter text in the above textbox to preview it"}</p>
    </div>
</>
  )
}
