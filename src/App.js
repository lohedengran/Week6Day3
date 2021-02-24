import React from "react";
import "./App.css";
function App() {
  const name = "Lo's Website";
  const greeting = "Welcome to ";

  const today = new Date().toLocaleDateString();
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {greeting} {name}!
        </h1>
      </header>
      <p>Today is {today}</p>
      <Article title="I'm learning React" intro="Lorem ipsum..  ." />
      <Article title="It's going well">
        <ClickCounter />
        <StopWatch />
        <p>Test of props.children</p>
        <p>Another test</p>
      </Article>
      <Article title="And is quite fun" />
    </div>
  );
}

// function Article(props) {
//   return (
//     <div className="Article">
//       <h2>{props.title}</h2>
//       <p>{props.date}</p>
//       <p>{props.intro}</p>
//       <div className="ArticleChildren">
//         {props.children}
//       </div>
//     </div>
//   );
// }

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
    };
  }

  render() {
    const titleClicked = () => {
      this.setState({
        showContent: !this.state.showContent,
      });
    };

    let childrenElement = null;
    if (this.state.showContent) {
      childrenElement = (
        <div className="ArticleChildren">{this.props.children}</div>
      );
    }
    return (
      <div className="Article">
        <h2 onClick={titleClicked}>{this.props.title}</h2>
        <p>{this.props.date}</p>
        {/* <p>{this.props.intro}</p> */}
        <div className="ArticleChildren">{this.props.children}</div>
        {childrenElement}
      </div>
    );
  }
}

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mountTime: new Date().getTime(),
      currentTime: new Date().getTime(),
    };
  }

  componentDidMount() {
    this.intervalHandle = setInterval(() => {
      this.setState({
        currentTime: new Date().getTime(),
      });
    });
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  render() {
    const seconds = (this.state.currentTime - this.state.mountTime) / 1000;
    return <p>I've been mounted for {seconds.toFixed(1)} seconds.</p>
  }
}

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    const clickHandler = () => {
      console.log("Button Clicked");
      this.setState({
        counter: this.state.counter + 1,
      });
    };

    console.log("Rendering...");
    return (
      <div>
        <button onClick={clickHandler}>Click me!</button>
        <p> You have clicked {this.state.counter} times.</p>
      </div>
    );
  }
}

export default App;
