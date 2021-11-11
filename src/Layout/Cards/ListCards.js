import React from 'react'
import CardListItem from './CardListItem'

export default function ListCards({cards=[]}) {
    const listItems = cards.map((card) => <CardListItem card={card}/>)

    return (
        <div>
            <div>
                <h2>Cards</h2>
            </div>
        <ul className="list-unstyled">
            {listItems}
        </ul>
        </div>
    )
}
