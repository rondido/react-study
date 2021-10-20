import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state={date: new Date()};
  }

  //생명주기 메서드
  componentDidMount(){
    this.timerID = setInterval(
      ()=> this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date:new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
export default App;