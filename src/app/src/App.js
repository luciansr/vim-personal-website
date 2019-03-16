import React, { Component } from 'react';
import Page from './organisms/Page/Page';
import CommandLine from './molecules/CommandLine/CommandLine';
import StatusBar from './molecules/StatusBar/StatusBar';

class App extends Component {

  onChange (newValue) {
    console.log('change',newValue);
  }

  render() {
    return (

      <div className="App"> 
        <Page />
        <CommandLine />
        <StatusBar />        
      </div>
    );
  }
}

export default App;
