import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex]= useState(0);
  const {name, job, image, text} = people[index]

  const checkIndex = (index) => {
    if(index === 0){
      return setIndex(people.length - 1)
    }
    if (index === people.length - 1) {
      return setIndex(0)
    }
  }
  const changeToLeft = (index) => {
    checkIndex(index)
  }

  const changeToRight = (index) => {
    checkIndex(index)
  }

  const randomChange = (index) => {
    const ramdomNumber = Math.floor(Math.random() * people.length)
    if (ramdomNumber === index){
      return setIndex(ramdomNumber - 1)
    }
    setIndex(ramdomNumber) 
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button onClick={() => changeToLeft(index)} className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button onClick={() => changeToRight(index)} className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={() => randomChange()} className='random-btn'>
        Surprise me
      </button>
    </article>
  )
};

export default Review;
