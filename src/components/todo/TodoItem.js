//ul에 들어갈 목록 

import React from 'react'
import {MdDone,MdDelete} from 'react-icons/md';
import './css/TodoItem.css';
import cn from 'classnames';

const TodoItem = ({todo,remove,update}) => {


  const{id,title,done}=todo;
  
  //서버에 삭제 요청 클릭 이벤트 핸들러
  const deleteClickHandler=e=>{
        remove(id);
  };

  //할 일 완료 수정 처리 이벤트 핸들러
  const doneCheckHandler = e => {
    //서버쪽으로 현재 done값의 반대 논리값을 전달하여 수정
        const modTodo={
            ...todo,
            done:!done
        };

    //id, title, done다 TodoTemplate에게 전달
        update(modTodo);
  };

  return (
    <li className='todo-item'>
        <div 
            className={cn('check-circle',{active: done})}
            onClick={doneCheckHandler}
        >  
            {done && <MdDone/>}
        </div>
        <span className={cn('text',{finish: done})}>{title}</span>
        {/* done이 true면 .finish값 붙어서 css적용됨 */}
        <div className='remove' onClick={deleteClickHandler}>
            <MdDelete/>
        </div>
    </li>
  );
};

export default TodoItem