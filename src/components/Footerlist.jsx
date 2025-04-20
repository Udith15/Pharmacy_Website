import React from 'react'

const Footerlist = (props) => {
const data=props.lis.map((item,index)=>{
        return (
            <li key={index}>{item}</li>)
})
  return (
    <div>
        <h3>{props.tit}</h3>
        <ul>{data}</ul>
    </div>
  )
}

export default Footerlist
