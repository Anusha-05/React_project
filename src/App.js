import './App.css';
import React , { component, useState } from 'react';
//import Mycomponent from './components/Greet';

import Post from './components/post';
import Avatar from '@mui/material/Avatar';

function App() {

const [ posts , setPost ] = useState([
  {
    username:"damon", 
     caption:"This is awesome!", 
     imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6U5PJWfTR0yjxw4Mw884Qmq0U5gS7ifXgPpsb44FjsEDEOkSLGR9Dc-Hru1Lbvs1h67I&usqp=CAU"

  },
{
  username:"Elena" ,
 caption:"stay cool!!",
 imageUrl:"https://captionbuddy.com/data/uploads/2020/11/Instagram-Positive-Quotes-05.png" 
}
])
useEffect( ()=>{
//run while page loads or changes in variable posts
}, [])


  return (
    <div className='app'>
   <div className='app_header'>
     <img  className="app_headerImage" width="150" height="100"    src="http://shimmeringsoul.weebly.com/uploads/1/3/0/3/13031044/1-xkmi4fb5vws6-my7b22lza_1.png"/>
   </div>

   <div className='post_stories'>
   <Avatar className="post_logo" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rSCbgUoRKCPNKlcRWE8lxnuaj_k1dtw8YH45RVQ9jwN-duV35NEwofKbJJELb3Z6jS4&usqp=CAU" />
   <Avatar className="post_logo" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRc1FTOKvZTMPirwIsoy-APdeUsbvUMUT0RZq1oPyuo5FvhsFZxDct9ci3OEMPjD4uFdA&usqp=CAU" />
   <Avatar className="post_logo" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVxi0J5NVRHIUzXxU_sOsxqCReLdHQExKXMZKT7SnIUgBVW1Y08TFYDl_p4YMTGhyFTc&usqp=CAU" />
   </div>


  

{
  posts.map(post => 
    <Post username={post.username} caption={post.caption}  imageUrl={post.imageUrl}/>
  )
}
   {/* <Post  username="damon"  caption="This is awesome!" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6U5PJWfTR0yjxw4Mw884Qmq0U5gS7ifXgPpsb44FjsEDEOkSLGR9Dc-Hru1Lbvs1h67I&usqp=CAU" /> */}
   {/* <Post  username="Elena" caption="stay cool!!" imageUrl="https://captionbuddy.com/data/uploads/2020/11/Instagram-Positive-Quotes-05.png" /> */}
   {/* <Post/> */}
   </div>
  );
}

export default App;
