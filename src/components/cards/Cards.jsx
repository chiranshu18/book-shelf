import React from 'react'
import './cards.css'
import Card from '../card/Card'

const Cards = ({authorName, allData}) => {

  // console.log(authorName)
  // console.log(allData[authorName]);

  const bookData = allData[authorName]
  // console.log(bookData)

  return (

    <div className='author'>
        <div className='author-name'>
            <h3>{authorName}</h3>
        </div>

        <div className='all-cards'>
          { bookData.map( (item) => (<Card cardData={item}/>) ) }
        </div>
    </div>
  )
}

export default Cards