"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { useAuthStore } from "@/app/store/auth"
import { useRouter } from "next/navigation"


export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, password);
      router.push('/');
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Вход</CardTitle>
        <CardDescription>
          Введите ваш email ниже для входа в вашу учетную запись.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Электронная почта</Label>
          <Input id="email" type="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Пароль</Label>
          <Input id="password" type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit" onClick={handleSubmit}>Войти</Button>
      </CardFooter>
    </Card>
  )
}
