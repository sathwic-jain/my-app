import { useFormik } from "formik";
import {useHistory} from "react-router-dom";
export function Basicform() {
  const history=useHistory();
  const { handleChange, handleBlur, handleSubmit, values } = useFormik({
    initialValues: { username: "", password: "" },

    onSubmit: () => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          id="username"
          name="username"
          placeholder="Enter your email "
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter the password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button
          type="submit"
          onClick={() => {
            console.log("a");
            fetch("https://hackathon-crm.herokuapp.com/users/login", {
              method: "POST",
              body: JSON.stringify(values),
              headers: { "Content-Type": "APPLICATION/JSON" },
            })
              .then((response) => {
                history.push("/");
                return response.json();
              })
              .then((data) => {
                if(data.token)localStorage.setItem("token", data.token);
                // (localStorage.getItem("token"))?console.log("shit"):console.log("no shit");
                 window.location.reload();
                 
              });
          
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

// function login(values,setType){
//     console.log(values);
//     if(values.username!==""){
//     fetch("https://hackathon-crm.herokuapp.com/users/login", {
//         method: "POST",
//         body: JSON.stringify(values),
//         headers: { "Content-Type": "APPLICATION/JSON" },
//       })
//         .then((response) => (response.ok ? (alert("Successful"),setType(values.type)) : alert("invalid credentials")));

//         }
// }

//////////////////////////////////

// import { useFormik } from "formik";
// import { useState,useEffect } from "react";

// export function Basicform({type,setType}) {
//   const [change,setchange]=useState(null);

//   useEffect((values,setType)=>{
//     login(values,setType);

//   },[change]);

//   const { handleChange, handleBlur, handleSubmit, values } = useFormik({
//     initialValues: { username: "", password: "" },

//     onSubmit: (values) => {

//       console.log(values);

//     },

//   });

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="username"
//           id="username"
//           name="username"
//           placeholder="Enter your email "
//           value={values.username}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         <input
//           type="password"
//           id="password"
//           name="password"
//           placeholder="Enter the password"
//           value={values.password}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />

//         <button type="submit" onClick={()=>setchange("changed")}>Login</button>
//       </form>
//     </div>
//   );

// }

// function login(values,setType){
//     console.log(values);

//     fetch("https://hackathon-crm.herokuapp.com/users/login", {
//         method: "POST",
//         body: JSON.stringify(values),
//         headers: { "Content-Type": "APPLICATION/JSON" },
//       })
//         .then((response) => console.log(response));

//         }
