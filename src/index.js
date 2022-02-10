import React from 'react';
import ReactDOM from 'react-dom';

let head = "Welcome to the React";
let para = "Assalamu Alaykum, Yes, Successfully run my first react app";




ReactDOM.render(
  
  <div>
  <h1 style={{ color: 'white', background: 'teal', textAlign: 'center', padding: '15px' }}>{ head }</h1>,
    <p className="paraStyle">{para}</p>
    
    <div className='card'>
      <h2 className="title">This is my Card</h2>
      <p className="card-body">JSX (JavaScript Syntax Extension and occasionally referred as JavaScript XML) is a React extension to the JavaScript language syntax which provides a way to structure .</p>
      <footer className='card-footer'>&copy;Adm Khayrul Bashar</footer>
    </div>
  </div>,
  
  
  
  
  
  document.getElementById('root')
  );
  
  