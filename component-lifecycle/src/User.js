import React from 'react'

const User = (props)=>{
    console.log("User-peops:",props)
    const {name, avatar,url} = props;


    return(
        <div>
             <h5>{name}</h5>
             <div>
                <img  style={{borderRadius: "50%"}} height="200" width="200" src ={avatar} alt=""/>
             </div>
             <a href={url}>Github_url</a>
        </div>
    )
}
export default User;