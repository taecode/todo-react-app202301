import React from 'react'
import {AppBar, Toolbar, Grid, Typography, Button} from "@mui/material";
import { Link } from 'react-router-dom';
import './Header.css';

import { isLogin,getUsername } from '../util/login-util';


const Header = () => {


  const logoutHandler=e=>{
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('LOGIN_USERNAME');
    window.location.href='/login';

  }  


  return (
    <AppBar position="fixed" style={{
        background:'#38d9a9'
    }}>
        <Toolbar>
            <Grid justify="space-between" container>
                <Grid item flex={9}>
                    <div style={
                        {
                            display:'flex',
                            alignItems: 'center'
                        }
                    }>
                        <Typography variant="h6">
                            {isLogin() ? `${getUsername()}님`:'오늘'}의 할일
                            {/* 로그인 성공이면 이름 아니면 '오늘' 출력 */}
                        </Typography>
                        
                    </div>
                </Grid>
                <Grid item>
                <div className="btn-group">
                        {isLogin() 
                            ?(
                                <button className="logout-btn" onClick={logoutHandler}>로그아웃</button>
                            )
                            :(
                                <>
                                    <Link to='/login'>로그인</Link>
                                    <Link to='/join'>회원가입</Link>
                                </>
                            )
                        }
                    </div>

                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  );
};

export default Header;