import React, { useState, useEffect } from "react"
import axios from "axios"
import useCourse from "../CustomHooks/useCourse"



const Course = ({ match }) => {
    
    
    const [comment, setComment] = useState("Sin comentarios")
    const course = useCourse(match.params.id)


    const myComment = e => {
        setComment(e.target.value)
    }

    return (
        course ? (
            <div className="ed-grid m-grid-3">
                <div className="ed-grid">
                    <div className="l-block">
                        <h1 className="m-cols-3">{course.titulo} </h1>
                        <img className="m-cols-1" src={course.image} alt={course.titulo} />
                        <p className="m-cols-2"> Profesor: {course.profesor} </p>
                    </div>
                    <div>
                        <h2>Escribe tu comentario</h2>
                        <input type="text" placeholder="Escribe..." onChange={myComment.bind(this)}/>
                        <p>{comment}</p>
                    </div>
                </div>
            </div>
        ): 
        <div className="ed-grid">
            <h1>El curso no existe</h1>
        </div>
    )

/* segunda forma 
        <div className="ed-grid m-grid-3">
            {
                cursoActual ? (
                    <>
                    <h1 className="m-cols-3">{cursoActual.titulo} </h1>
                    <img className="m-cols-1" src={cursoActual.image} alt={cursoActual.titulo} />
                    <p className="m-cols-2"> Profesor: {cursoActual.profesor} </p>
                    </>
                ) : 
                    <h1>El curso no existe</h1>
                }
        </div>     
*/

}
export default Course

