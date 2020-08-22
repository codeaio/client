import React, { Component } from 'react';
import postData from '../helpers/utils.js';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike.js';
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/edit/closetag.js';
import 'codemirror/addon/edit/matchtags.js';
import 'codemirror/addon/selection/active-line.js';

export default class IDE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: null,
            stdout: null,
            stderr: null,
            error: null,
            API: "http://localhost:5000/task",
            id: null,
            uid: null,
            cpp: '#include <iostream>\n\nusing namespace std;\n\nint main() {\n  cout << "Hello, World!" << endl;\n}'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.update();
        var colorLabel = document.getElementById('color');
        var checkbox = document.getElementById('color-mode');
        console.log(colorLabel);
        console.log(checkbox);
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                colorLabel.innerText = "Light";
            } else {
                colorLabel.innerText = "Dark";
            }
        });
    }

    update() {
        // console.log(this.state.id);
        if (this.state.id) {
            // console.log("fetching");
            fetch(this.state.API + '/' + this.state.id)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.status[0] === 'completed') {
                        // console.log("setting variable");
                        var stdout = document.getElementById('stdout');
                        var stderr = document.getElementById('stderr');
                        var err = document.getElementById('error');
                        var status = document.getElementById('status');

                        stdout.value = data.stdout;
                        stderr.value = data.stderr;
                        err.value = data.err;
                        status.innerText = data.status[0];

                        this.setState({
                            id: null
                        });
                    }
                });
        }
        setTimeout(this.update, 2000);
    }

    handleSubmit(event) {
        event.preventDefault();
        var code = this.state.cpp;
        var input = document.getElementById('input').value;
        var status = document.getElementById('status');
        // console.log("sending");
        console.log(code);
        postData(this.state.API + "/create", {
            code: code,
            input: input,
            uid: this.state.uid
        }).then(
            (result) => { 
                console.log(result);
                this.state.id = result._id;
                status.innerText = "running";
            }
        );

    }

    render() {
        var url = window.location.href;
        var queries = url.replace(/^\?/, '').split('&');
        var searchObject = {};
        var split;

        for (let i = 0; i < queries.length; i++ ) {
            split = queries[i].split('=');
            searchObject[split[0]] = split[1];
        }
        console.log(searchObject);
        this.state.uid = searchObject["http://localhost:3000/?uid"]
        const { cpp } = this.state;
        var option = {
            mode: 'text/x-c++src',
            theme: 'default',
            lineNumbers: true,
            lineWraping: true,
            matchBrackets: true,
            matchTags: true,
            autoCloseTags: true,
            autoCloseBrackets: true,
            styleActiveLine: {nonEmpty: true},
        }
        return (
            <div>
                <input type="checkbox" id="color-mode"></input>
                <div className="body">
                    <div className="main">
                        <div className="header">
                            <h1 className="heading">C++ IDE</h1>
                            <label htmlFor="color-mode" id="color">Dark</label>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="ide">
                                <div className="editor">
                                    <CodeMirror 
                                        value={cpp}
                                        options={option}
                                        onBeforeChange={(editor, data, cpp) => {
                                            this.setState({ cpp });
                                        }}
                                    />
                                    <div className="submit">
                                        <input type="submit" value="Run"></input><br></br>
                                        <h4><span id="status"></span></h4>
                                    </div>
                                </div>
                                <div className="io">
                                    <div className="input">
                                        <label htmlFor="input">Input</label><br></br>
                                        <textarea id="input" name="input"></textarea><br></br>
                                    </div>
                                    <div>
                                        <label htmlFor="stdout">stdout</label><br></br>
                                        <textarea id="stdout" name="stdout">{ this.state.stdout }</textarea><br></br>
                                    </div>
                                    <div>
                                        <label htmlFor="stderr">stderr</label><br></br>
                                        <textarea id="stderr" name="stderr">{ this.state.stderr }</textarea><br></br>
                                    </div>
                                </div>
                            </div>
                                <div className="err">
                                    <label htmlFor="error">Error</label><br></br>
                                    <textarea id="error">{ this.state.error }</textarea><br></br>
                                </div>
                        </form>                
                    </div>
                </div>
            </div>
        )
    }
}