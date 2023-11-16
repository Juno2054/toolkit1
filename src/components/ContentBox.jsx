import React from 'react'
import { ULB,LIB,ListDiv,Pcon,ConBoxTitle} from '../App'
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { updateList } from '../store';


function ContentBox({headerclick1,headerclick2,headerclick3,headerclick4}) {
const appState = useSelector((state) => state.app);
const dispatch=useDispatch();
const filterList = appState.list.filter((item) => item.label === appState.postSelect);

// const { list, postSelect,  } = useSelector((state)=>state.app);

// const filterList= list.filter(item => item.label === postSelect);

// useContext(Context1)

  return (
    <ListDiv wd={'500px'}>
     
      {headerclick1 && (
  <ConBoxTitle wd={'85%'} hg={'100%'} pd={'10px'}>카리나 방명록!</ConBoxTitle>
      )}
      {headerclick2 && (
 <ConBoxTitle  wd={'85%'} hg={'100%'} pd={'10px'}>윈터 방명록!</ConBoxTitle>
      )}
      {headerclick3 && (
 <ConBoxTitle  wd={'85%'} hg={'100%'} pd={'10px'}>닝닝 방명록!</ConBoxTitle>
      )}
      {headerclick4 && (
 <ConBoxTitle  wd={'85%'} hg={'100%'} pd={'10px'}>지젤 방명록!</ConBoxTitle>
      )}

    {filterList.map((list,i)=>(
   
      <ULB wd={'500px'}>
        <LIB >
        <Link key={i} to={`/detail/${list.id}`}>
          <section style={{ display: 'flex' }}>
            <figure style={{
              marginRight: "20px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}>
              
             {/* 아바타가있으면 아바타이미지 넣고 아니면 기본이미지 보여주기  */}
              <img src={list.avatar?
              (list.avatar):("https://w7.pngwing.com/pngs/710/71/png-transparent-profle-person-profile-user-circle-icons-icon-thumbnail.png")}
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
              }}>{list.name}</span>
              <time></time>
            </div>
          </section>
          <Pcon ws={'nowrap'}>{list.content}</Pcon>
          {/* <Pcon>{list.label}</Pcon> */}
          </Link>
        </LIB>
      </ULB>
     
    ))}
  </ListDiv>
  );
}

export default ContentBox