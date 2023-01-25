import React, { useEffect, useState } from 'react'

//css로딩
import './css/TodoTemplate.css';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';

const TodoTemplate = () => {


    const API_BASE_URL='http://localhost:8080/api/todos';
    //할일 api 데이터 
    //서버에서 불러와
    const [todos,setTodos]=useState([]);

    //할 일 등록 서버 요청
    const addTodo=(todo)=>{
        fetch(API_BASE_URL,{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(todo)
        })
        .then(res=>res.json())
        .then(result=>{
            setTodos(result.todos);
        });
    };

    //할 일 삭제 요청 처리
    const deleteTodo=(id)=>{

      fetch(`${API_BASE_URL}/${id}`,{
        method:'DELETE'
      })  
      .then(res=>res.json())
      .then(result=>{
        setTodos(result.todos);
      });
    };

    //할 일 수정 요청 처리
    const updateTodo = todo => {

        fetch(`${API_BASE_URL}/${todo.id}`,{
            method:'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(todo)
        })
        .then(res=>res.json())
        .then(result=>{
            setTodos(result.todos);
        });
    };


    //렌더링 되자마자 할 일 => todos api GET 목록 호출 
    useEffect(()=>{
        fetch(API_BASE_URL)
            .then(res=>res.json())
            .then(result=>{
                console.log(result.todos);
                setTodos(result.todos);
            });
    },[]);


    

  return (
    <div className='todo-template'>

        {/* 헤더,메인 둘다 배열 정보 알아야함 */}
        <TodoHeader todoList={todos}/>  
        <TodoMain todoList={todos} remove={deleteTodo} update={updateTodo}/>
        <TodoInput add={addTodo}/>
        {/* 자식한테 addTodo함수를 보냄  */}

    </div>
  );
};

export default TodoTemplate