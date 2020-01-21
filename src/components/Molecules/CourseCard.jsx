import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const CourseCard = ({id, title, image, price, professor}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}>
                <img src={image} alt={title}/>
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                {professor}
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="http://ed.team">{`$ ${price} USD`}</a>
            </div>
        </div>
    </article>
)

CourseCard.prototype = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}
CourseCard.defaultProps = {
    title: "no se encontró titulo",
    image: "https://st2.depositphotos.com/3139517/9378/i/950/depositphotos_93782974-stock-photo-hong-kong-city-and-buildings.jpg",
    price: "--",
    profesor: ""
}


export default CourseCard;
