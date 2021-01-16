import React from 'react'
import './Cards.css'

function Cards({ cardset }) {
    const renderCardsets = (cardset) => {
        const wrappedCardsets = []
        for (const cardrow of cardset) {
            wrappedCardsets.push(<ul className="cards__items">{cardrow}</ul>)
        }
        return wrappedCardsets
    }

    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    {renderCardsets(cardset)}
                </div>
            </div>
        </div>
    )
}

export default Cards
