import react from "react";
import './post.css'
import Avatar from '@mui/material/Avatar';
function Post(){
    return (
      <div className="post"> 
        <div className="post_header">
          <Avatar className="post_logo" alt="" src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/11/Nature-Whatsapp-DP-Profile-Images-Download-10.jpg" />
          <h3>username</h3>
        </div>
          
          <img  className="post_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6U5PJWfTR0yjxw4Mw884Qmq0U5gS7ifXgPpsb44FjsEDEOkSLGR9Dc-Hru1Lbvs1h67I&usqp=CAU" />
          <h4 className="post_text"><strong>username</strong>Believe in yourself</h4>
      
      </div>
    )
}
export default Post