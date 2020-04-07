import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';


const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[Something for the Isolation Buhlungus](https://xhamster.com)

### Text Decorations

*Italics*

**Bold**

### Image

![alt text](https://i.pinimg.com/236x/f4/c2/8d/f4c28d16ad094ef67178b8ab594834fc.jpg 'Rest Easy King')

### BlockQuote

>This took me fucking 3 days to complete, I am proud of myself.

### Code

\`npm install create-react-app\`

\`\`\`
function reactApp(wholeday) {
  if(notDoneToday) {
    return "You are a lil bish"
  } else {
    return "Job well done"
  }
}
\`\`\`
`



marked.setOptions({
  breaks: true
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markdown: initialMarkdown
    }
  }

  handleChange = e => this.setState({ markdown: e.target.value })
   
  render() { 
    return(
      <div id="header">
        <h1>Markdown Previewer</h1>
        <div className="container">
          <div className="left">
            <textarea id="editor" value={this.state.markdown} onChange={this.handleChange}/>
          </div>
          <div className="right">
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} />
          </div>
        </div>
      </div>
      );
    }
}

export default App;
