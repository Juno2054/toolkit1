import React, { useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Container, Textarea } from '../App'
import ContentBox from './ContentBox';
import { Link } from 'react-router-dom';
import { ULB,LIB,ListDiv,Pcon,RefBun,TextArea} from '../App'
function Detail({ list,setList }) {
  const { id } = useParams();
  const selectedItem = list.find(item => item.id == id);

  const [editing, setEditing]=useState(false);
  const [editedContent, setEditedContent] = useState(selectedItem.content);

  if (!selectedItem) {
    // 지정된 id를 가진 항목이 찾아지지 않은 경우 처리
    return <p>아이템을 찾을 수 없습니다!</p>;
}



  const deleteDetail =()=>{
    const showId = window.confirm('진짜삭제할거에요?');
    if(showId){
      const updataList =  list.filter(item => item.id !== id);
      setList(updataList);
    }
  };

  const editDetail=()=>{
    setEditing(true);
  }
  const saveEdit=()=>{
    const updataList= list.map(item=> item.id===id?{
      ...item,content:editedContent}:item);
      setList(updataList);
      setEditing(false);
  }
  const canceEdit= ()=>{
    setEditedContent(selectedItem.content);
    setEditing(false);
  }

  return (
    <Container>  
      <Pcon>{selectedItem.label}</Pcon>
      <ListDiv>
      <ULB >
        <LIB >
          <section style={{ display: 'flex' }}>
            <figure style={{
              marginRight: "20px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}>
              <img src="https://w7.pngwing.com/pngs/710/71/png-transparent-profle-person-profile-user-circle-icons-icon-thumbnail.png"
                alt="프로필이미지" style={{
                  width: "100%",
                  height: "100%%",
                  objectFit: "cover",
                  borderRadius: "50"
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
          <ContentBox list={list}/>
          </div>
          <div>
              <RefBun bg={'red'} onClick={deleteDetail}>삭제</RefBun>
              {editing==true?(
              <>
                <RefBun bg={'blue'} onClick={saveEdit}>수정</RefBun>
                <RefBun bg={'gray'} onClick={canceEdit}>취소</RefBun>
              </>): <RefBun bg={'blue'} onClick={editDetail}>수정</RefBun>
              }
          
          </div>
          <Link to='/'><RefBun bg={'green'}>되돌아가기</RefBun></Link>
        </LIB>
      </ULB>
     

  </ListDiv>
    </Container>
  );
}
export default Detail