import React from "react"

const Banner = () => (
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
)

export default Banner