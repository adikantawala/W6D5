import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Tabs from "./tabs";

let stuff = [{title: "kittens", content: "love me some kittens"}, {title: 'puppies', content: "Puppies are cute and all but they smell"}, {title: 'death', content: "death metal helps my migranes"}];

const Root = () => {
  return (<div className="test">
    <Clock />
    <Tabs tabs={stuff}/>
  </div>);
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});


