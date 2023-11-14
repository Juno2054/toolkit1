import React from 'react'
import { ULB,LIB,ListDiv,Pcon} from '../App'
import { Link } from 'react-router-dom';
function ContentBox({list,postSelect,headerclick1, headerclick2, headerclick3, headerclick4,}) {
const filterList= list.filter(item => item.label === postSelect);


  return (
    <ListDiv>
                {headerclick1 && (
        <div>
         카리나
        </div>
      )}
      {headerclick2 && (
        <div>
         윈터
        </div>
      )}
      {headerclick3 && (
        <div>
         닝닝
        </div>
      )}
      {headerclick4 && (
        <div>
        지젤
        </div>
      )}
    {filterList.map((list,i)=>(
   
      <ULB >
        <LIB >
        <Link key={i} to={`/detail/${list.id}`}>
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
              }}>{list.name}</span>
              <time></time>
            </div>
          </section>
          <Pcon>{list.content}</Pcon>
          {/* <Pcon>{list.label}</Pcon> */}
          </Link>
        </LIB>
      </ULB>
     
    ))}
  </ListDiv>
  );
}

export default ContentBox