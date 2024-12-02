import React, { useState } from 'react'


export default function ContactUs(props) {
    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }
    const handleUpClick = () => {
        console.log("Uppercase was Clicked : " + text)
        setText(text.toUpperCase());
    }
    const handleDownClick = () => {
        console.log("Lowercase was Clicked : " + text)
        setText(text.toLowerCase());
    }
    const handleClearClick = () => {
        console.log("Clear text was Clicked : " + text)
        let newtext = "";
        setText(newtext);
    }
    const handlecopyClick = () => {
        console.log("Clear text was Clicked : " + text)
        navigator.clipboard.writeText(text);
        if(text.trim().length > 0){
            alert("Message Copied to Clipboard");
        }else{
            alert("Message is Empty");
        }
    }

    const countWords = (str) => {
        return str.trim().split(/\s+/).filter((word) => word.length > 0).length;
    }

    const [text, setText] = useState("");
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="Mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppecase</button>
            <button className="btn btn-primary m-2" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary m-2" onClick={handlecopyClick}>Copy To Clipboard</button>
            <div className="container my-3 d-flex justify-content-evenly align-items-center ">
                <div className="container">
                    <h2>Your Text Summary</h2>
                    <p><b>{countWords(text)}</b> Words, <b>{text.length}</b> Character</p>
                    <p><b>{0.008 * text.split(" ").length}</b> Minutes to Read the Content</p>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
