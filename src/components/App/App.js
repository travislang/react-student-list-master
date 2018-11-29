import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';

class App extends Component {
  state = {
    studentList: [],
  };

  getStudents = () => {
      axios.get('/students')
      .then( res => {
          this.setState({
              studentList: res.data
          });
      })
      .catch( err => {

      })
  }
  // This function is called by the StudentForm when the submit button is pressed
  addStudent = (newStudent) => {
    console.log(newStudent);
      axios.post('/students', newStudent)
          .then( res => {
            console.log( 'response from server:', res );
          })
          .catch( err => {
            console.log( err );
          })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br/>
        <StudentForm addStudent={this.addStudent}/>

        <ul>
            <StudentList />
        </ul>
      </div>
    );
  }
}

export default App;
