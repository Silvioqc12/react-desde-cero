import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'



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

