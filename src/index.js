import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const title = "response.potentiallyMaliciousInput";
const element = (
    <div>
      <h1>Здравствуйте!</h1>
      <h2>Рады вас видеть.</h2>
      <h3>{title}</h3>;
    </div>
  );

// Этот код безопасен:

ReactDOM.render(
    element, 
    document.getElementById('root')
);




  
