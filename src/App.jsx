import { useState } from "react";
import InputField from "./components/custom/InputField";
import ActionButton from "./components/custom/ActionButton";
import InfoCard from "./components/custom/InfoCard";
import Modal from "./components/custom/Modal";


export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  return (
    <div className="p-6  mx-auto space-y-6">
      {/* Card for Form */}
      <InfoCard title="User Info Form">
        <InputField
          label="Name"
          value={name}
          onChange={setName}
          placeholder="Enter your name"
        />
        <InputField
          label="Email"
          value={email}
          onChange={setEmail}
          placeholder="Enter your email"
        />
        <ActionButton onClick={() => alert(`Name: ${name}, Email: ${email}`)}>
          Submit
        </ActionButton>
      </InfoCard>

      {/* Modal Example */}
      <Modal
        title="Welcome Modal"
        trigger={<ActionButton variant="secondary">Open Modal</ActionButton>}
      >
        <p>Hello {name || "Guest"}, welcome to the hackathon app!</p>
      </Modal>


    </div>
  );
}
