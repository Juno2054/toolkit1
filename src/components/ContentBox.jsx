import React from 'react'
import { ULB,LIB,ListDiv,Pcon} from '../App'
function ContentBox({list,setList,postSelect,setPostSelect,headerclick1, headerclick2, headerclick3, headerclick4}) {
  const filterList= list.filter(item => item.label === postSelect);
  return (
    <ListDiv>
    {
    filterList.map((list,i)=>(
      <ULB key={i}>
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
              <span>{list.name}</span>
              <time></time>
            </div>
          </section>
          <Pcon>{list.content}</Pcon>
          <Pcon>{list.label}</Pcon>
        </LIB>
      </ULB>
    ))}
          {headerclick1 && (
        <div>
         1
        </div>
      )}
      {headerclick2 && (
        <div>
         2
        </div>
      )}
      {headerclick3 && (
        <div>
         3
        </div>
      )}
      {headerclick4 && (
        <div>
        4
        </div>
      )}

  </ListDiv>
  )
}

export default ContentBox