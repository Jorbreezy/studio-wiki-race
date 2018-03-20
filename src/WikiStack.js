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
    
    
    return (
      <div>
        { this.props.titles.map( n => <button key={n} class="btn btn-default" onClick={() => this.props.setCurrentTitle(n) }> {n} </button>) } 
      </div>
    );
  }
}