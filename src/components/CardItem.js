import React from 'react'

function CardItem({ src, text, label, path }) {
    return (
        <>
            <li className="cards__item">
                <a className="cards__item__link" target="_blank" href={path} rel="noopener noreferrer">
                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img alt="JNSA Image" src={src} className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{text}</h5>
                    </div>
                </a>
            </li>
        </>
    )
}

export default CardItem
