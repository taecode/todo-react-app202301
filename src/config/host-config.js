//URL 모듈화 

//브라우저가 현재 클라이언트 호스트 이름 얻어오기
const hostname=window.location.hostname;

let backendHost; //백엔드 호스트 이름

if(hostname==='localhost'){  //local테스트 할 경우
    backendHost="http://localhost:8080";
}else if(hostname==='lalala.com'){ //배포하는 경우
    backendHost='http://rururu.com';
}


export const BASE_URL=backendHost;
export const TODO='/api/todos';
export const USER='/api/auth';

