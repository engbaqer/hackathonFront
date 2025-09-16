"use client";
import { useGlobalState } from "../(blank-layout)/login/GlobalState";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/request";

export default function RegistrationForm() {
  const { userName, setUserName, email, setEmail, password, setPassword } =
    useGlobalState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: userName,
      email: email,
      password: password,
    };

    try {
      const result = await apiRequest("users/register", {
        method: "POST",
        body: payload,
      });

      console.log("Registration successful:", result);
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create Your Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="John Doe"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter a secure password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <CardFooter className="flex-col gap-2 mt-4">
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
