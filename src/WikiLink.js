import React, { Component } from 'react';
import WikiApi from './WikiApi.js';

export default class WikiLink extends Component {
  //Called auto, component is ready to be displayed
  
  constructor(props){
      super(props);
      this.state = {
          links: []
      };
  }
  
  componentDidMount(){
      
    var self = this;
      
    WikiApi.getLinks(this.props.title).then(function(text){
       self.setState({
        links: text   
       }); 
    });
  }
  
  componentDidUpdate(){
    var self = this;
      
    WikiApi.getLinks(this.props.title).then(function(text){
       self.setState({
        links: text   
       }); 
    });
  }
  
  render() {
    var currentTitle = this.props.title;
    
    return (
      <div>
        <ul>
          {this.state.links.map(n => <li key={n} style={{ listStyle: 'none' }} onClick={() => this.props.addTitle(n) }> {n} <hr /></li>) }
        </ul>
      </div>
    );
  }
}