import React from 'react'
import MultipleRating from '/static/img/multiple-rating.svg';
import SingleRating from '/static/img/single-rating.svg';

const Rating = () => {

    const ratingCategories = [
        {
            id : 1,
            category : "Not at all",
            ratingNumbers : [0],
        },
        {
            id : 2,
            category : "Mildly",
            ratingNumbers : [1,2,3],
        },
        {
            id : 3,
            category : "Moderately",
            ratingNumbers : [4,5,6],
        },
        {
            id : 4,
            category : "Marketdly",
            ratingNumbers : [7,8,9],
        },
        {
            id : 5,
            category : "Extremely",
            ratingNumbers : [10],
        },        
    ]

  return (
    <div className='number-list d-flex align-items-center'>
        <div className='number-group text-center'>
            <div className='category-name'></div>
            <div className='mob-w'>
                <img src='' />

            </div>

        </div>

    </div>
  )
}

export default Rating