import React from "react";

class Tabs extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { index: 0 };
    console.log(this.props.tabs);
  }
  
  getTitles(){
    
  }

  render() {
    const tabNames = this.props.tabs.map((el, idx) => {
      return <h1 key={`tab-${idx}`}>{el.title}</h1>;
    });
    const content = this.props.tabs.map((el, idx) => {
      return <p key={`tab-${idx}`}>{el.content}</p>;
    });
    
    
    return (
      <div className="tabs"> 
        <ul> 
          {tabNames}
          <article> 
            {content}
          </article>
        </ul>
      </div>
    );
  } 
  
}

export default Tabs;