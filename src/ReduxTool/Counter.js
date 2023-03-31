// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addInput, decrement, increment } from "./counterSlice";

// export function Counter() {
//   const [fullname, setFullName] = useState("");
//   const [email, setEmail] = useState("");

//   const data = [ fullname, email]
//   const count = useSelector((state) => state.counter.value);
//   const username = useSelector((state) => state.data);
//   const dispatch = useDispatch();

//   function handleSubmit() {
//     dispatch(addInput(data));
//   }

//   return (
//     <div>
//       <div>
//         <p>{username}</p>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           name="name"
//           value={fullname}
//           onChange={(e) => setFullName(e.target.value)}
//         />
//         <button onClick={handleSubmit}>Submit</button>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// }
