import { useState } from "react";
import InputField from "./components/utils/InputField";

export default function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <InputField
        label="Username"
        value={username}
        onChange={setUsername}
        placeholder="Enter your username"
      />
      
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="Enter your email"
      />

      <div  className="bg-gray-100 p-2 rounded">
        {username}
      </div>
      <div  className="bg-gray-100 p-2 rounded">
         {email} 
      </div>
    </div>
  );
}
