import React, { useState } from 'react';
import { Container, Input,Form,RefBun ,Pcon,SImg,MypageDiv } from '../style';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { avatarinfo, nicknameinfo } from '../redux/modules/userSlice';
import axios from 'axios';

const Title=styled.div`
font-size: 30px;
`
function Mypage() {
    const userinfo=useSelector(state=>state.user)
    const [editing, setEditing]=useState(false);
    const [editNickname, setEditNickname]=useState(userinfo.nickname);
    const [editAvatar, setEditAvatar]=useState(userinfo.avatar);
    const [selectedFile, setSelectedFile] = useState(null);
    const [userinfo1, setUserinfo1] = useState(null);
    const token = localStorage.getItem('accessToken');
    const dispatch = useDispatch();
      const editMyProfile =()=>
      {
        localStorage.getItem('nickname');
        localStorage.getItem('아바타');
        localStorage.getItem('id');
        setEditing(true);
      } 
    const cancelEditMyProfile =()=>{
      setEditing(false);
    }
async function completEeditMyProfile(e){
  e.preventDefault();
  const formData = new FormData();

  formData.append('avatar', selectedFile);
  formData.append('nickname', editNickname);
  const response = await axios.patch('https://moneyfulpublicpolicy.co.kr/profile', formData, {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    }
  });
console.log('수정하기직전',selectedFile)
  if(response.status === 200&&response.data.avatar!==undefined){
    console.log('닉네임 아바타 수정');
    setUserinfo1({nickname:response.data.nickname,avatar: editAvatar})
    localStorage.setItem('nickname',response.data.nickname);
    localStorage.setItem('아바타',userinfo.avatar);
    dispatch(nicknameinfo(response.data.nickname));
    dispatch(avatarinfo(response.data.avatar));

    setEditing(false);
  }else if(response.data.avatar==undefined){
    console.log('닉네임만 수정');
  await setUserinfo1({nickname:response.data.nickname,avatar: response.data.avatar})
  localStorage.setItem('nickname',response.data.nickname);
  localStorage.setItem('아바타',editAvatar);
  dispatch(nicknameinfo(response.data.nickname));
  dispatch(avatarinfo(userinfo.avatar));
  setEditing(false);}
  else{
    alert('실패');
  
  }
}

    

  return (
    <Container  he={'1000px'}>
    <Form onSubmit={(e)=>{
      e.preventDefault();

    }} style={{marginTop: "30px",
                    textAlign:"center"}}>
    <Title>
    <Pcon style={{
      margin:"auto auto 30px auto",
    }}>마이 페이지</Pcon>
    </Title>
  
{editing==false?
    (<> 
    <div><SImg style={{width:''}} src={userinfo.avatar} alt="" /></div> 
    <MypageDiv>나의 아이디: {userinfo.id}</MypageDiv>
    <MypageDiv>나의 닉네임: {editNickname}</MypageDiv>
    <RefBun bg={'#005e74;'} onClick={editMyProfile}>수정</RefBun>
    </>)
    :(<>
    <div><SImg style={{width:''}} src={userinfo.avatar} alt="" /></div> 
    
    <input type="file" onChange={(e)=>{setSelectedFile(e.target.files[0])}} />
    <MypageDiv>나의 아이디: {userinfo.id}</MypageDiv>
    <Input style={{height:"40px",width:"300px", fontSize:'30px'}} value={editNickname} onChange={(e)=>{setEditNickname(e.target.value)}}/>
    <RefBun bg={'#005e74;'} onClick={cancelEditMyProfile}>취소</RefBun>
    <RefBun bg={'#ff79b0;'} onClick={completEeditMyProfile}>완료</RefBun>
    </>)
}
 
    </Form>
    </Container>
  )

}
export default Mypage