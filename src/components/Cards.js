import React from 'react'
import './Cards.css'

function Cards({ cardset }) {
    const renderCardsets = (cardset) => {
        const wrappedCardsets = []
        for (let i = 0; i < cardset.length; i++) {
            let cardrow = cardset[i]
            wrappedCardsets.push(<ul className="cards__items" key={i}>{cardrow}</ul>)
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
