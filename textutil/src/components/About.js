
export default function About(props) {

    // const [myStyle, setStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if (myStyle.color == 'black') {
    //         setStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })

    //         setBtnText("Enable Light Mode")
    //     } else {
    //         setStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })

    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104' : 'white'
    }

    return (
        <div className="container mt-3" >
            <h1 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={myStyle}>
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Textutiles</strong> offers a simple and efficient way to analyze your text. Whether you want to count words, characters, or remove extra spaces, our tool provides instant results. It's perfect for students, writers, and professionals who work with content and need quick feedback.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Our tool is completely free with no hidden charges. You don’t need to sign up or create an account — just visit the website, paste your text, and start using the tools right away. We believe in providing valuable utilities without any cost.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Browser compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutiles works smoothly on all modern web browsers like Chrome, Firefox, Edge, and Safari. It’s responsive and lightweight, so you can use it on your desktop, tablet, or mobile without any hassle.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container p-2">
                <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div> */}
        </div>
    )
}
