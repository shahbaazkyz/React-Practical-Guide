import "./App.css";

const fn = () => {
    let arr = ["A", "B", "C"];
    let obj = {
        name: "Shahbaz",
        age : 21
    }
    let str = "Hello World";
    let numb = 21

    let dynamicCSS = {
        fontSize : "18px",
        fontWeight : 500,
        borderBottom: "solid 1px black",
        width : "160px"
    }

    return (
        <div>
            <p style={{ color: "red" }}  >Component 1: Para 1 { arr.join(" ") }</p>
            <p style = {dynamicCSS} >Component 1: Para 2 {str} {obj.name } {obj.age}   </p>
            <p className = "container">Component 1: Para 3 {numb}  </p>
        </div>
    );
}

export default fn;