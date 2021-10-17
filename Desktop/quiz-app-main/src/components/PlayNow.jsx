import '../styles/components/PlayNow.css';
import React from 'react';
import QuizCard from './QuizCard';
const quizes = [
  {
    id: 2,
    title: 'komal',
    time: '4 pm',
  },
  {
    id: 3,
    title: 'koaml Mahto',
    time: '3 pm',
  },
  {
    id: 4,
    title: 'komal',
    time: '2 pm',
  },
  {
    id: 4,
    title: 'komal',
    time: '2 pm',
  },
];

function PlayNow() {
  return (
    <div className='games__cards'>
      {quizes.map((item, idx) => {
        return (
          <QuizCard
            id={item._id}
            title={item.title}
            price={25}
            dateAndTime={item.time}
            key={idx}
          />
        );
      })}
    </div>
  );
}

export default PlayNow;
