import React, { Component } from 'react';
import Results from './Results';
import EqHistory from './EqHistory';
import NumPad from './NumPad';
import Operations from './Operations';
import BackCompute from './BackCompute';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Results />
      	<EqHistory />
      	<NumPad />
      	<Operations />
      	<BackCompute />
      </div>
    );
  }
}
