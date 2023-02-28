import React from 'react'
import Cards from '../cards/Cards'
import data from '../../assets/data.json'
import './body.css'

const Body = () => {

    const authors = Object.keys(data)

    return (

        <div className='all-authors'>
            {authors.map((item) => (<Cards key={item} authorName = {item}  allData = {data}/> ))}
        </div>

    )
}

export default Body