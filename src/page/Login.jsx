import React, { useState } from 'react'
import { Container, Form, Input, FormDiv, Button, StyledH1 } from '../style'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import uuid4 from 'uuid4';
import { useDispatch,useSelector} from 'react-redux';
import { idinfo,nicknameinfo,avatarinfo} from '../redux/modules/userSlice';

function Login() {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(false);
    const toggleForm=()=>{
        setIsRegister(!isRegister)
    }
    const dispatch = useDispatch();

    const loginUser = async () => {
        try {
            const response = await axios.post('https://moneyfulpublicpolicy.co.kr/login', {
                id: id,
                password: password,
            });
            if (response.status === 200) {
                console.log('토큰값', response.data.accessToken);
                console.log('아이디값', response.data.userId);
                console.log('닉네임', response.data.nickname);
                console.log('아바타', response.data.avatar);
                //로컬스토리지에 토큰값 저장 
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('nickname', response.data.nickname);
                localStorage.setItem('아바타', response.data.avatar);
                console.log('리스폰',response.data);
                dispatch(idinfo(response.data.userId))
                dispatch(nicknameinfo(response.data.nickname))
                dispatch(avatarinfo(response.data.avatar))

                alert('로그인 성공!')
                navigate("/");
            } else {
                alert(response.data.message);
                console.log('로그인 실패');
                navigate("/");
            }
        } catch (error) {
            alert(error.response.data.message);
            
        }
    }
    

 
    const registerUser = async () => {
        try {
            const response = await axios.post('https://moneyfulpublicpolicy.co.kr/register1', {
                id: id,
                password: password,
                nickname: nickname,
            });
            console.log(response);
            if (response.status === 201) {
                alert(response.data.message);
                await loginUser()
                navigate("/");
            } else {
                console.log('회원가입 실패');
            }

        } catch (error) {
            console.log(error);
            alert('에러임')
        }
    }
    return (
        <Container he={'1000px'}>

            <Form onSubmit={function (e) {
                e.preventDefault();
            }}
                style={{ marginTop: "100px", }}>
                <FormDiv><StyledH1>{isRegister?'회원가입':'로그인'}</StyledH1></FormDiv>
                <FormDiv>
                    <Input type="text" value={id} onChange={(e) => { setId(e.target.value) }} placeholder='아이디 4~10글자' />
                </FormDiv>
                <FormDiv>
                    <Input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='비밀번호 4~15글자 ' />
                </FormDiv>
                {isRegister &&(
                    <FormDiv>
                    <Input type="text" value={nickname} onChange={(e) => { setNickname(e.target.value) }} placeholder='닉네임 1~10글자 ' />
                    </FormDiv>)
                }
                

                <Button onClick={isRegister? registerUser:loginUser} >{isRegister?'회원가입':'로그인'}</Button>
                <Button style={{ marginLeft: '20px' }} onClick={toggleForm}>{isRegister?'로그인 폼으로':'회원가입 폼으로'}</Button>
            </Form>
        </Container>
    )
}

export default Login
