import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyAwesomeComponent } from '../src';

const App = () => {
  return <MyAwesomeComponent />;
};

ReactDOM.render(<App />, document.getElementById('root'));
