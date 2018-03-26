import React, { Component } from 'react';
import WikiApi from './WikiApi.js';

export default class WikiStack extends Component {
  //Called auto, component is ready to be displayed
  
  constructor(props){
      super(props);
  }
  
  render() {
    var currentTitle = this.props.title;
    // { this.state.links.map(n => titles={this.props.titles(n)} {n}) }
    
        // {this.state.links.map(n => <li key={n} style={{ listStyle: 'none' }} onClick={() => this.props.addTitle(n) }> {n} <hr /></li>) }
        // { this.props.titles.map(n => <button onClick={this.props.setCurrentTitle(n)}> {n} </button>) }
    
    var btnC = "btn btn-info";
    
    if(this.props.isComplete == true){
      btnC = "btn btn-success";
    } 
    
    return (
      <div>
        { this.props.titles.map( n => <button key={n} class={btnC} onClick={() => this.props.setCurrentTitle(n) }> {n} </button>) }
        <button class="btn btn-primary">{ this.props.targetTitle } </button>
      </div>
    );
  }
}