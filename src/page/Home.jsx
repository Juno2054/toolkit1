import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {    Container,
    Header,
    H1,
    ULT,
    LIT,
    Form,
    FormDiv,
    Label,
    Input,
    Textarea,
    Button,
    RefBun,
    MainBgimg,
    Navigation , } from"../style"
import ContentBox from "../components/ContentBox";
import { updateContent, updateList, updateName, updatePostSelect ,updateLocalDate} from "../redux/modules/appSlice";
import uuid4 from 'uuid4';


function Home() {
    const [list,setList]=useState([]);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [postSelect,setPostSelect]=useState('');
    const dispatch = useDispatch();
    const appState= useSelector((state)=>state.app);
    const userinfo=useSelector(state=>state.user);
  
  
    let [headerclick1, setHeaderClick1] = useState(false);
    let [headerclick2, setHeaderClick2] = useState(false);
    let [headerclick3, setHeaderClick3] = useState(false);
    let [headerclick4, setHeaderClick4] = useState(false);
  
    useEffect(()=>{

    },[])
    useEffect(()=>{
      dispatch(updatePostSelect('카리나'));
      setHeaderClick1(true); 
    },[]);
      //처음에 안불러와져서 다 false로 해둔후 페이지 로딩되면 카리나만 true로 바꿈
  
    const headerClicks = [headerclick1, headerclick2, headerclick3, headerclick4];
  return (
    <>
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
     if(appState.content.length>100){alert(' 100글자 이하로 써줘요!!');
    return}
//  ,폼에서 전송버튼눌럿을때 작동하는 것들
      const newContentsList={
        id:uuid4(),
        userid:localStorage.getItem('userId'),
        name:userinfo.nickname,
        content:appState.content,
        label:appState.postSelect
      };
      dispatch(updateList([...appState.list,newContentsList,]));
      setName('');
      setContent('');
    }}>
      <FormDiv>
        <Label>닉네임: </Label>
        <h1>{userinfo.nickname}</h1>

        {/* <Input type="text" 
         onChange={(e) => {
          dispatch(updateName(e.target.value));
          setName(e.target.value);
          if(name.length>=10){alert('10글자이하!')};
        }} placeholder="최대 10글자 까지!" value={name}></Input> */}
      </FormDiv>
      
{/* input 에서 입력한거 추적*/}
      <FormDiv>
        <Label>내용:</Label>
        <Textarea onChange={(e) => {
          dispatch(updateContent(e.target.value));
          setContent(e.target.value);
          
          if(content.length>=100){alert('100글자이하!')};

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
   </>
  )
 
}

export default Home