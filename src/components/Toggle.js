import React from "react";
import ReactDOM from "react-dom";

class ToggleContent extends React.Component {
  constructor() {
    super();

    this.state = { hidden: true };

    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent() {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  }

  render() {
    const { hidden } = this.state;
    const { children } = this.props;
    return (
      <div>
        <button onClick={this.toggleContent}>Toggle</button>
        <div>{!hidden && children}</div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <ToggleContent>Hello World</ToggleContent>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default ToggleContent;