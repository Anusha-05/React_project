import React from "react" ;

const Hello = () =>{

//jsx format
    // return (
    //     <div>
    //         <h1>hello Mom</h1>
    //     </div>
    // )
//without jsx
 return React.createElement('div' ,{ id : "helo" , className : "dummy" } , React.createElement('h1' ,null , 'hello mom and dad'));



}

 export default Hello