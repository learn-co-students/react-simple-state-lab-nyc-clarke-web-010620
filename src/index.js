import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { pattern1 } from './data.js'
// import Matrix from './Matrix.js'

// ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));
const joshs = [{  Name: "Josh", }, { Name: "Joshina", }, {  Name: "Notjosh", }]

ReactDOM.render(
    <div>
    { joshs.map((person, index) => ( <span key={index}>{person.name}</span>)) }
</div>
    , document.getElementById('root'));
