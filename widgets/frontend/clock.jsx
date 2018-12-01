import React from "react";

class Clock extends React.Component {
  
  constructor(){
    super();
    let time = new Date();
    this.tick = this.tick.bind(this);
    this.state = {time};
  }
  
  componentDidMount() {
    setInterval(this.tick, 1000);
  }
  
  tick() {
    this.setState({ time: new Date() });
  }
  
  render() {
    return (
      <div className="clock"> 
        <h1>Time: { this.state.time.toLocaleTimeString('en-US') }</h1> 
        <h1>Date: { this.state.time.toDateString() }</h1>
      </div>
    );
  } 
  
}

export default Clock;