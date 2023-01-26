import React, { useState } from 'react'
import {Button, Container, Grid, TextField, Typography, Link} from "@mui/material";

const Join = () => {

    //검증 메시지 저장
    const [message,setMessage]=useState('');

    //검증 완료 여부
    const [validate,setValidate]=useState(false);

  //유저 이름 입력란 검증 체인지 이벤트 핸들러
  const nameHandler=e=>{
    //console.log(e.target.value);

    const nameRegex = /^[가-힣]{2,5}$/; //한글 , 2~5자리 정규 표현식

    //검증 시작
    let message;
    if(!e.target.value){ //빈문자열 유저이름 안적은 경우 
        message="유저 이름은 필수값입니다!";
        setValidate(false);
    }else if(!nameRegex.test(e.target.value)){
        message='2~5글자 사이의 한글로만 작성해주세요!';
        setValidate(false);
    }else{
        message='사용가능한 이름입니다.';
        setValidate(true);
    }
    setMessage(message);
  }  

  return (
    <Container component="main" maxWidth="xs" style={{ margin: "300px auto" }}>
            <form noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                            계정 생성
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="fname"
                            name="username"
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="유저 이름"
                            autoFocus
                            onChange={nameHandler}
                        />

                        <span style={
                            validate
                            ?{color:'green'}
                            :{color:'red'}
                        }>{message}</span>
                        
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="이메일 주소"
                            name="email"
                            autoComplete="email"
                            
                        />
                        
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="패스워드"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            
                        />
                        
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            계정 생성
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            이미 계정이 있습니까? 로그인 하세요.
                        </Link>
                    </Grid>
                </Grid>
            </form>
    </Container>
  );
};

export default Join;