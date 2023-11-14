import React, { useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Container } from '../App'
import ContentBox from './ContentBox';
import { Link } from 'react-router-dom';
import { ULB,LIB,ListDiv,Pcon} from '../App'
function Detail({ list }) {
  const { id } = useParams();
  const selectedItem = list.find(item => item.id == id);

  if (!selectedItem) {
    // 지정된 id를 가진 항목이 찾아지지 않은 경우 처리
    return <p>아이템을 찾을 수 없습니다!</p>;
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
          <Pcon>{selectedItem.content}</Pcon>
          <div style={{display:"none"}}>
          <ContentBox list={list}/>
          </div>
          <Link to='/'>되돌아가기</Link>
        </LIB>
      </ULB>
     

  </ListDiv>
    </Container>
  );
}
export default Detail