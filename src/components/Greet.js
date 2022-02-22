import react from "react" ;

// function Greet(){
//     return <h1>hello Anusha</h1>
// }

//arrow function
const Greet = (props) => {
return(
<div>
<h1>hello {props.name}</h1>
{props.children}
</div>
)

}
// export const Greet = () => <h1>hello Anusha</h1> (named export)

export default Greet 