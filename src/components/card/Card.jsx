import React from 'react'
import cover from '../../assets/cover_image.jpeg'
import heartBlack from '../../assets/heart-black.svg'
import './card.css'


const Card = ({cardData}) => {

  return (
    
    <div className='book-card'>
        
        <div className='book-card-img-div'>
            <img className='book-card-img' src={cover} alt={cardData.Name} />
        </div>

        <div className='details'>

            <div className='book-card-description-div'>
                <p className='book-name'> {cardData.Name} </p>
            </div>

            <div className='book-card-engagement'>
                <div className='rating'>
                    {cardData.rating}
                </div>

                <div className='heart-div'>
                    <img className='heart-icon' src={heartBlack} alt="liked" />
                </div>
            </div>

        </div>

        

    </div>
    
  )
}

export default Card