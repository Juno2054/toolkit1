import React, {  useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { updateContent, updateList, updateName, updatePostSelect ,updateLocalDate} from "./store";
import './App.css';
import './reset.css';
import ContentBox from "./components/ContentBox";
import styled from 'styled-components';
import Detail from "./components/Detail";
import { Routes, Route, Link } from "react-router-dom";
import uuid4 from "uuid4";
import fakeData from "./fakeData.json"
import fakeData2 from"./fakeData2.json"



// export const Context1 =createContext();

// 
// styled-components 사용 부분
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
// 위에는 styled-components
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
  ConBoxTitle
};
//styled-components export 한것들

function App() {
  const [list,setList]=useState([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [postSelect,setPostSelect]=useState('');

  const dispatch = useDispatch();
  const appState= useSelector((state)=>state.app);
  // const listLocalStorage=useSelector((state)=>state.local);


  let [headerclick1, setHeaderClick1] = useState(false);
  let [headerclick2, setHeaderClick2] = useState(false);
  let [headerclick3, setHeaderClick3] = useState(false);
  let [headerclick4, setHeaderClick4] = useState(false);
//로딩때 데이터를 안가져와서 데이터도 가져오게함 

// useEffect(()=>{
//   setList(['']);
//   return()=>{
//     setList([]);
//     dispatch(updateList([]));
//   }
// },[])

  useEffect(()=>{
    // dispatch(updateLocalDate([fakeData2]));
    // dispatch(updateList([...list]));
    dispatch(updatePostSelect('카리나'));
    setHeaderClick1(true);
  },[]);
    //처음에 안불러와져서 다 false로 해둔후 페이지 로딩되면 카리나만 true로 바꿈


  const headerClicks = [headerclick1, headerclick2, headerclick3, headerclick4];

  // const contextValue = {
  //   list,
  //   setList,
  //   name,
  //   setName,
  //   content,
  //   setContent,
  //   postSelect,
  //   setPostSelect,
  //   headerclick1,
  //   headerclick2,
  //   headerclick3,
  //   headerclick4,
  //   setHeaderClick1,
  //   setHeaderClick2,
  //   setHeaderClick3,
  //   setHeaderClick4,
  // };


  // function addlist() {
  //   let copy1 = [...name];
  //   let copy2 = [...content];
  //   let copy3 = [...list]
  //   copy1.push(inputName)
  //   copy2.push(inputContent)
  //   setName(copy1);
  //   setContent(copy2);
  //   copy3.push({ name: inputName, content: inputContent })
  //   setList(copy3);
  //   console.log(list);
  // }
  return (
    // <Context1.Provider store={store}>
    <Container he={'100%'}>
    
      <Routes>
        {/* 메인페이지 */}
        <Route path="*" element={     <>
    <Link to='/'><RefBun bg={'green'}>되돌아가기</RefBun></Link>
    <h1 style={{
    color:"white",
    fontSize:"50px",
   }}> 몰?루? 는 페이지임 돌아가죠 ??</h1>
    <img style={{width :"30%",}}
    src='https://i.namu.wiki/i/dE4-V5zTsBBRqHJcjBc_H-uPBBJ8bKa23ecQ-L_uhelHzA6MADc4KrmmYgqPaSfIPiLWO2rm3Zu5qu_OCsEEqy7YRA_2W0yAYEhikRQAiAzlYR5bXPzbafHFimy7W2V8-FBHGjgKJWgL9hvc0TNlTw.webp'></img>

    </> } />
        <Route path="/" element={<>
          <Header>
          <MainBgimg></MainBgimg>
            <H1 ></H1>
            <ULT>
              {/* //상단 리스트 */}
              <LIT bg={headerclick1==true ? '#ff79b0':'transparent'} onClick={() => {
               setHeaderClick1(prevState => !prevState);
               setPostSelect('카리나');
               dispatch(updatePostSelect('카리나'));
               setHeaderClick2(false);
               setHeaderClick3(false);
               setHeaderClick4(false);

              }}>카리나</LIT>

              <LIT bg={headerclick2==true ? '#ff79b0':'transparent'}onClick={() => {
                setHeaderClick2(prevState => !prevState);
                setPostSelect('윈터');
                dispatch(updatePostSelect('윈터'));
                setHeaderClick1(false);
                setHeaderClick3(false);
                setHeaderClick4(false);
              }}>윈터</LIT>

              <LIT bg={headerclick3==true ? '#ff79b0':'transparent'}onClick={() => {
                setHeaderClick3(prevState => !prevState);
                setPostSelect('닝닝');
                dispatch(updatePostSelect('닝닝'));
                setHeaderClick1(false);
                setHeaderClick2(false);
                setHeaderClick4(false);
              }}>닝닝</LIT>

              <LIT bg={headerclick4==true ? '#ff79b0':'transparent'} onClick={() => {
               setHeaderClick4(prevState => !prevState);
               setPostSelect('지젤');
               dispatch(updatePostSelect('지젤'));
               setHeaderClick1(false);
               setHeaderClick2(false);
               setHeaderClick3(false);
              }}>지젤</LIT>
            </ULT>
          </Header>
          <Form onSubmit={function(e){
            e.preventDefault();
            if(appState.name.length<3){alert(' 닉네임에 3글자이상은 적어줘요');
          return}
            else if(appState.content.length<10){alert(' 내용에 10글자이상은 적어줘요');
          return}
          if(appState.name.length>10){alert(' 10글자 이하로써줘요!!');
          return}
            else if(appState.content.length>100){alert(' 100글자 이하로 써줘요!!');
          return}
//  ,폼에서 전송버튼눌럿을때 작동하는 것들
            const newContentsList={
              id:uuid4(),
              name:appState.name,
              content:appState.content,
              // label:appState.postSelect,
              label:appState.postSelect
            };
            dispatch(updateList([...appState.list,newContentsList,]));
            // setList([...list,newContentsList,]);
            // dispatch(updateName(''));
            // dispatch(updateContent(''));
            // console.log(updateList);
            // console.log(list)
            setName('');
            setContent('');
          }}>
            <FormDiv>
              <Label>닉네임:</Label>
              <Input type="text" 
              
               onChange={(e) => {
                dispatch(updateName(e.target.value));
                setName(e.target.value);
                if(name.length>=10){alert('10글자이하!')};
                // console.log(name);
              }} placeholder="최대 10글자 까지!" value={name}></Input>
            </FormDiv>
            
{/* input 에서 입력한거 추적*/}
            <FormDiv>
              <Label>내용:</Label>
              <Textarea onChange={(e) => {
                dispatch(updateContent(e.target.value));
                setContent(e.target.value);
                
                if(content.length>=100){alert('100글자이하!')};
                // console.log(content);
              }} placeholder="최대 100글자 까지!" value={content}></Textarea>
            </FormDiv>

            <FormDiv>
              <Label>누구한테?</Label>
              <select style={{transition:"all 0.5s",
            
                                  }}
              onChange={(e)=>{
                dispatch(updatePostSelect(e.target.value));
                setPostSelect(e.target.value);
                setHeaderClick1(e.target.value === "카리나");
                setHeaderClick2(e.target.value === "윈터");
                setHeaderClick3(e.target.value === "닝닝");
                setHeaderClick4(e.target.value === "지젤");
                }}
                // 셀렉트에서 선택하면 위에는 안바뀌는거 연동 
            value={postSelect}>
                <option value="카리나">카리나</option>
                <option value="윈터">윈터</option>
                <option value="닝닝">닝닝</option>
                <option value="지젤">지젤</option>
              </select>
            </FormDiv>
            <FormDiv style={{ justifyContent: "flex-end" }}>
              <Button type="submit">등록하기!</Button>
               {/* 디테일페이지 확인용 <Link to='/detail'>디테일</Link> */}
               
            </FormDiv>
          </Form>
          {/* {headerclick1?(
          <ContentBox list={list} setList={setList} postSelect={postSelect}
          headerclick1={headerclick1} headerclick2={headerclick2} headerclick3={headerclick3}
          headerclick4={headerclick4}
          />):''
          } */}

{/* 리스트 맵 함수로 돌려서 보여주는곳 */}
             {
          headerClicks.map((headerClicks, index) => (
            headerClicks ===true ? (
            <ContentBox
              key={index}
              list={appState.list}
              setList={(newList) => dispatch(updateList(newList))}
              postSelect={(appState.postSelect)}
              headerclick1={index === 0}
              headerclick2={index === 1}
              headerclick3={index === 2}
              headerclick4={index === 3}
            />
          ) : null
        )) }

    
        </>} />
        <Route path="/detail/:id" element={<Detail Container={Container} list={list} setList={setList}></Detail>} />

      </Routes>

    </Container>
    // </Context1.Provider>
  );
}

export default App;
