import React, { useState,  } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { useParams ,Link} from 'react-router-dom';
import { Container,  } from '../App'
import ContentBox from './ContentBox';
import { ULB,LIB,ListDiv,Pcon,RefBun,TextArea,ConBoxTitle} from '../App'
// import { Context1 } from '../App';
import {  updateList,   } from "../store";


function Detail() {
  const { id } = useParams();
  const appState= useSelector((state)=>state.app);
  const dispatch = useDispatch();
  const selectedItem = appState.list.find((item) => item.id === id);

  const [editing, setEditing]=useState(false);
  const [editedContent, setEditedContent] = useState(selectedItem?selectedItem.content:'');

  if (!selectedItem) {
    // 지정된 id값 없는거나오면
    return (
      
    <>
    <Link to='/'><RefBun bg={'green'}>되돌아가기</RefBun></Link>
    <h1 style={{
    color:"white",
    fontSize:"50px",
   }}> 몰?루? 는 페이지임 돌아가죠 ??</h1>
    <img style={{width :"30%",}}
    src='https://i.namu.wiki/i/dE4-V5zTsBBRqHJcjBc_H-uPBBJ8bKa23ecQ-L_uhelHzA6MADc4KrmmYgqPaSfIPiLWO2rm3Zu5qu_OCsEEqy7YRA_2W0yAYEhikRQAiAzlYR5bXPzbafHFimy7W2V8-FBHGjgKJWgL9hvc0TNlTw.webp'></img>
    </>)
}



  const deleteDetail =()=>{
    const showId = window.confirm('진짜삭제할거에요?');
    
    if(showId){
      const updatedList  = appState.list.filter(item => item.id !== id);
      dispatch(updateList(updatedList));
    }
    window.location.href='/';
  };

  const editDetail=()=>{
    setEditing(true);
  }
  const saveEdit=()=>{
    if(editedContent === selectedItem.content){
      alert('변경된게 없네요?')
      
    }
    const updatedList = appState.list.map(item=> item.id===id?{
      ...item,content:editedContent}:item);
      dispatch(updateList(updatedList));
      setEditing(false);
  }
  const canceEdit= ()=>{
    setEditedContent(selectedItem.content);
    setEditing(false);
  }

  return (
    <Container he={'1000px'}>  
      <ConBoxTitle  wd={'85%'} hg={'5%'} pd={'30px 10px'}>{selectedItem.label} 방명록 상세보기</ConBoxTitle>
      <ListDiv wd={'80%'}>
      <ULB wd={'80%'} he={'100%'} >
        <LIB style={{
        width: "100%",
      }} >
          <section style={{ display: 'flex' }}>
            <figure style={{
              marginRight: "20px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}>
              <img src={selectedItem.avatar?
              (selectedItem.avatar):("https://w7.pngwing.com/pngs/710/71/png-transparent-profle-person-profile-user-circle-icons-icon-thumbnail.png")}
                alt="프로필이미지" style={{
                  width: "100%",
                  height: "100%%",
                  objectFit: "cover",
                  borderRadius: "50",
                  border: "1px solid black",
                  borderRadius:"30px",
                  textAlign:"center",
                }} />
            </figure>
            <div>
              <span style={{
                textdecoration: "none",
                color: "white",
              }}>{selectedItem.name}</span>
              <time></time>
            </div>
          </section>
          {editing==true?(
            <Pcon>
          <TextArea
          value={editedContent}
          onChange={(e)=>{setEditedContent(e.target.value)}}
          /></Pcon>)
          : (<Pcon>{selectedItem.content}</Pcon>
          )}
         
          <div style={{display:"none"}}>
          <ContentBox list={appState.list}/>
          </div>
          <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
          }}>
              <RefBun bg={'#ff79b0'} onClick={deleteDetail}>삭제</RefBun>
              {editing==true?(
              <>
                <RefBun bg={'#005e74;'} onClick={saveEdit}>수정</RefBun>
                <RefBun bg={'gray'} onClick={canceEdit}>취소</RefBun>
              </>): <RefBun bg={'#005e74;'} onClick={editDetail}>수정</RefBun>
              }
          
          </div>
          <Link to='/'><RefBun bg={'#327e6f'}>되돌아가기</RefBun></Link>
        </LIB>
      </ULB>
     

  </ListDiv>
    </Container>
  );
}
export default Detail