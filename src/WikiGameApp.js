import React, { Component } from 'react';
import WikiLink from './WikiLink.js';
import WikiSummary from './WikiSummary.js';
import WikiStack from './WikiStack.js';

export default class WikiGameApp extends Component {
  render() {
    // Properties (data) provided by WikiGameHistory.
    var isComplete = this.props.isComplete;
    var titles = this.props.titles;
    var targetTitle = this.props.targetTitle;
    var currentTitle = this.props.currentTitle;

    // Properties (functions) provided by WikiGameHistory.
    var addTitle = this.props.addTitle;
    var setCurrentTitle = this.props.setCurrentTitle;

    return (
      <div>
        <WikiStack titles={titles} setCurrentTitle={setCurrentTitle}/>
        <WikiSummary title={currentTitle} />
        <WikiLink title={currentTitle} setCurrentTitle={setCurrentTitle} addTitle={addTitle}/>
      </div>
    );
  }
}
