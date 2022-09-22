import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

const App = () => {
  return <div className='header'>
    <div className='header-inner'>
      <div>
        <h1>This is Breact</h1>
        <p>Blossom's custom react app</p>
      </div>
    </div>
  </div>
}

ReactDOM.render(<App />, document.getElementById('app'))