import React, { useState } from 'react'
import { Container, Form, Input, FormDiv, Button, StyledH1 } from '../style'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import uuid4 from 'uuid4';


function Login() {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const loginUser = async () => {
        try {
            const response = await axios.post('https://moneyfulpublicpolicy.co.kr/login', {
                id: id,
                password: password,
            });
            if (response.status === 200) {
                console.log('토큰값', response.data.accessToken);
                console.log('아이디값', response.data.userId);
                //로컬스토리지에 토큰값 저장 
                localStorage.setItem('accessToken', response.data.accessToken);
            } else {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }
    

 
    const registerUser = async () => {
        try {
            const response = await axios.post('https://moneyfulpublicpolicy.co.kr/register', {
                id: id,
                password: password,
                nickname: nickname,

            });
            console.log(response);
            if (response.status === 201) {
                alert(response.data.message);
                navigate("/");
            } else {
                console.log('회원가입 실패');
            }

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <Container he={'1000px'}>

            <Form onSubmit={function (e) {
                e.preventDefault();
            }}
                style={{ marginTop: "100px", }}>
                <FormDiv><StyledH1>로그인?회원가입</StyledH1></FormDiv>
                <FormDiv>
                    <Input type="text" value={id} onChange={(e) => { setId(e.target.value) }} placeholder='아이디 4~10글자' />
                </FormDiv>
                <FormDiv>
                    <Input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='비밀번호 4~15글자 ' />
                </FormDiv>
                <FormDiv>
                    <Input type="text" value={nickname} onChange={(e) => { setNickname(e.target.value) }} placeholder='닉네임 1~10글자 ' />
                </FormDiv>

                <Button onClick={loginUser} >로그인</Button>
                <Button style={{ marginLeft: '20px' }} onClick={registerUser}>회원가입</Button>
            </Form>
        </Container>
    )
}

export default Login
