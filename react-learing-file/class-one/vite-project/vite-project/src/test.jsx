// // this is test.jsx file 
// import ReactLogo from "./assets/react.svg";
// const ReactLogoTitle = "ReactLogoTitle";
// export function Grid() {
//     return (
//         <h1>Hello test file i am Tuhin ali</h1>
//     );
// };

// export function Img({isTos = true}) {
 
//     if(isTos) {
//         return (
//             <h1>Hello sir i am tuhin </h1>
//         );
//     } else {
//         return (
//             <h1>Hello sir </h1>
//         );
//     }
// };

const popple = ["Hello sir", "hi sir", "hey sir", "Hello hi sir"];
export function List() {
    let items = popple.map(person => {
        <li>{person}</li>
    });

    return (
       <ul>{items}</ul>
    );
}