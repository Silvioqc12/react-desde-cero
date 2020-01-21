import React from "react"


const courses = [
    {
        "id":1,
        "titulo": "React desde cero",
        "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desarrollo%20frotend.png",
        "price": 50,
        "profesor": "Beto Quiroga"
    },
    {
        "id":2,
        "titulo": "Drupal desde cero",
        "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
        "price": 40,
        "profesor": "Alexys Lozada"
    },
    {
        "id":3,
        "titulo": "Go desde cero",
        "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
        "price": 20,
        "profesor": "Beto Quiroga"
    },
    {
        "id":4,
        "titulo": "Html desde cero",
        "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
        "price": 10,
        "profesor": "Alvaro Felipe"
    }
]

const Course = ({ match }) => {

    const cursoActual = courses.filter(c => c.id == parseInt(match.params.id))[0]

    return (
        cursoActual ? (
            <div className="ed-grid m-grid-3">
                <h1 className="m-cols-3">{cursoActual.titulo} </h1>
                <img className="m-cols-1" src={cursoActual.image} alt={cursoActual.titulo} />
                <p className="m-cols-2"> Profesor: {cursoActual.profesor} </p>
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

