import { Button } from "@/components/ui/button";
import apiClient from "./components/utils/apiErorrHandeler";
import { useState } from "react";

export default function App() {
  const [response, setResponse] = useState(null);

  const testApi = async () => {
    try {
      const res = await apiClient.get("/posts"); // ✅ this will succeed if baseURL is JSONPlaceholder
      setResponse(res.data); // store the data in state
    } catch (error) {
      console.error("Caught in component:", error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-red-500 items-center justify-center gap-4 p-4">
      <Button onClick={testApi}>Test API</Button>

      {response && (
        <pre className="bg-white text-black p-2 rounded max-h-64 overflow-auto w-full">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}
