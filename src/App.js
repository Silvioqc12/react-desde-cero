import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'

const Cursos = [
  {
    "titulo": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "price": "30",
    "profesor": "Beto Quiroga"
  }, {
    "titulo": "Drupal desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-theming-poster_0.png?itok=9bzhElpl",
    "price": "60",
    "profesor": "Beto Quiroga"
  }, {
    "titulo": "Go desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
    "price": "50",
    "profesor": "Alexis Losada"
  }, {
    "titulo": "HTML desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/pwa-poster_1.png?itok=CmNPn3bq",
    "price": "10",
    "profesor": " Alvaro Felipe"
  } 
  , {
    "titulo": "Fundamento de redes",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Redes%20Fundamentos.png",
    "price": "40",
    "profesor": "Alexis Losada"
  } 
  , {
    "titulo": "Android Base de datos",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2019-01/Android%20Bases%20de%20datos.png?itok=3pW_l_7C",
    "price": "50",
    "profesor": "Alvaro Felipe"
  } 
]

const App = () => (
<>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Curso de EDteam</p>
          <p> Tu futuro te esta esperando</p>
          <a href="https://ed.team" className="button">Suscribite</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ed-grid m-grid-3">
    {
      Cursos.map( c => <Curso title={c.titulo} image={c.image} price={c.price} profesor={c.profesor} /> )
    }
    
  </div>
</>
)

export default App;














//Reglas
//1: Toda etiqueta debe cerrarse
//2: Los componentes deben devolver UN solo elemento padre
//3: Apoyarse de los Fragment cuando  necesito devolver 2 elementos
//4: Frangment => <> hijos </>
//5: img siempre se cierra
//6: class => className
//7: for => htmlFor

