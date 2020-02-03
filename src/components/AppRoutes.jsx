import React from "react"
import Home from "./Pages/Home"
import Form from "./Pages/Form"
import Courses from "./Pages/Courses"
import Course from "./Pages/Course"
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Users from './Pages/Users';
const AppRoutes = () => (
    <Router>
    <MainMenu />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cursos/:id" component={Course} />
            <Route path="/cursos" component={Courses} />
            <Route path="/historial:valor" component={History} />
            <Route path="/historial" component={History} />
            <Route path="/usuarios" component={Users} />
            <Route path="/formulario" component={ () => <Form name="Pagina de contacto" />} />
            <Route component={() =>(
            <div className="ed-grid">
                <h1>Error 404</h1>
                <span>Pagina no encontrada</span>
            </div>
            )} />
        </Switch>
    </Router>
)
export default AppRoutes

