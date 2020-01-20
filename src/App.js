import React from 'react';
import "./styles/styles.scss"
import Curso from "./Curso"
import Banner from "./Banner"
import Formulario from "./Formulario"


const App = () => (
<>
  <Banner />
  <Formulario name="EDteam" />
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

