import React, { Component } from 'react';

class StudentList extends Component {
    render() {
        console.log(this.props.studentList)
        let studentListHtml = this.props.studentList.map( student => {
            return <tr key={student.id}><td>{student.github_name}</td></tr>
        });

        return (
            studentListHtml
        );
    }
}

export default StudentList;