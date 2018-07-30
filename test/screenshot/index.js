import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import ButtonPage from './button';
// import CardPage from './card';
// import ChipsPage from './chips';
// import FabPage from './fab';
// import FloatingLabelPage from './floating-label';
// import LineRipplePage from './line-ripple';
// import MaterialIconPage from './material-icon';
// import NotchedOutlinePage from './notched-outline';
// import TextFieldPage from './text-field';
// import HelperTextPage from './text-field/helper-text';
// import TextFieldIconPage from './text-field/icon';
// import TopAppBarPage from './top-app-bar';

console.log("YO")

ReactDOM.render((
  <Router>
    <Route path='/' render={() => <App />} />
  </Router>
), document.getElementById('screenshot-app'));


const App = () => (
  <div>
    MEOW
    <a href="button">Button</a>
    <a href='card'>Card</a>
    <a href="chips">Chips</a>
    <a href="fab">Fab</a>
    <a href="floating-label">Floating Label</a>
    <a href="line-ripple">Line Ripple</a>
    <a href="material-icon">Material Icon</a>
    <a href="notched-outline">Notched Outline</a>
    <a href="text-field">Text Field</a>
    <a href="text-field/icon">Text Field Icon</a>
    <a href="text-field/helper-text">Text Field Helper Text</a>
    <a href="top-app-bar">Top App Bar</a>
  </div>
);
