import React,{Component} from "react"

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            mail: "",
            date: new Date()
        }
        this.changeName = this.changeName.bind(this)
        this.changeMail = this.changeMail.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    changeMail(e) {
        this.setState({
            mail: e.target.value
        })
    }
    changeDate() {
        this.setState({
            date: new Date()
        })
    }

    //this.setStates({})
    render() {

        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name} </h1>
                <h4> Fecha Actual: {Math.ceil(this.state.fecha/1000)} </h4>
                <form id="element">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre completo</label>
                            <input 
                            type="text" onChange={this.changeName} 
                            />
                        </div>
                        <div className="form__item">
                            <label>Correo electronico</label>
                            <input type="email" onChange={this.changeMail} 
                            />
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo es: ${this.state.mail}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let element = document.getElementById("element")
        console.log(element)
        this.intervaloFecha = setInterval(() => {
            this.changeDate()
            console.log(new Date())
        },1000)
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log(prevState)
    }
    componentWillMount() {
        clearInterval(this.intervaloFecha)
    }

}

export default Form