import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    
    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Text", "success");
    }
    
    const onChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
        props.showAlert("Extraspace removed", "success");
    }

    const [text, setText] = useState("Enter the text");
    return (
        <>
            <div style = {{color: (props.mode === 'dark') ? 'white' : 'black'}} className="container">
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={onChange} style = {{backgroundColor: (props.mode === 'dark') ? 'grey' : 'white', color: (props.mode === 'dark') ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowerCase</button>
                <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>

            </div>

            <div style = {{color: (props.mode === 'dark') ? 'white' : 'black'}} className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length}</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
            </div>
        </>
    )
}
