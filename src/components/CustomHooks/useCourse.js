import { useState, useEffect } from "react"
import axios from "axios"

const useCourse = id => {

const [course, setCourese] = useState({})

useEffect(() => {
    axios.get(`http://my-json-server.typicode.com/silvioqc12/json-db/cursos/${id}`)
    .then(resp => setCourese(resp.data))
    }, [])

    return course

}
export default useCourse
