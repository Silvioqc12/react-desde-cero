import React, { Component } from "react"
import Axios from "axios"
import CourseGrid from "../Organisms/CourseGrid"

class Courses extends Component {

    constructor(props) {
        super(props)

        this.state = {
            courses: []
        }

    }
    componentDidMount (){
        Axios.get('http://my-json-server.typicode.com/silvioqc12/json-db/cursos')
        .then(resp => {
            this.setState({
                courses: resp.data
            })
        })
    }

    render(){
        const { courses } = this.state
        return (
            <CourseGrid courses= {courses} />
        )
    }
}

export default Courses