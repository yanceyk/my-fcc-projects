import "./custom.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";


const quoteColors = [
  '--body-bg-blue',
  '--body-bg-indigo',
  '--body-bg-purple',
  '--body-bg-pink',
  '--body-bg-red',
  '--body-bg-orange',
  '--body-bg-yellow',
  '--body-bg-green',
  '--body-bg-teal',
  '--body-bg-cyan',
];

const quotes = [
  {
    quote: 'Therefore let us draw near with confidence to the throne of grace, so that we may receive mercy and find grace to help in time of need.',
    author: 'Hebrews 4:16',
  },
  {
    quote: 'Behold, the eye of the Lord is on those who fear him, on those who hope in his steadfast love.',
    author: 'Psalm 33:18',
  },
  {
    quote: 'May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.',
    author: 'Romans 15:13',
  },
  {
    quote: 'If in Christ we have hope in this life only, we are of all people most to be pitied.',
    author: '1 Corinthians 15:19',
  },
  {
    quote: 'Now faith is the assurance of things hoped for, the conviction of things not seen.',
    author: 'Hebrews 11:1',
  },
  {
    quote: 'Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead.',
    author: '1 Peter 1:3',
  },
  {
    quote: 'It does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.',
    author: '1 Corinthians 13:6-7',
  },
  {
    quote: 'The prospect of the righteous is joy, but the hopes of the wicked come to nothing.',
    author: 'Proverbs 10:28',
  },
  {
    quote: 'Come to me, all who labor and are heavy laden, and I will give you rest.',
    author: 'Matthew 11:28',
  },
  {
    quote: 'So now faith, hope, and love abide, these three; but the greatest of these is love.',
    author: '1 Corinthians 13:13',
  },
  {
    quote: 'Hope deferred makes the heart sick, but a desire fulfilled is a tree of life.',
    author: 'Proverbs 13:12',
  },
  {
    quote: 'And hope does not put us to shame, because God\'s love has been poured into our hearts through the Holy Spirit who has been given to us.',
    author: 'Romans 5:5',
  },
  {
    quote: 'But in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect.',
    author: '1 Peter 3:15',
  },
  {
    quote: 'In all toil there is profit, but mere talk tends only to poverty.',
    author: 'Proverbs 14:23'
  },
  {
    quote: 'What then shall we say to these things? If God is for us, who can be against us?',
    author: 'Romans 8:31'
  },
];


class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      quote: '',
      author: '',
      color: '',
      borderColor: 'unset'
    };

    this.newQuote = this.newQuote.bind(this);
    
  }

  componentDidMount() {
    let randomQuote = this.randomIndex( quotes );
    let randomColor = this.randomIndex( quoteColors );

    let root = document.getElementById( 'root' );
    let body = document.body;
    
    let color = 'var('+randomColor+')';
    
    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author,
      borderColor: color,
      color: color
    });

    root.style.setProperty( 'background-color', color );
    body.style.setProperty( 'background-color', color );   
  }

  newQuote() {
    let newRandomQuote = this.randomIndex( quotes );
    let randomColor = this.randomIndex( quoteColors );
    let color = 'var('+randomColor+')';

    let root = document.getElementById( 'root' );
    let body = document.body;

    root.style.setProperty( 'background-color', color );
    body.style.setProperty( 'background-color', color );
    
    this.setState({
      quote: newRandomQuote.quote,
      author: newRandomQuote.author,
      borderColor: color,
      color: color
    });

  }

  randomIndex( arr ) {
    return arr[ Math.floor( Math.random() * arr.length ) ];
  }

  render() {

    const quoteStyle = {
      color: this.state.color
    };

    const buttonStyle = {
      backgroundColor: this.state.color,
      borderColor: this.state.color
    };
    
    return (
      <div
        className="container-sm d-flex flex-column justify-content-between flex-wrap p-4"
        id="quote-box"
        style={quoteStyle}
      >
        <p id="text" className="align-self-center fs-2 text-center">
          "{this.state.quote}"
        </p>
        <p id="author" className="align-self-end">
          - {this.state.author}
        </p>
        <div className="btn-toolbar justify-content-between">
          <a
            className="btn btn-primary"
            id="tweet-quote"
            href={"https://www.twitter.com/intent/tweet?text=" + this.state.quote + ' ' + this.state.author }
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            <FontAwesomeIcon icon={ faTwitter } />
          </a>
          <button
            type="button"
            className="btn text-nowrap btn-primary"
            id="new-quote"
            onClick={this.newQuote}
            style={buttonStyle}
          >
            New Quote
          </button>
        </div>
      </div>

    );
  }
  
}

export default App;
