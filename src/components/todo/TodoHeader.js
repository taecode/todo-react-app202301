import React from 'react'
import './css/TodoHeader.css';

const TodoHeader = () => {
  return (
    <header>
        <h1> 2023년 1월 25일 </h1>
        <h2 className='day'>수요일 </h2>
        <div className='tasks-left'>할 일 2개 남음</div> 
        {/* div는 무조건 className,id */}
    </header>
  );
};

export default TodoHeader