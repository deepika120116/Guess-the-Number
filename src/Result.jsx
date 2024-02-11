const Result=({suspense,userNum})=>{
    let output="";
    output=userNum>suspense?"Higher":userNum<suspense?"Lower":"is Correct!";
    return (
        <h3>You Number: {output}</h3>
    )
}
export default Result;