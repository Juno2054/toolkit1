import React, { useEffect, useState } from "react";
import './App.css';
import './reset.css';
import {    Container,RefBun,Navigation, Button, SImg , } from"./style"
import Detail from "./components/Detail";
import {Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import Login from "./page/Login"
import Home from "./page/Home";
import Mypage from "./page/mypage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";



function App() {

const dispatch=useDispatch();
const navigate= useNavigate();
const accessToken = localStorage.getItem('accessToken');
const [userinfo, setUserinfo] = useState(null);
const [isLogin, setIsLogin] = useState(false);
const token = localStorage.getItem('accessToken');
const username = useSelector(state => state.user.nickname);

const tokenCheck = async () => {
try
{
const response = await axios.get('https://moneyfulpublicpolicy.co.kr/user/', 
{headers: {Authorization: `Bearer ${token}`},
});
if(response.status === 200)
{
   dispatch(setUserinfo(response.data.nickname));  
   setIsLogin(true);
}else{
  Error('로그인');
}
}catch(error){
  if(error.response.status === 401){
   localStorage.removeItem('accessToken');
   localStorage.removeItem('id');
   localStorage.removeItem('nickname');
   localStorage.removeItem('아바타');
   setIsLogin(false);
  }
}
alert('로그인 후 이용해주세요!');
navigate('/login');
} 
const location =useLocation();
  useEffect(()=>{
  if(location.pathname !== '/login'&& !token){
    tokenCheck();
    console.log(userinfo);
  }},[isLogin]);
  const login =()=>{
    setIsLogin(true);
  }
  const logout =()=>{
    localStorage.removeItem('accessToken');
    localStorage.removeItem('id');
    localStorage.removeItem('nickname');
    localStorage.removeItem('아바타');
    setIsLogin(false);
    alert('로그아웃 되었습니다.');
    navigate('/login')
  }
  useEffect(()=>{
    if(token){
      login();
    }else{
      logout();
    }
  },[])

  return (
   
    <Container he={'100%'}>
      {
        accessToken?(
      <Navigation>
            <Link style={{
              textDecoration: "none",
              color: "white",
              marginLeft:"30px",
              fontWeight:"bold",
              fontSize:"30px",
            }} to="/"><h1>Home</h1></Link>
            <div style={{display:'flex',alignItems:"center", justifyContent:'flex-end'}} >
           <SImg style={{width:'20%',height:'25%',maxWidth:'70px',maxHeight:'80px'}} src={localStorage.getItem('아바타')  } alt="메인프로필이미지"/> 
            <Link style={{
              textDecoration: "none",
              color: "white",
              marginRight:"10px",
              marginLeft:"10px",
            }} to="/mypage">
              {username}</Link>
            <Button style={{
              marginLeft:"10px",
            }} onClick={logout}>로그아웃</Button>
            </div>
      </Navigation>):''}
      <Routes>
        {/* 메인페이지 */}
        <Route path="*" element={<>
    <Link to='/'><RefBun bg={'green'}>되돌아가기</RefBun></Link>
    <h1 style={{
    color:"white",
    fontSize:"50px",
   }}> 몰?루? 는 페이지임 돌아가죠 ??</h1>
    <img style={{width :"30%",}}
    src='https://i.namu.wiki/i/dE4-V5zTsBBRqHJcjBc_H-uPBBJ8bKa23ecQ-L_uhelHzA6MADc4KrmmYgqPaSfIPiLWO2rm3Zu5qu_OCsEEqy7YRA_2W0yAYEhikRQAiAzlYR5bXPzbafHFimy7W2V8-FBHGjgKJWgL9hvc0TNlTw.webp'></img>
</> } />
        <Route path="/login" element={<Login/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/"  element={<Home/>} />
        <Route path="/detail/:id" element={<Detail Container={Container} ></Detail>} />
      </Routes>
    </Container>

  );
}

export default App;
