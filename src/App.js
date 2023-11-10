import React, { useContext } from "react";
import './App.css';
import './reset.css';
import uuid4, { v4 } from "uuid4";


import styled from 'styled-components';
import Detail from "./components/Detail";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";


// 
// styled-components 사용 부분
export let Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
let Header = styled.div`
    position: relative;
    background-image: url();
    background-color: green;
    background-size: 25%;
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
`
let H1 = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 50px;
  color: snow;
  min-width: 450px;
`
let ULT = styled.ul`
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    border: 1px solid white;
    border-radius: 10px;
    list-style: none;
    padding: 15px;
    width: 500px;
`
let LIT = styled.li`
     font-size: 20px;
    border: 1px solid black;
    border-radius: 5px;
    width: 100px;
    padding: 5px;
    text-align: center;
    user-select: none;
    cursor: pointer;
    background-color: yellow;
    color: black;
`;
let ULB = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    background-color: black;
    padding: 20px;
    border-radius: 5px;
    margin: 0px auto;
    
`
let LIB = styled.li`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid white;
    border-radius: 5px;
    cursor: pointer;
`;
let Form = styled.form`
   width: 500px;
    background-color: gray;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 20px;
  
`
let FormDiv = styled.div`
    margin-bottom: 10px;
    display: flex;
`
let Label = styled.label`
    width: 100px;
    display: flex;
    align-items: center;
`
let Input = styled.input`
  width: 100%;
    padding: 5px 10px;
`
let Textarea = styled.textarea`
    resize: none;
    height: 80px;
    width: 100%;
    padding: 5px 10px;
`
let Button = styled.button`
  background-color: rgb(0, 0, 0);
    color: rgb(198, 187, 167);
    font-size: 14px;
    padding: 5px 10px;
    cursor: pointer;
    user-select: none;
    background-color: black;
    text-align: right;
    color: white;
`
let ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    background-color: black;
    padding: 20px;
    border-radius: 5px;
    margin: 0px auto;
`
let Pcon = styled.p`
    margin-left: 70px;
    background-color: rgb(37, 33, 33);
    border-radius: 10px;
    padding: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
// 위에는 styled-components

function App() {
  let [name, setName] = useState('');
  let [content, setContent] = useState('');
  let [newName, setNewName] = useState('');
  let [newContent, setNewContent] = useState('');
  let [inputName, setInputName] = useState([]);
  let [inputContent, setInputContent] = useState([]);
  let [list, setList] = useState([])
  let [headerclick1, setHeaderClick1] = useState(true);
  let [headerclick2, setHeaderClick2] = useState(true);
  let [headerclick3, setHeaderClick3] = useState(true);
  let [headerclick4, setHeaderClick4] = useState(true);

  function addlist() {
    let copy1 = [...name];
    let copy2 = [...content];
    let copy3 = [...list]
    copy1.push(inputName)
    copy2.push(inputContent)
    setName(copy1);
    setContent(copy2);
    copy3.push({ name: inputName, content: inputContent })
    setList(copy3);
    console.log(list);
  }
  return (
    <Container>
    
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<>
          <Header>
            <H1>어쩌구 저쩌구 아이돌 </H1>
            <ULT>
              <LIT onClick={() => {
                setHeaderClick1(true);

              }}>카리나</LIT>
              <LIT>윈터</LIT>
              <LIT>닝닝</LIT>
              <LIT>지젤</LIT>
            </ULT>
          </Header>
          <Form>
            <FormDiv>
              <Label>닉네임:</Label>
              <Input onChange={(e) => {
                setInputName(e.target.value)
                console.log(inputName);
              }} placeholder="최대 10글자 까지!" value={inputName}></Input>
            </FormDiv>

            <FormDiv>
              <Label>내용:</Label>
              <Textarea onChange={(e) => {
                setInputContent(e.target.value)
                console.log(content);
              }} placeholder="최대 100글자 까지!" value={inputContent}></Textarea>
            </FormDiv>

            <FormDiv>
              <Label>누구한테?</Label>
              <select>
                <option value="카리나">카리나</option>
                <option value="윈터">윈터</option>
                <option value="닝닝">닝닝</option>
                <option value="지젤">지젤</option>
              </select>
            </FormDiv>
            <FormDiv style={{ justifyContent: "flex-end" }}>
              <Button onClick={(e) => {
                e.preventDefault();
                addlist();
                // setName('');
                // setContent('');

              }}>등록하기!</Button>
               <Link to='/detail'>디테일</Link>
            </FormDiv>
          </Form>
          <ListDiv>
            {headerclick1 === true ? (
            list.map((a,i)=>{
              return(
              <ULB>
                <LIB>
                  <section style={{ display: 'flex', }}>
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
                      <span>{a.name}</span>
                      <time></time>
                    </div>
                  </section>
                  <Pcon>{a.content}</Pcon>
                </LIB>
              </ULB>)
            })
            ) : ''}

          </ListDiv>
        </>} />
        <Route path="/detail" element={<Detail Container={Container} ></Detail>} />

      </Routes>

    </Container>
  );
}

export default App;
