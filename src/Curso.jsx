import React from 'react';
import PropTypes from 'prop-types'

const Curso = ({title, image, price, profesor}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title}/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                {profesor}
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="http://ed.team">{`$ ${price} USD`}</a>
            </div>
        </div>
    </article>
)

Curso.prototype = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}
Curso.defaultProps = {
    title: "no se encontró titulo",
    image: "https://st2.depositphotos.com/3139517/9378/i/950/depositphotos_93782974-stock-photo-hong-kong-city-and-buildings.jpg",
    price: "--",
    profesor: ""
}


export default Curso;
