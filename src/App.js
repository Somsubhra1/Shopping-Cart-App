import React, { Component } from 'react';
import CourseSales from './CourseSales';
import './App.css';

class App extends Component {
  render() {

    var courses = [
      { name: 'iOS course', price: 199,},
      { name: 'Android course', price: 299,},
      { name: 'Frontend Dev course', price: 180,},
      { name: 'Backend Dev course', price: 190,}
    ];

    return (
      <div className="App text-center">
        <CourseSales items={courses} />

      </div>
    );
  }
}

export default App;
