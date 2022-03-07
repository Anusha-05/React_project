import react from "react";
import './post.css'
import Avatar from '@mui/material/Avatar';
function Post({ username ,caption,imageUrl }){
    return (
      <div className="post"> 
        <div className="post_header">
          <Avatar className="post_logo" alt="" src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/11/Nature-Whatsapp-DP-Profile-Images-Download-10.jpg" />
          <h3>{ username }</h3>
        </div>
          
          <img  className="post_image"  src={imageUrl} />
          <h4 className="post_text"><strong>{ username }</strong> {caption}</h4>
      
      </div>
    )
}
export default Post