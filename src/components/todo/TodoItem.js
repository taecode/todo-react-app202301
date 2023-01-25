//ul에 들어갈 목록 

import React from 'react'
import {MdDone,MdDelete} from 'react-icons/md';
import './css/TodoItem.css';
import cn from 'classnames';

const TodoItem = ({todo}) => {


  const{title,done}=todo;
  
  
  return (
    <li className='todo-item'>
        <div className={cn('check-circle',{active: done})}>  
            {done && <MdDone/>}
        </div>
        <span className={cn('text',{finish: done})}>{title}</span>
        {/* done이 true면 .finish값 붙어서 css적용됨 */}
        <div className='remove'>
            <MdDelete/>
        </div>
    </li>
  );
};

export default TodoItem