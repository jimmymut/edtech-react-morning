import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(ev){
    ev.preventDefault();
    const user = {
        username: username,
        password: password,
        email: email
    };
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("Your account is ssuccessfully created!")
    // location.reload();
    document.getElementById("form").reset();
    navigate("/login");
  }
  return (
    <form id="form" onSubmit={(event)=>handleSubmit(event)} className="p-10 max-w-md flex flex-col items-center justify-center gap-3">
        <h1 className="w-full text-center text-3xl">Register</h1>
      <div className="mb-3">
        <input
          type="text"
          placeholder="username"
           className="border"
           required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          required
          placeholder="Email"
          className="border"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input 
        type="password"
        required
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border"
         />
      </div>
      <button
       type="submit"
       className="bg-blue-500 text-white rounded px-2 py-1 mt-5"
       >Sign Up</button>
    </form>
  );
}
