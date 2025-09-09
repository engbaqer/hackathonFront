import { Button } from "@/components/ui/button";
import apiClient from "./components/utils/apiErorrHandeler";

export default function App() {
  const testApi = async () => {
    try {
    
      await apiClient.get("/posts");
    } catch (error) {
      
      console.error("Caught in component:", error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-red-500 items-center justify-center">
      <Button onClick={testApi}>Test API Error</Button>
    </div>
  );
}
