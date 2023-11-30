// 스타일컴포넌트

import styled from "styled-components";
import { Link } from 'react-router-dom';

let Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("https://i.pinimg.com/originals/19/23/32/192332eebcc51b403e5ad37c94ddc991.jpg");
    background-size: cover;
    width: 100%;
    height: ${props=>props.he};
    max-width: 2000px;
    min-width: 500px;
    margin-left:auto;
    margin-right: auto;
    
`;
let Header = styled.div`
    position: relative;
    background-image: url();
    background-color: green;
    background-size: 25%;
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
`
let Pcon = styled.p`
    margin-left: 50px;
    background-color: rgb(37, 33, 33);
    border-radius: 10px;
    padding: 10px;
    white-space: ${props=>props.ws};
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    color: white;;
    line-height: 2.1;
`
let H1 = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 50px;
  color: black;
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
    background-color: ${props=>props.bg };
    color: whitesmoke;
    transition: all 0.5s;
    &:hover{
    transform: scale(1.2);
    color: #005e74
    }
`;
let ULB = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: ${props=>props.wd};
    height: ${props=>props.he};
    background-color:transparent;
    padding: 20px;
    border-radius: 5px;
    margin: 0px auto;
    border: 2px solid black;
    transition: all 0.7s;
    &:hover{
      transform: scale(1.2);
      background-color:#333333;
    }

    
`
let LIB = styled(Link)`
    text-decoration: none;
    color: white;;
    
li{
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid white;
    border-radius: 5px;
    cursor: pointer;
    
    }

`;
let Form = styled.form`
   width: 500px;
    background-color: transparent;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 20px;
    border: 2px solid white;
  
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
    box-sizing: border-box;
`
let Textarea = styled.textarea`
    resize: none;
    height: 80px;
    width: 100%;
    padding: 5px 10px;
`
let Button = styled.button`
    background-color: rgb(0, 0, 0);
    font-size: 14px;
    padding: 5px 10px;
    cursor: pointer;
    user-select: none;
    background-color:transparent;
    text-align: right;
    color: white;
    transition: all 1s;
    &:hover{
      background-color: #ff79b0;

    }
`
let ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: ${props=>props.wd};
    background-color: transparent;
    padding: 20px;
    border-radius: 5px;
    margin: 0px auto;
    border: 2px solid white;
    transition: all 0.6s;

`

let RefBun = styled.button`
  background-color: ${props=>props.bg };
  font-size: 14px;
    padding: 5px 10px;
    cursor: pointer;
    user-select: none;
    text-align: right;
    color: white;
    transition: all 0.5s;
    margin: 10px;
    &:hover{
      background-color: #ff2b0f;

    }

`
let TextArea= styled.textarea`
    width: 95%;
    background-color: rgb(37, 33, 33);
    border-radius: 10px;
    padding: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    color: white;;
    
`
let MainBgimg= styled.img`
  background-image:url('https://pickcon.co.kr/site/data/img_dir/2021/05/10/2021051080072_0.jpg');
  width:  100%;
  height: 100%;
  background-size: cover;
  
   `
let ConBoxTitle= styled.div`
  width: ${props=>props.wd};
  height: ${props=>props.hg};
  padding: ${props=>props.pd};
  margin: 10px 30px;
  text-align  :center ;
  font-size: 30px;
  color: white;
  border: 3px solid white;
`
let StyledH1= styled.h1`
  text-align: center;
  font-size: 30px;
  color: black;
    margin-bottom: 20px;
    flex: 1;
`
let Navigation = styled.nav`
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
`
export {
    Container,
    Header,
    H1,
    ULT,
    LIT,
    ULB,
    LIB,
    Form,
    FormDiv,
    Label,
    Input,
    Textarea,
    Button,
    ListDiv,
    Pcon,
    RefBun,
    TextArea,
    ConBoxTitle,
    MainBgimg,
    StyledH1,
    Navigation ,
  };