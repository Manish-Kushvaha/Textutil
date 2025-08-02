import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClrClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }

    const handleTrimClick = () => {
        let newText = text.trim();
        setText(newText);
    }

    const handleCopy = () => {
        // let text = document.getElementById('myBox');
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clickboard", "success");
    }

    const handleOnClick = (event) => {
        setText(event.target.value);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

    
    const [text, setText] = useState('');
    return (
        <>
            <div className="container pt-3" style={{ color: (props.mode === 'dark' ? 'white' : '#042743') }}>
                <h1>{props.heading}</h1>
                <div className="mb-3 ">
                    <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} value={text} rows="9" placeholder='Enter text here..' onChange={handleOnClick} > </textarea>
                </div>
                <div className="container m-0 p-0">
                    <button disabled={text.length === 0} type="button" className="btn btn-info mx-2 my-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
                    <button disabled={text.length === 0} type="button" className="btn btn-info mx-2 my-2" onClick={handleLowClick}>Convert to lowercase</button>
                    <button disabled={text.length === 0} type="button" className="btn btn-info mx-2 my-2" onClick={handleTrimClick}>Trim</button>
                    <button disabled={text.length === 0} type="button" className="btn btn-info mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length === 0} type="button" className="btn btn-info mx-2 my-2" onClick={handleExtraSpace}>Remove Space</button>
                    <button disabled={text.length === 0} type="button" className="btn btn-info mx-2 my-2" onClick={handleClrClick}>Clear</button>
                </div>
            </div>
            <div className="container my-2 " style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2 >Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
