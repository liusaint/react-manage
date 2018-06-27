import React, { Component } from 'react';
import Layout from './layouts/layout.js';
import { Button } from 'element-react';

import 'element-theme-default';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout></Layout>
      <Button>element</Button>
      </div>
    );
  }
}

export default App;
