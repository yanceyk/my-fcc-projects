import './App.css';
import './index.css';
import kitty from './kitty.jpg';
import DOMPurify from 'dompurify';
import { marked } from "marked";
import React from "react";

// Set up Marked Options.
marked.setOptions({
  gfm: true,
  breaks: true
});

// Define our editor component.
class Editor extends React.Component {
  constructor(props) {
    super(props);
      this.inputChanged = this.inputChanged.bind(this);
  }

  inputChanged(event) {
    this.props.onInputChange(event.target.value);
  }

  render() {
    return (
      <div className='w-full h-screen flex flex-col'>
        <h3>Editor</h3>
        <textarea
          id='editor'
          value={this.props.value}
          onChange={this.inputChanged}
          className='w-full h-full overflow-y-scroll font-medium'
        />
      </div>
    );
  }
}

// Define the previewer component
function Previewer( props ) {
  return (
    <div
      className='w-full h-screen flex flex-col'
    >
      <h3>Preview</h3>
      <div
        id='preview'
        dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
        className='w-full h-full overflow-y-scroll'
      />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: `### Welcome to Markdown Previewer!
  [Markdown](https://en.wikipedia.org/wiki/Markdown "Markdown on Wikipedia") is a human-readable markup language, created by [John Gruber](https://daringfireball.net/projects/markdown/syntax "Original MD Flavor") and Aaron Swartz in 2004. Unlike other markup languages, like HTML and XML, it doesn't have a standard. But it comes in many flavors. This app allows you to preview [Github's flavor](https://github.github.com/gfm/ "Github's MD Flavor").
  ***
  Let's do some headings.
  # Heading 1
  Equivalent to an HTML \`<h1>Heading 1</h1>\` tag.
  ## Heading 2
  Equivalent to an HTML \`<h2>Heading 2</h2>\` tag.
  ### Heading 3
  Equivalent to an HTML \`<h3>Heading 3</h3>\` tag.  
  **Notice a pattern? Now you try.** Fill in the rest of the HTML headings below. Make sure you put a space between the \`#\` signs and your text or it won't work.
  ---
  How about some code? You've already seen my inline \`styles\`. Let's do a code block. Let's try it with some \`CSS\` from this site.
  \`\`\`
  h1, h2, h3, h4, h5, h6 {
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  font-weight: 700;
  }
  \`\`\`
      
  **What do you think?** ***Cool, right!*** Just a few more.
  ___
  **Let's try some lists.** Here's an unordered, bulleted, list - \`<ul></ul>\` in \`HTML\`. Looks like we're getting some salad ingredients.  
  - romaine lettuce
  - roma tomatoes
  - cucumber
      
  That's cool, right? How about an ordered, numbered, list - \`<ol></ol>\` in \`HTML\`? We're eating frozen lasagna tonight.
  1. Preheat the over to 375&#176;F.
  2. Cover the lasagna tightly with aluminum foil.
  3. Bake for 60 to 75 minutes, or until warmed all the way through.
  ***
  You can even quote someone.
  >_"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."_
  >  -**Sirius Black to Ron, _Harry Potter and the Goblet of Fire_**
  ___
  We've done a lot of text so far, let's try some media.
  ![Kitty in the grass](${kitty})
  _Image by [Ilona Ilyés](https://pixabay.com/users/ilyessuti-3558510/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2948404) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2948404)._`,
      dangerouslySetInnerHTML: {
        __html: ''
      }
    };

    this.enterMarkdown = this.enterMarkdown.bind(this);
  }

  componentDidMount() {
    this.setState({
      dangerouslySetInnerHTML: {
        __html: DOMPurify.sanitize( marked( this.state.value ) )
      }
    });
  }

  enterMarkdown( value ) {
    this.setState({
      value: value,
      dangerouslySetInnerHTML: {
        __html: DOMPurify.sanitize( marked( `${value}` ) )
      }
    });
  }

  render() {
    const convertMarkdown = this.state.dangerouslySetInnerHTML;
    return(
      <div className='lg:container lg:mx-auto text-center'>
        <header className='py-4'>
          <h1>Markdown Previewer</h1>
          <p>Enter Github-flavored markdown in the Editor for a live preview in the browser.</p>
        </header>
        <div
          className='columns-2 gap-4'
        >
          <Editor value={this.state.value} onInputChange={this.enterMarkdown} />
          <Previewer dangerouslySetInnerHTML={convertMarkdown} />
        </div>
      </div>
    );
  }

}

export default App;
